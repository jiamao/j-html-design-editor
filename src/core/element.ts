import EventEmiter from 'j-eventemitter';
import JTransform from '../constant/transform';
import JStyle from './style';
import util from 'j-design-util';
import JEvent, { SupportEventNames } from '../core/event';
import JElementCssStyle from '../constant/styleMap';
import { IJElement, ITransform, IJEditor, IElementOption, IElementJSON } from '../constant/types';
import JData, { JElementData } from '../constant/data';
/**
 * @public
 */
export default class JElement<T extends HTMLElement = HTMLElement> extends EventEmiter  implements IJElement{

    constructor(option = {} as IElementOption) {
        super();

        this._id = this.id || option.id || util.uuid();
        this._type = this.type || option.type || '';

        const nodeType = option.nodeType || 'div';

        // @ts-ignore
        this._dom = document.createElement(nodeType);   
        
        if(option.editor) this.editor = option.editor;

        // 样式代理处理
        this.style = JStyle.createProxy();
        this.style.on('change', (s) => {
            this.setDomStyle(s.name, s.value);

            this.emit('styleChange', {
                type: 'styleChange',
                data: s,
                target: this
            });
        });

        // 变换控制的是核心元素
        this.transform = JTransform.createProxy(option.transform, {
            target: this,
            // 如果指定了只响应某几个属性
            watchProps: option.transformWatchProps
        });
        const dataType = option.dataType || JElementData;
        // @ts-ignore
        this.data = JElementData.createProxy(new dataType());
        // 名称
        this.name = option.name || '';

        // 如果是组件，不在这里进行数据初始化调用
        this.initData(option);
        // @ts-ignore
        if(option.className) this.className = option.className;
        
        this.bindEvent();// 事件绑定
    }
    // 初始化一些基础属性
    initData(option) {
        // 属性变化映射到style
        this.data.watch([
            'left', 'top', 'width', 'height', 'zIndex', 'visible'
        ], {
            set: (item) => {
                if(item.name === 'visible') {
                    this.style.display = item.value? 'block': 'none';
                }
                else if(item.name === 'rotation') {
                    this.transform.rotateZ = item.value;
                }
                else if(item.name === 'angle') {
                    this.transform.rotateZ = util.degToRad(item.value);
                }
                else this.style[item.name] = item.value;
            },
            get: (name: string) => {
                if(name === 'width') {
                    let w = this.style.width || 0;
                    if((!w || w === 'auto') && this.dom && this.dom.clientWidth) return this.dom.clientWidth;
                    return w;
                }
                else if(name === 'height') {
                    let h = this.style.height || 0;
                    if((!h || h === 'auto') && this.dom && this.dom.clientHeight) return this.dom.clientHeight;
                    return h;
                }
                else if(name === 'rotation') {
                    return this.transform.rotateZ;
                }
                else if(name === 'angle') {
                    return util.radToDeg(this.transform.rotateZ);
                }
                else if(name === 'visible') {
                    return this.style.display !== 'none';
                }
                return this.style[name];
            }
        });
        
        if(option.style) this.style.apply(option.style);
        if(option.editable === false) this.editable = false;
        if(option.visible === false) this.visible = false;

        if(option.data) {
            this.data.from(option.data);
        }
    }

    // 绑定事件
    bindEvent(dom?: HTMLElement) {
        // 事件托管
        this.event = new JEvent(dom || this.dom);
        this.event.init((e: Event|MouseEvent) => {  
            this.emit(e.type, e);
        });
    }

    protected _id: string = '';
    get id() {
        return this._id;
    }

    // 名称
    public name: string = '';

    // 类型名称
    protected _type = '';
    get type() {
        return this._type;
    }
    // 子元素
    private _children = [] as Array<IJElement>;
    get children() {
        return this._children;
    }
    // 控件最外层的容器
    protected _dom: T;
    get dom() {
        return this._dom;
    }
    // 父元素
    parent: IJElement | undefined;

    // 当前编辑器
    editor: IJEditor;

    // 事件处理
    event: JEvent;

    // 样式代理
    style: JElementCssStyle;

    data: JElementData;    
    
    get className() {
        return this.dom.className;
    }
    set className(v: string) {
        this.dom.className = v;
    }  

    get visible() {
        return this.data.visible;
    }
    set visible(v: boolean) {
        this.data.visible = v;
    }

    // 元素框
    get bounds() {
        const rect = util.getElementBoundingRect(this.dom);
        if(this.editor) {
            const pos = this.editor.toEditorPosition(rect);
            rect.x = pos.x;
            rect.y = pos.y;
        }
        return rect;
    }

    // 是否可编辑
    editable: boolean = true;

    // 变换
    transform: ITransform;

    // 当前子元素最大的level层
    get childrenMaxLevel() {
        let level = 0;
        for(const c of this.children) {
            level = Math.max(c.data.zIndex, level);
        }
        return level;
    }

    // 设置css到dom
    setDomStyle(name: string, value: string) {
        if(name === 'backgroundImage' && value) {
            if(!/^\s*url\(/.test(value)) value = `url(${value})`;
        }
        util.css(this.dom, name, value);
    }   

    // 设置样式
    css(name: string|Object, value?: string|number) {
        util.css(this, name, value);
        return this;
    }
    // dom属性
    attr(name: string, value?: string|number|undefined) {
        return util.attr(this.dom, name, value);
    }
    // 移位
    move(dx: number, dy: number) {
        const x = util.toNumber(this.data.left) + dx;
        const y = util.toNumber(this.data.top) + dy;
        this.data.left = Number(x.toFixed(2));
        this.data.top = Number(y.toFixed(2));
        this.emit('move', {dx, dy});
    }

    // 把子元素按zIndex排序
    childrenSort() {
        return this.children.sort((a, b) => a.data.zIndex - b.data.zIndex);
    }

    // 重置大小
    resize(w, h) {
        if(typeof w === 'number') {
            this.data.width = w;
        }
        if(typeof h === 'number') {
            this.data.height = h;
        }
    }

    // 新增子元素
    addChild(child: IJElement|HTMLElement, parent: IJElement = this) {
        if(Array.isArray(child)) {
            for(const c of child) {
                parent.addChild(c);
            }
            return parent;
        }
        if(child instanceof JElement) {
            if(!child.parent) child.parent = parent;
            // 如果没有指定层级，则新加的都在最大
            if(!child.data.zIndex || child.data.zIndex == 0) {
                child.data.zIndex = this.childrenMaxLevel + 1;
            }
            parent.dom.appendChild(child.dom);
            parent.children.push(child);

            this.emit('childAdded', child);
        }
        else if(child instanceof HTMLElement) {
            parent.dom.appendChild(child);
        }
    }

    // 移除自已
    remove() {
        if(this.parent) this.parent.removeChild(this);
    }

    // 移除子元素
    removeChild(el: IJElement|HTMLElement) {
        // @ts-ignore
        if(el.dom && el.dom.parentElement === this.dom) this.dom.removeChild(el.dom || el);

        // @ts-ignore
        if(el.selected) el.selected = false;

        for(let i=this.children.length-1;i>-1; i--) {
            if(this.children[i] === el) this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    }

    // 转为json
    toJSON(props=[], ig=(p: IJElement)=>true): IElementJSON {
        const fields = ['type', 'data', 'style', 'transform', 'id', 'filters',  ...props];
        const obj = {
            children: []
        };
       
        for(const k of fields) {
            const v = this[k];
            if(typeof v === 'string' || typeof v === 'number') {
                obj[k] = this[k];
            }
            else if(v && v.toJSON) {
                obj[k] = v.toJSON();
            }
        }

        if(this.children && this.children.length) {
            for(const child of this.children) {
                if(child === this || ig(child) === false) continue;
                obj.children.push(child.toJSON())
            }
        }
        return obj;
    }

    toString() {
        const obj = this.toJSON();
        return JSON.stringify(obj);
    }

    toHtml() {
        return this.dom.outerHTML;
    }

    // 丢弃
    dispose() {
        this.event.dispose();
        if(this.data) {
            this.data.removeAllListeners();
            delete this.data;
        }
        if(this.style) {
            this.style.removeAllListeners();
            delete this.style;
        }
        this.removeAllListeners();
    }
}
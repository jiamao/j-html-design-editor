var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JSvg from './components/svg';
import JElement from './core/element';
import JController from './core/controller';
import JFonts from './core/fonts';
import util from './lib/util';
import { Debounce } from './lib/decorator';
import { SupportEventNames } from './core/event';
/**
 * @public
 */
export default class JEditor extends JBase {
    constructor(option = {}) {
        option.style = option.style || {};
        Object.assign(option.style, {
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',
        });
        // @ts-ignore 外层只响应Z轴旋转
        option.transformWatchProps = [
            'rotateZ', 'scaleX', 'scaleY'
        ];
        super(option);
        if (typeof option.container === 'string')
            option.container = document.getElementById(option.container);
        this.view = new JElement({
            style: {
                'border': '0',
                'padding': '0',
                'margin': '0',
                'position': 'relative',
                'width': '100%',
                'height': '100%',
            }
        });
        // 字体管理实例
        this.fonts = new JFonts(option.fonts);
        this.target.css({
            'overflow': 'hidden'
        });
        if (option.container)
            option.container.appendChild(this.view.dom);
        this.view.addChild(this.dom);
        // @ts-ignore
        this.regShape({ 'image': JImage, 'text': JText, 'svg': JSvg });
        this.init(option);
        this.bindEvent(this.view.dom);
    }
    // 初始化整个编辑器
    init(option) {
        if (option.style.containerBackgroundColor)
            this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        // 生成控制器
        this.elementController = new JController({
            ...option.controllerOption,
            visible: false,
            editor: this,
        });
        const styleNode = document.createElement('style');
        styleNode.innerHTML = `.j-design-editor-container {
                                    border: 0;
                                }
                                .j-design-editor-container:hover {
                                    box-shadow: 0 0 1px 1px rgba(255,255,255,0.5);
                                }`;
        this.dom.appendChild(styleNode);
        // 字体加载成功，同时加入到dom结构中
        this.fonts.on('load', (font) => {
            styleNode.append(font.toHtml());
        });
        this.on('select', (e) => {
            this.select(this); // 选中自已
        });
        this.on('mousedown', function (e) {
            if (e.button === 0) {
                this.selected = true;
                this.elementController.onDragStart(e);
            }
        });
        // 刷新样式
        this.style.refresh();
        this.resize(); // 触发一次大小改变
        //this.bindElementEvent(this);
    }
    // 外层用于定位的容器
    view;
    // 所有支持的类型
    shapes = new Map();
    // 元素控帛器
    elementController;
    fonts; // 字体管理器
    // 重写子集为target
    get children() {
        return this.target.children;
    }
    // 被选中的元素
    get selectedElements() {
        const res = [];
        for (const el of this.children) {
            if (el instanceof JBase && el.selected) {
                res.push(el);
            }
        }
        return res;
    }
    // 绑定事件
    bindEvent(dom) {
        if (this.view)
            super.bindEvent(this.view.dom); // 编辑器事件绑到整个容器上
    }
    // 选中某个元素
    select(el) {
        if (el.selected) {
            // 选把所有已选择的取消
            this.selectedElements.map(p => {
                if (p !== el) {
                    p.selected = false;
                    return p;
                }
            });
            if (el.editable)
                this.elementController.bind(el);
        }
        else
            this.elementController.unbind(el);
    }
    resize(width = this.data.width, height = this.data.height) {
        this.data.left = Math.max((util.toNumber(this.view.dom.clientWidth) - util.toNumber(width)) / 2, 0);
        this.data.top = Math.max((util.toNumber(this.view.dom.clientHeight) - util.toNumber(height)) / 2, 0);
        this.data.width = width;
        this.data.height = height;
        this.attr('data-size', `${width}*${height}`);
        this.emit('resize', {
            width,
            height
        });
    }
    // 添加元素到画布
    addChild(child) {
        if (child === this.target || child instanceof HTMLElement) {
            return super.addChild(child);
        }
        this.bindElementEvent(child);
        child.parent = this; // 把父设置成编辑器
        child.editor = this;
        // 刷新样式
        child.style.refresh();
        child.editable = this.editable; // 当前是否可编辑
        this.target.addChild(child, this.target);
    }
    // 移除
    removeChild(el) {
        if (el === this.target) {
            //console.warn('不能移除自已');
            return;
        }
        if (el instanceof JElement) {
            el.off(SupportEventNames);
            el.off(['select', 'styleChange', 'dataChange']);
        }
        return this.target.removeChild(el);
    }
    // 绑定元素事件
    bindElementEvent(el) {
        const self = this;
        // 监听样式改变
        el.on([
            ...SupportEventNames,
            'styleChange', 'select', 'dataChange'
        ], function (e) {
            // 左健选中
            if (e.type === 'mousedown') {
                this.selected = true;
                if (e.button === 0)
                    self.elementController.onDragStart(e);
            }
            // 选中状态改变
            else if (e.type === 'select') {
                self.select(this);
            }
            // 如果是字体依赖，则检查字体支持情况
            else if (e.type === 'styleChange') {
                // 字体发生改变，需要做check, 并加载字体生效
                if (e.data.name === 'fontFamily' && e.data.value) {
                    self.fonts.load(e.data.value).catch((e) => {
                        console.error(e);
                    }); // 异步加载字体
                }
            }
            self.emit('elementChange', {
                type: e.type,
                data: {
                    id: this.id,
                    ...e.data
                },
                event: e,
                target: this
            });
        });
    }
    // 通过ID获取子元素
    getChild(id) {
        for (const child of this.children) {
            if (child.id === id)
                return child;
        }
    }
    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos, dom = this.target.dom) {
        // 编辑器坐标
        const editorPos = util.getElementBoundingRect(dom);
        return {
            x: pos.x - editorPos.x,
            y: pos.y - editorPos.y
        };
    }
    clear() {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });
        for (let i = this.children.length - 1; i >= 0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }
        this.elementController.data.visible = false;
    }
    // 缩放
    scale(x, y = x) {
        if (x < 0.1 || y < 0.1)
            return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }
    // 注册自定义组件
    regShape(name, shape) {
        if (typeof name === 'object') {
            for (const n in name) {
                this.regShape(n, name[n]);
            }
            return;
        }
        if (this.shapes.has(name))
            throw Error(`元素类型${name}已经存在`);
        this.shapes.set(name, shape);
        return shape;
    }
    // 创建元素
    createShape(type, option = {}) {
        const shape = typeof type === 'string' ? this.shapes.get(type) : type;
        if (!shape) {
            throw Error(`${type}不存在的元素类型`);
        }
        // @ts-ignore
        const el = new shape({
            ...option,
            editor: this,
            type,
        });
        return el;
    }
    fromJSON(data) {
        this.clear();
        if (typeof data === 'string')
            data = JSON.parse(data);
        if (data.style) {
            this.style.apply(data.style); // 应用样式
        }
        this.resize(data.width || data.data.width, data.height || data.data.height);
        for (const c of data.children) {
            if (!c.type)
                continue;
            const item = this.createShape(c.type, c);
            this.addChild(item);
        }
    }
}
__decorate([
    Debounce(10)
], JEditor.prototype, "resize", null);
export { JEditor, JImage, JText, };
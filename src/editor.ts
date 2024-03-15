import util, { Point } from 'j-design-util';
import JBase from './core/baseComponent';
import JText from './components/text';
import JImage from './components/image';
import JSvg from './components/svg';
import JElement from './core/element';
import JController from './core/controller';
import JFonts from './core/fonts';
import { Debounce } from './lib/decorator';
import { IJElement, IJEditor, IJControllerComponent, IJBaseComponent, IJFonts, IElementOption, IEditorOption, ITextOption, IImageOption } from './constant/types';
import { editorDefaultCssContent } from './constant/styleMap';
import { SupportEventNames } from './core/event';


/**
 * @public
 */
export default class JEditor extends JBase implements IJEditor {

    constructor(option={} as IEditorOption) {  
        option.style = option.style||{};
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
        if(typeof option.container === 'string') option.container = document.getElementById( option.container);
        this.view = new JElement<HTMLDivElement>({
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
        if(option.container) option.container.appendChild(this.view.dom); 
        this.view.addChild(this.dom);
        
        // @ts-ignore
        this.regShape({'image': JImage, 'text': JText, 'svg': JSvg});

        this.init(option);  

        this.bindEvent(this.view.dom);
    }

    // 初始化整个编辑器
    init(option: IEditorOption) {

        if(option.style.containerBackgroundColor) this.dom.style.backgroundColor = option.style.containerBackgroundColor;

        // 生成控制器
        this.elementController = new JController({
            ...option.controllerOption,
            visible: false,
            editor: this,
        });
        
        const styleNode = document.createElement('style');
        styleNode.innerHTML = editorDefaultCssContent;
        this.dom.appendChild(styleNode);

        // 字体加载成功，同时加入到dom结构中
        this.fonts.on('load', (font) => {
            styleNode.append(font.toHtml());
        });
        
        this.on('select', (e) => {
            this.select(this);// 选中自已
        });
        this.on('mousedown', function(e: MouseEvent) {
            if(e.button === 0) {
                this.selected = true;
                this.elementController.onDragStart(e);
            }
        });

        // 刷新样式
        this.style.refresh();
        this.resize();// 触发一次大小改变

        // 属性变化
        this.data.watch([
            'width', 'height'
        ], {
            set: (item) => {
                this.sizeChange();
            }
        });
    }

    // 外层用于定位的容器
    view: JElement<HTMLDivElement>;

    // 所有支持的类型
    protected shapes = new Map<string, IJBaseComponent>();

    // 元素控帛器
    public elementController: IJControllerComponent;

    fonts: IJFonts; // 字体管理器

    // 重写子集为target
    get children() {
        return this.target.children;
    }
    // 被选中的元素
    get selectedElements(): Array<JBase> {
        const res = [];
        for(const el of this.children) {
            if(el instanceof JBase && el.selected) {
                res.push(el);
            }
        }
        return res;
    }

    // 绑定事件
    bindEvent(dom?: HTMLElement) {
        if(this.view) super.bindEvent(this.view.dom);// 编辑器事件绑到整个容器上

        // 监听子元素改变
        this.on(['elementChange'], function(e) {
            const isComponent = e.target instanceof JBase;
            // 左健选中
            if(e.type === 'mousedown' && isComponent) {
                e.target.selected = true;
                if(e.event?.button === 0) this.elementController.onDragStart(e.event);
                e.event?.stopPropagation && e.event.stopPropagation();
            }
            // 选中状态改变
            else if(e.type === 'select' && isComponent) {
                this.select(e.target);
            }
            // 如果是字体依赖，则检查字体支持情况
            else if(e.type === 'styleChange') {
                // 字体发生改变，需要做check, 并加载字体生效
                if(e.data.name === 'fontFamily' && e.data.value) {
                    this.fonts.load(e.data.value).catch((e)=>{
                        console.error(e);
                    });// 异步加载字体
                }
            }
        });
    }

    // 选中某个元素
    select(el: IJBaseComponent) {
        if(el.selected) {         
            // 选把所有已选择的取消
            this.selectedElements.map(p=> {
                if(p !== el) {
                    p.selected = false;
                    return p;
                }
            });
            if(el.editable) this.elementController.bind(el);
        }
        else this.elementController.unbind(el);
    }

    @Debounce(10)
    resize(width=this.data.width, height=this.data.height) {
        this.data.left = Math.max((util.toNumber(this.view.dom.clientWidth) - util.toNumber(width)) / 2, 0);
        this.data.top = Math.max((util.toNumber(this.view.dom.clientHeight) - util.toNumber(height)) / 2, 0);
        this.data.width = width;
        this.data.height = height; 
        this.sizeChange(width, height);
    }

    // 尺寸改变响应
    private sizeChange(width=this.data.width, height=this.data.height) {
        this.attr('data-size', `${width}*${height}`);
        this.emit('resize', {
            width,
            height
        });
    }
    
    // 添加元素到画布
    addChild(child: IJBaseComponent) {
        child.editor = this;

        return super.addChild(child);
    }

    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos: Point, dom = this.target.dom) {
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

        for(let i=this.children.length-1;i>=0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }
        this.elementController.data.visible = false;
    }

    // 缩放
    scale(x: number, y: number = x) {
        if(x < 0.1 || y < 0.1) return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }

    // 注册自定义组件
    regShape(name: string|{[key: string]: IJBaseComponent}, shape: IJBaseComponent) {
        if(typeof name === 'object') {
            for(const n in name) {
                this.regShape(n, name[n]);
            }
            return;
        }
        if(this.shapes.has(name)) throw Error(`元素类型${name}已经存在`);
        this.shapes.set(name, shape);
        return shape;
    }

    // 创建元素
    createShape(type: string | JElement, option:IElementOption|ITextOption|IImageOption={}) {
        const shape = typeof type === 'string'? this.shapes.get(type): type;
        if(!shape) {
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
        if(typeof data === 'string') data = JSON.parse(data);
        if(data.style) {
            this.style.apply(data.style);// 应用样式
        }
        this.resize(data.width || data.data.width, data.height || data.data.height);

        for(const c of data.children) {
            if(!c.type) continue;
            const item = this.createShape(c.type, c);
            this.addChild(item);
        }
    }
}

export {
    JEditor,
    JImage,
    JText,
}
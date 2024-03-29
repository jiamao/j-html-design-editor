import Base from '../core/baseComponent';
import util from 'j-design-util';
import { JSvgData } from '../constant/data';
export default class JSvg extends Base {
    constructor(option = {}) {
        super({
            ...option,
            type: option.type || 'svg',
            dataType: option.dataType || JSvgData
        });
        // 属性变化映射到style
        this.data.watch([
            'url', 'svg', 'src'
        ], {
            set: (item) => {
                if (item.name === 'url') {
                    this.load(item.value);
                }
                if (item.name === 'src') {
                    this.data.url = item.value;
                }
                else if (item.name === 'svg') {
                    this.target.dom.innerHTML = item.value;
                }
            }
        });
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'svg';
    }
    // 替换变量
    renderSvg(svg) {
        this.data.map((name, value) => {
            svg = svg.replace(new RegExp(`\\{${name}\\}`, 'g'), value);
        });
        return svg;
    }
    // 加载svg内容
    async load(url = this.data.url) {
        const svg = await util.request(url);
        this.data.svg = svg;
    }
}

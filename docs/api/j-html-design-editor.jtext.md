<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-html-design-editor](./j-html-design-editor.md) &gt; [JText](./j-html-design-editor.jtext.md)

## JText class

文本组件类 JText，继承于基础组件 Base。

**Signature:**

```typescript
export default class JText extends Base`<HTMLDivElement>` implements IJTextComponent 
```
**Extends:** [Base](./j-html-design-editor.jbasecomponent.md)<!-- -->&lt;HTMLDivElement&gt;

**Implements:** [IJTextComponent](./j-html-design-editor.ijtextcomponent.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(option)](./j-html-design-editor.jtext._constructor_.md) |  | JText组件构造函数。 |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [contenteditable](./j-html-design-editor.jtext.contenteditable.md) |  | any | 当前编辑状态 |
|  [data](./j-html-design-editor.jtext.data.md) |  | [JTextData](./j-html-design-editor.jtextdata.md) | JTextData 数据 |
|  [TextControlCache](./j-html-design-editor.jtext.textcontrolcache.md) | <code>static</code> | Map&lt;string, [JText](./j-html-design-editor.jtext.md)<!-- -->&gt; |  |
|  [typeName](./j-html-design-editor.jtext.typename.md) | <code>readonly</code> | string | 类型名称 |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [closeEdit()](./j-html-design-editor.jtext.closeedit.md) |  | 退出文本编辑状态 |
|  [dispose()](./j-html-design-editor.jtext.dispose.md) |  | 移除 JText 实例 |
|  [edit(e)](./j-html-design-editor.jtext.edit.md) |  | 进入文本编辑状态 |


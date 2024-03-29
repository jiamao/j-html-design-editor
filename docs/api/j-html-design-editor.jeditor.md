<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-html-design-editor](./j-html-design-editor.md) &gt; [JEditor](./j-html-design-editor.jeditor.md)

## JEditor class


**Signature:**

```typescript
export default class JEditor extends JBase implements IJEditor 
```
**Extends:** [JBase](./j-html-design-editor.jbasecomponent.md)

**Implements:** [IJEditor](./j-html-design-editor.ijeditor.md)

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(option)](./j-html-design-editor.jeditor._constructor_.md) |  | Constructs a new instance of the <code>JEditor</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [children](./j-html-design-editor.jeditor.children.md) | <code>readonly</code> | [IJElement](./j-html-design-editor.ijelement.md)<!-- -->&lt;HTMLElement&gt;\[\] |  |
|  [elementController](./j-html-design-editor.jeditor.elementcontroller.md) |  | [IJControllerComponent](./j-html-design-editor.ijcontrollercomponent.md) |  |
|  [fonts](./j-html-design-editor.jeditor.fonts.md) |  | [IJFonts](./j-html-design-editor.ijfonts.md) |  |
|  [selectedElements](./j-html-design-editor.jeditor.selectedelements.md) | <code>readonly</code> | Array&lt;[JBase](./j-html-design-editor.jbasecomponent.md)<!-- -->&gt; |  |
|  [shapes](./j-html-design-editor.jeditor.shapes.md) | <code>protected</code> | Map&lt;string, [IJBaseComponent](./j-html-design-editor.ijbasecomponent.md)<!-- -->&lt;HTMLElement&gt;&gt; |  |
|  [view](./j-html-design-editor.jeditor.view.md) |  | [JElement](./j-html-design-editor.jelement.md)<!-- -->&lt;HTMLDivElement&gt; |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [addChild(child)](./j-html-design-editor.jeditor.addchild.md) |  |  |
|  [bindElementEvent(el)](./j-html-design-editor.jeditor.bindelementevent.md) |  |  |
|  [bindEvent(dom)](./j-html-design-editor.jeditor.bindevent.md) |  |  |
|  [clear()](./j-html-design-editor.jeditor.clear.md) |  |  |
|  [createShape(type, option)](./j-html-design-editor.jeditor.createshape.md) |  |  |
|  [fromJSON(data)](./j-html-design-editor.jeditor.fromjson.md) |  |  |
|  [getChild(id)](./j-html-design-editor.jeditor.getchild.md) |  |  |
|  [init(option)](./j-html-design-editor.jeditor.init.md) |  |  |
|  [regShape(name, shape)](./j-html-design-editor.jeditor.regshape.md) |  |  |
|  [removeChild(el)](./j-html-design-editor.jeditor.removechild.md) |  |  |
|  [resize(width, height)](./j-html-design-editor.jeditor.resize.md) |  |  |
|  [scale(x, y)](./j-html-design-editor.jeditor.scale.md) |  |  |
|  [select(el)](./j-html-design-editor.jeditor.select.md) |  |  |
|  [toEditorPosition(pos, dom)](./j-html-design-editor.jeditor.toeditorposition.md) |  |  |


<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-html-design-editor](./j-html-design-editor.md) &gt; [JEvent](./j-html-design-editor.jevent.md)

## JEvent class


**Signature:**

```typescript
export default class JEvent 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(target)](./j-html-design-editor.jevent._constructor_.md) |  | Constructs a new instance of the <code>JEvent</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [target](./j-html-design-editor.jevent.target.md) |  | HTMLElement |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [dispose()](./j-html-design-editor.jevent.dispose.md) |  |  |
|  [init(handler, target)](./j-html-design-editor.jevent.init.md) |  | 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。 |
|  [normalizeEventNames(name)](./j-html-design-editor.jevent.normalizeeventnames.md) |  |  |
|  [off(name, fun, opt)](./j-html-design-editor.jevent.off.md) |  | 从对象中移除事件 不传 的时候删除所有事件 |
|  [on(name, fun, opt)](./j-html-design-editor.jevent.on.md) |  | 绑定事件到html对象 |

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [j-html-design-editor](./j-html-design-editor.md) &gt; [JText](./j-html-design-editor.jtext.md) &gt; [(constructor)](./j-html-design-editor.jtext._constructor_.md)

## JText.(constructor)

JText组件构造函数。

**Signature:**

```typescript
constructor(option?: ITextOption);
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  option | [ITextOption](./j-html-design-editor.itextoption.md) | _(Optional)_ 文本组件选项，包括 text, style 等。 |

## Example


```
const textInstance = new JText({
  text: 'Hello World',
  style: {
    color: 'red',
    fontSize: '18px'
  }
});
```


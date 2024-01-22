
const fs = require('fs');
const request = require('request');
const util = require('./util.js');

const otherTmpl = {
	"version": "5.3.0",
	"objects": [
		{
			"type": "rect",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 0,
			"top": 0,
			"width": 1242,
			"height": 1660,
			"fill": "rgba(231,227,215,1)",
			"stroke": null,
			"strokeWidth": 1,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"rx": 0,
			"ry": 0,
			"id": "workspace",
			"selectable": false,
			"hasControls": false
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 0,
			"top": 0,
			"width": 1242,
			"height": 1660,
			"fill": "#e7e3d7ff",
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 58,
			"top": 54,
			"width": 1127,
			"height": 1553,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/d426a15b-96d5-47a6-a96a-3b863cba83e330675641.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 21,
			"top": 0,
			"width": 129,
			"height": 159,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/8a79e49e-5dc5-4182-a9f7-7d936899f94030675619.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 1000,
			"top": 14,
			"width": 197,
			"height": 221,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/7ffde01d-c350-4300-bfa7-797c6ddc053c30688551.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 909,
			"top": 998,
			"width": 320,
			"height": 662,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/1631e642-397c-4758-8866-49afaf6c00cc30675621.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 0,
			"top": 982,
			"width": 301,
			"height": 678,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/cfc87b71-8484-4be3-b405-1b44ddddf91a30675658.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 360,
			"top": 780,
			"width": 522,
			"height": 149,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/ae55142f-a189-4543-8732-3c3488e1b4b530688573.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 360,
			"top": 960,
			"width": 522,
			"height": 149,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/b0858e68-bd9a-4617-8569-862ec13ed5fc30675646.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 360,
			"top": 1140,
			"width": 522,
			"height": 149,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/3702e5ab-4ff2-485f-9283-31a47b2c483430675645.png",
			"crossOrigin": "anonymous",
			"filters": []
		},
		{
			"type": "i-text",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 426.1701,
			"top": 799.1417,
			"width": 332.318,
			"height": 102.378,
			"fill": "#2c2a2cff",
			"stroke": null,
			"strokeWidth": 1,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": "",
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"fontFamily": "arial",
			"fontWeight": 400,
			"fontSize": 90.6,
			"text": "# 实习 #",
			"underline": false,
			"overline": false,
			"linethrough": false,
			"textAlign": "center",
			"fontStyle": "normal",
			"lineHeight": 1.2,
			"textBackgroundColor": "",
			"charSpacing": 0,
			"styles": [],
			"direction": "ltr",
			"path": null,
			"pathStartOffset": 0,
			"pathSide": "left",
			"pathAlign": "baseline",
			"id": "307c376b-219b-4155-a0dd-946cb744a302",
			"selectable": true,
			"hasControls": true
		},
		{
			"type": "i-text",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 426.1701,
			"top": 979.8722,
			"width": 332.318,
			"height": 102.378,
			"fill": "#2c2a2cff",
			"stroke": null,
			"strokeWidth": 1,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": "",
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"fontFamily": "arial",
			"fontWeight": 400,
			"fontSize": 90.6,
			"text": "# 社招 #",
			"underline": false,
			"overline": false,
			"linethrough": false,
			"textAlign": "center",
			"fontStyle": "normal",
			"lineHeight": 1.2,
			"textBackgroundColor": "",
			"charSpacing": 0,
			"styles": [],
			"direction": "ltr",
			"path": null,
			"pathStartOffset": 0,
			"pathSide": "left",
			"pathAlign": "baseline",
			"id": "20f5c367-a224-4439-8594-dc45c25e05c7",
			"selectable": true,
			"hasControls": true
		},
		{
			"type": "i-text",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 426.1701,
			"top": 1161.3438,
			"width": 332.318,
			"height": 102.378,
			"fill": "#2c2a2cff",
			"stroke": null,
			"strokeWidth": 1,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": "",
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"fontFamily": "arial",
			"fontWeight": 400,
			"fontSize": 90.6,
			"text": "# 校招 #",
			"underline": false,
			"overline": false,
			"linethrough": false,
			"textAlign": "center",
			"fontStyle": "normal",
			"lineHeight": 1.2,
			"textBackgroundColor": "",
			"charSpacing": 0,
			"styles": [],
			"direction": "ltr",
			"path": null,
			"pathStartOffset": 0,
			"pathSide": "left",
			"pathAlign": "baseline",
			"id": "0c62d69f-00c7-4e4b-b32a-cfc13bee4253",
			"selectable": true,
			"hasControls": true
		},
		{
			"type": "i-text",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 100.0289,
			"top": 203.2163,
			"width": 1200.6,
			"height": 226.113,
			"fill": "#ffc921ff",
			"stroke": null,
			"strokeWidth": 1,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": "",
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"fontFamily": "arial",
			"fontWeight": 400,
			"fontSize": 200.1,
			"text": "招的就是你！",
			"underline": false,
			"overline": false,
			"linethrough": false,
			"textAlign": "left",
			"fontStyle": "normal",
			"lineHeight": 1.2,
			"textBackgroundColor": "",
			"charSpacing": 0,
			"styles": [],
			"direction": "ltr",
			"path": null,
			"pathStartOffset": 0,
			"pathSide": "left",
			"pathAlign": "baseline",
			"id": "046ee586-23c4-4777-b909-f5a5ece91e8e",
			"selectable": true,
			"hasControls": true
		},
		{
			"type": "i-text",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 239.6912,
			"top": 513.6145,
			"width": 733.0055,
			"height": 92.208,
			"fill": "#ede9cbff",
			"stroke": null,
			"strokeWidth": 1,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": "",
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"fontFamily": "arial",
			"fontWeight": 400,
			"fontSize": 81.6,
			"text": "靠谱春招offer等你拿",
			"underline": false,
			"overline": false,
			"linethrough": false,
			"textAlign": "left",
			"fontStyle": "normal",
			"lineHeight": 1.06,
			"textBackgroundColor": "",
			"charSpacing": 0,
			"styles": [],
			"direction": "ltr",
			"path": null,
			"pathStartOffset": 0,
			"pathSide": "left",
			"pathAlign": "baseline",
			"id": "27ccf9c2-5cc5-4b00-b44d-b2104f980d2d",
			"selectable": true,
			"hasControls": true
		},
		{
			"type": "image",
			"version": "5.3.0",
			"originX": "left",
			"originY": "top",
			"left": 163,
			"top": 144,
			"width": 154,
			"height": 15,
			"fill": null,
			"stroke": null,
			"strokeWidth": 0,
			"strokeDashArray": null,
			"strokeLineCap": "butt",
			"strokeDashOffset": 0,
			"strokeLineJoin": "miter",
			"strokeUniform": false,
			"strokeMiterLimit": 4,
			"scaleX": 1,
			"scaleY": 1,
			"angle": 0,
			"flipX": false,
			"flipY": false,
			"opacity": 1,
			"shadow": null,
			"visible": true,
			"backgroundColor": "",
			"fillRule": "nonzero",
			"paintFirst": "fill",
			"globalCompositeOperation": "source-over",
			"skewX": 0,
			"skewY": 0,
			"cropX": 0,
			"cropY": 0,
			"id": "a6c61be0-8953-4836-990a-4805e70462d3",
			"selectable": true,
			"hasControls": true,
			"src": "https://gd-filems.dancf.com/gaoding/cms/mcm79j/mcm79j/91878/20661e37-06a5-461f-a5d3-3006d447b47a30675642.png",
			"crossOrigin": "anonymous",
			"filters": []
		}
	],
	"clipPath": {
		"type": "rect",
		"version": "5.3.0",
		"originX": "left",
		"originY": "top",
		"left": 0,
		"top": 0,
		"width": 1242,
		"height": 1660,
		"fill": "rgba(231,227,215,1)",
		"stroke": null,
		"strokeWidth": 1,
		"strokeDashArray": null,
		"strokeLineCap": "butt",
		"strokeDashOffset": 0,
		"strokeLineJoin": "miter",
		"strokeUniform": false,
		"strokeMiterLimit": 4,
		"scaleX": 1,
		"scaleY": 1,
		"angle": 0,
		"flipX": false,
		"flipY": false,
		"opacity": 1,
		"shadow": null,
		"visible": true,
		"backgroundColor": "",
		"fillRule": "nonzero",
		"paintFirst": "fill",
		"globalCompositeOperation": "source-over",
		"skewX": 0,
		"skewY": 0,
		"rx": 0,
		"ry": 0,
		"selectable": true,
		"hasControls": true
	}
};

const id = util.getTemplateId();
const wscale = 976 / otherTmpl.clipPath.width;
const hscale = 1260 / otherTmpl.clipPath.height;
const tmpl = {
    "id": id,
    data: {
        backgroundUrl: otherTmpl.clipPath.backgroundImage || '',
        backgroundColor: util.hexToRGBA(otherTmpl.clipPath.backgroundColor || otherTmpl.clipPath.fill || '') || 'transparent',
        name: otherTmpl.name,
        width: otherTmpl.clipPath.width * wscale,
        height: otherTmpl.clipPath.height * hscale,
        children: []
    }
};

if(otherTmpl.objects) {
    for(const w of otherTmpl.objects) {
        if(w.type === 'rect') {
            continue;
        }
        const obj = {
            width: w.width * wscale,
            height: w.height * hscale,
            x: w.left * wscale,
            y: w.top * hscale,
            rotation: w.angle || 0,
            name: w.name,
            style: {
                backgroundColor: util.hexToRGBA(w.backgroundColor || '') || 'transparent',
                stroke: util.hexToRGBA(w.stroke || '') || 'transparent',
                fill: util.hexToRGBA(w.fill || '') || 'transparent',
                fontFamily: w.fontFamily||'',
                fontSize: w.fontSize * wscale,
                fontStyle: w.fontStyle,
                align: w.textAlign,
                strokeThickness: w.strokeWidth || 1,
                lineJoin: w.strokeLineJoin||'',
                lineCap: w.strokeLineCap||'',
                lineHeight: w.lineHeight,
                miterLimit: w.strokeMiterLimit,
                fontWeight: w.fontWeight,
                dropShadowAlpha: 0,
                dropShadowAngle: 0,
                dropShadowBlur: 0,
                dropShadowColor: 'transparent',
                dropShadowDistance: 0,
            }
        }
		obj.x += obj.width/2;
		obj.y += obj.height/2;
        if(w.type === 'image' && w.src) {
            obj.type = 'image';
            obj.url = w.src || '';
        }
        else if(w.type === 'i-text') {
            obj.type = 'text';
            obj.text = w.text || '';
        }
        if(obj.type) tmpl.data.children.push(obj);
    }
}






util.saveToTemplate(tmpl);




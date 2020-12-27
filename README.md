# Translatable-PDF-Viewer

<https://zhaouv.github.io/Translatable-PDF-Viewer/>

<!-- [English](#Instruction) | [中文](#说明) -->

## Instruction

PDF viewer capable of translating content through Chrome Translator.

> Essentially just [mozilla/pdf.js](https://github.com/mozilla/pdf.js) showing its hidden text layer

Load local PDF by dragging and dropping or "Open File" icon. (PDF will not be uploaded)

By adding `?open=url` to the address bar to open the network PDF.

After loading the file, click the translate icon in Chrome or translate in the right-click menu.

Two icons have been added to the sidebar for ease of use, the functions are 'Adjust opacity' and 'Toggle original text'.

## 说明

能够通过 Chrome Translator 来翻译内容的PDF查看器.

> 本质上只是 [mozilla/pdf.js](https://github.com/mozilla/pdf.js) 显示了其隐藏的文本层

通过拖拽或"打开文件"图标来加载本地PDF. (PDF不会被上传)

通过在地址栏加`?open=url`来打开网络PDF.

加载文件之后点击Chrome的翻译图标或者右键菜单中的翻译.

在侧边栏增加了两个图标方便使用, 功能分别是'调整透明度'和'切换原文'.

## License

[Apache-2](./LICENSE)

`lib/*` copyed from [vscode-pdfviewer](https://github.com/tomoki1207/vscode-pdfviewer)

and

`    <script src="../../addition.js"></script>` is inserted into this file 
[viewer.html](lib/web/viewer.html#L41)
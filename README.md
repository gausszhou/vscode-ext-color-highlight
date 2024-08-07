# [vscode-ext-color-highlight](https://github.com/naumovs/vscode-ext-color-highlight)

This extension styles css/web colors found in your document.

## Install

In VSC press Ctrl+Shift+P (Cmd+Shift+P on Mac) then type ">ext install", hit enter, search "Color Highlight".

Still confused? Click "Get Started" above.

## Questionnaire

Please answer the questions in this questionnaire. Your feedback is very valuable and will help me improve this extension.
[https://goo.gl/forms/5emac4WyQv7CWZOK2](https://goo.gl/forms/5emac4WyQv7CWZOK2)

## Contributors

- [chadgauth](https://github.com/chadgauth) - Support for LCH color format
- [LucasMatuszewski](https://github.com/LucasMatuszewski) - Support for floating-point numbers in hsl and rgb
- [lochstar](https://github.com/lochstar) - Styling modes for the marker

Feel free to contribute!

## Features

- suport global variables file for css
- suport global variables file for sass/scss

```json
{    
    "color-highlight.enable": true,
    "color-highlight.css.globalPaths": ["./variables.css"],
    "color-highlight.sass.globalPaths": ["./variables.scss"],
}
```

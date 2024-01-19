import { IThemeContextProps } from "@/types/theme";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<IThemeContextProps>`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: ${({theme}) => theme.color.font[60]}
    }

    body {
        background-color: ${({theme}) => theme.color.background[60]};
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }

    *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

a, button {
    cursor: revert;
}

ol, ul, menu {
    list-style: none;
}

img {
    max-inline-size: 100%;
    max-block-size: 100%;
}

table {
    border-collapse: collapse;
}

input, textarea {
    user-select: auto;
}

textarea {
    white-space: revert;
}

meter {
    -webkit-appearance: revert;
    appearance: revert;
}

:where(pre) {
    all: revert;
}

::placeholder {
    color: unset;
}

::marker {
    content: initial;
}

:where([hidden]) {
    display: none;
}

:where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
}

:where([draggable="true"]) {
    -webkit-user-drag: element;
}


:where(dialog:modal) {
    all: revert;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

input, button, textarea, select {
  font: inherit;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

`;

export default GlobalStyle;
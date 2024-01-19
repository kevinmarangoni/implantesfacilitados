import { DefaultTheme } from "styled-components"

export interface IThemeContextProps extends DefaultTheme {
    theme: ITheme
}

export interface ITheme {
    color: IThemeColor
    sizes: IThemeSizes
}

export interface IThemeColor {
    background: {
        60: "#F0F0F0" | "#1a1a1a",
        30: "#FAFAFA" | "#262626",
        20: "#f5dbbb" | "#333333",
        10: "#CEC1AD" | "#404040",
    },
    font: {
        60: "#472f20" | "#ffffff",
        30: "#FAFAFA" | "#cccccc",
        10: "#BC8F4F" | "#999999",
    }
}


export interface IThemeSizes {
    font: {
        paragraph: {
            sm: "12px",
            md: "16px",
            lg: "20px",
            xl: "24px"
        },
        title: {
            sm: "28px",
            md: "32px",
            xl: "40px"
        },
        caption: {
            sm: "4px",
            md: "6px",
            xl: "8px"
        },
    },
    weights: {
        light: 300,
        normal: 400,
        regular: 500,
        bold: 600,
        bolder: 700,
    },
    breakpoints: {
        smartphone: "max-width: 900px",
        tablet: "min-width: 768px; max-width: 1023px",
    }
}
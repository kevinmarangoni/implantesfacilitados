import { ITheme, IThemeSizes } from "@/types/theme"

const sizes: IThemeSizes = {
    font:{
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

export const light: ITheme = {
    color: {
        background: {
            60: "#F0F0F0",
            50: "#DAD4E5",
            30: "#fff",
            20: "#C9B8E3",
            10: "#A48FB3",
        },
        font: {
            30: "#fff",
            60: "#736E9D",
            10: "#A89CBF",
        }  
    },
    sizes: sizes
}

export const dark: ITheme = {
    color: {
        background: {
            60: "#1a1a1a",
            50: "#333333",
            30: "#262626",
            20: "#3C3A55",
            10: "#56537E",
        },
        font: {
            60: "#ffffff",
            30: "#cccccc",
            10: "#999999",
        }  
    },
    sizes: sizes
}
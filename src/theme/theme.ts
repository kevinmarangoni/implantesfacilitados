import { ITheme, IThemeSizes } from "@/types/theme"

const sizes: IThemeSizes = {
    font:{
        paragraph: {
            sm: "12px",
            md: "16px",
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
    breakpoints: {
        smartphone: "max-width: 767px",
        tablet: "min-width: 768px; max-width: 1023px",
    }
}

export const light: ITheme = {
    color: {
        background: {
            60: "#F0F0F0",
            30: "#FAFAFA",
            20: "#f5dbbb",
            10: "#CEC1AD",
        },
        font: {
            60: "#472f20",
            30: "#FAFAFA",
            10: "#BC8F4F",
        }  
    },
    sizes:sizes
}

export const dark: ITheme = {
    color: {
        background: {
            60: "#1a1a1a",
            30: "#262626",
            20: "#333333",
            10: "#404040",
        },
        font: {
            60: "#ffffff",
            30: "#cccccc",
            10: "#999999",
        }  
    },
    sizes:sizes
}
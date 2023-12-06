/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const catppuccin = require("./colors");

export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        "--tw-prose-body": catppuccin.mocha.text.hex, // text
                        "--tw-prose-bold": catppuccin.mocha.text.hex, // text
                        "--tw-prose-headings": catppuccin.mocha.rosewater.hex, // rosewater
                        // "--tw-prose-quotes": catppuccin.mocha.subtext0.hex, //subtext0,
                        "--tw-prose-code": catppuccin.mocha.subtext1.hex,
                        a: {
                            color: catppuccin.mocha.sapphire.hex,
                            "font-weight": 600,
                            "text-decoration-line": "underline",
                            "text-decoration-style": "dashed",
                            "text-underline-offset": "5px",
                            "background-position": "left bottom",
                            "background-image":
                                "linear-gradient(to right, rgb(116, 199, 236), rgb(30, 159, 217) 100%)",
                            "background-repeat": "no-repeat",
                            "background-size": "0% 3px",
                            "&:hover": {
                                color: "rgb(30, 159, 217)",
                                "text-decoration-line": "none",
                                backgroundSize: "100% 2px",
                            },
                            transitionProperty: "all",
                            "transition-timing-function":
                                "cubic-bezier(0, 0, 0.2, 1)",
                            transitionDuration: "75ms",
                        },
                        h1: {
                            fontSize: "36px",
                        },
                        h2: {
                            fontSize: "30px",
                            "padding-top": "58px",
                            "padding-bottom": "4px",
                        },
                        h3: {
                            fontSize: "24px",
                        },
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
                        },
                    },
                },
            }),
            colors: {
                "dark-rosewater": "#e4ada2",
                "light-rosewater": "#FAF0EE",
                "medium-rosewater": "#e0a094",
                "dark-sapphire": "#1e9fd9",
                "darker-rosewater": "#A6A3B1",
            },
        },
        listStyleType: {
            none: "none",
            disc: "disc",
            decimal: "decimal",
            square: "square",
            roman: "upper-roman",
        },
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
            mywidth: "1023px",
        },
        fontSize: {
            xs: "12px",
            sm: "16px",
            base: "20px",
            lg: "24px",
            xl: "30px",
            "2xl": "36px",
            "3xl": "48px",
            "4xl": "60px",
            "5xl": "72px",
            "6xl": "84px",
            "7xl": "96px",
            "8xl": "108px",
            "9xl": "128px",
        },
        fontFamily: {
            sans: ["LatinModernSans", ...defaultTheme.fontFamily.sans],
            serif: ["LatinModern", ...defaultTheme.fontFamily.serif],
            mono: ["VictorMonoNerdFont", ...defaultTheme.fontFamily.mono],
        },
    },
    plugins: [
        require("@catppuccin/tailwindcss")({
            prefix: "ctp",
            defaultFlavour: "mocha",
        }),
        require("@tailwindcss/typography"),
    ],
};

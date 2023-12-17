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
                        "--tw-prose-code": catppuccin.mocha.lavender.hex,
                        a: {
                            color: catppuccin.mocha.sapphire.hex,
                            "font-style": "italic",
                            "font-size": "17px", // same as mono
                            "font-weight": 600,
                            "text-decoration-line": "none",
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
                            "margin-top": "32px",
                            fontSize: "30px",
                        },
                        h3: {
                            fontSize: "24px",
                        },
                        p: {
                            "line-height": "1.5",
                        },
                        "code::before": {
                            content: "",
                        },
                        "code::after": {
                            content: "",
                        },
                        pre: {
                            "border-width": "2px",
                            "border-color": catppuccin.mocha.surface0.hex,
                            "border-radius": "1rem",
                            "margin-top": "0",
                            // "border-top-left-radius": "0",
                        },
                        "pre::-webkit-scrollbar": {
                            width: "0",
                        },
                        table: {
                            margin: "auto",
                            "border-collapse": "collapse",
                            width: "auto",
                        },
                        "th, td": {
                            padding: "8px 12px",
                            "text-align": "center",
                            "border-right-width": "1px",
                            "border-right-color": catppuccin.mocha.surface0.hex,
                            "border-bottom-width": "1px",
                            "border-bottom-color":
                                catppuccin.mocha.surface0.hex,
                        },
                        "th:last-child, td:last-child": {
                            "border-right": "none",
                        },
                        "tr:last-child th, tr:last-child td": {
                            "border-bottom": "none",
                        },
                        li: {
                            "margin-bottom": "0",
                            "margin-top": "8px",
                            "word-wrap": "break-word",
                            "line-height": "1.5",
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
                "light-base": "#404063",
                // shades of mocha-sapphire
                "info-titletext": "#0d455d",
                "info-bg": catppuccin.mocha.sapphire.hex,
                "info-accent": catppuccin.latte.sapphire.hex,
                // "info-accent": "#92dfed",
                // shades of mocha-red
                "alert-titletext": "#600a22",
                "alert-bg": catppuccin.mocha.red.hex,
                "alert-accent": catppuccin.latte.red.hex,
                // "alert-accent": "#f59fb7",
                // shades of latte-pink
                "tip-titletext": "#5c0e47",
                "tip-bg": catppuccin.latte.pink.hex,
                "tip-accent": "#991776",
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
            mono: "17px",
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
            sans: ["ComputerModernSans", ...defaultTheme.fontFamily.sans],
            serif: ["ComputerModernRoman", ...defaultTheme.fontFamily.serif],
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

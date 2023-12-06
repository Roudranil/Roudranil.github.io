// .prettierrc.mjs

/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
    tabWidth: 4,
    useTabs: false,
    semi: true,

    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};

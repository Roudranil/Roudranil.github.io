import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkCodeTitles from "remark-code-titles";

import tailwind from "@astrojs/tailwind";
import catppuccinMocha from "./catppuccin-mocha.json";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    markdown: {
        remarkPlugins: [remarkMath, remarkCodeTitles],
        rehypePlugins: [rehypeKatex],
        shikiConfig: {
            theme: catppuccinMocha,
        },
    },
    integrations: [tailwind(), mdx()],
});

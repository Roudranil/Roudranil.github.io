import type { Site, MenuItem, SocialObjects } from "types";

export const SITE: Site = {
    website: "",
    author: "Roudranil Das",
    desc: "My portfolio",
    title: "rudy",
    lightAndDarkMode: false,
    postPerPage: 5,
};

export const MENU: MenuItem[] = [
    {
        title: "~/about",
        path: "/about",
    },
    {
        title: "~/stuff",
        path: "/stuff",
    },
    {
        title: "~/projects",
        path: "/projects",
    },
    {
        title: "~/posts",
        path: "/posts",
    },
    {
        title: "~/contact",
        path: "/contact",
    },
];

export const SOCIALS: SocialObjects = [
    {
        name: "Mail",
        href: "mailto:roudranil@cmi.ac.in",
        linkTitle: `Send me a mail!`,
        active: true,
    },
    {
        name: "Github",
        href: "https://github.com/Roudranil",
        linkTitle: `Me on Github`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/roudranil-das/",
        linkTitle: `Connect on LinkedIn?`,
        active: true,
    },
    {
        name: "Kaggle",
        href: "https://www.kaggle.com/roudranildas",
        linkTitle: `Me on Kaggle`,
        active: true,
    },
];

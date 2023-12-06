export type Site = {
    website: string;
    author: string;
    desc: string;
    title: string;
    lightAndDarkMode: boolean;
    postPerPage: number;
};

export type MenuItem = {
    title: string;
    path: string;
};

export type SocialIcons = {
    [social in SocialMedia]: string;
};

export type SocialMedia = "Mail" | "Github" | "LinkedIn" | "Kaggle";

export type SocialObjects = {
    name: SocialMedia;
    href: string;
    active: boolean;
    linkTitle: string;
}[];

import { createRequire } from "module";
import { defineConfig, type DefaultTheme } from "vitepress";

const require = createRequire(import.meta.url);
const pkg = require("../../package.json");

export const zh = defineConfig({
    lang: "zh-Hans",
    description: "由 Vite 和 Vue 驱动的静态站点生成器",

    themeConfig: {
        nav: nav(),

        sidebar: {
            "/zh/guide/": { base: "/zh/guide", items: sidebarGuide() },
        },

        editLink: {
            pattern: "https://github.com/1739616529/code.pianist/edit/main/:path",
            text: "在 GitHub 上编辑此页面",
        },

        footer: {
            message: "基于 MIT 许可发布",
            copyright: `版权所有 © 2019-${new Date().getFullYear()} jshub.top`,
        },

        docFooter: {
            prev: "上一页",
            next: "下一页",
        },

        outline: {
            label: "页面导航",
        },

        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "medium",
            },
        },

        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
    },
});

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "指南",
            link: "/zh/guide/what-is-vitepress",
            activeMatch: "/zh/guide/",
        },
        {
            text: "参考",
            link: "/zh/reference/site-config",
            activeMatch: "/zh/reference/",
        },
        {
            text: pkg.version,
            items: [
                {
                    text: "更新日志",
                    link: "https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md",
                },
                {
                    text: "参与贡献",
                    link: "https://github.com/vuejs/vitepress/blob/main/.github/contributing.md",
                },
            ],
        },
    ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: "简介",
            collapsed: false,
            base: "/zh/guide/getting-started",
            items: [
                { text: "快速开始", link: "/" },
                { text: "关于", link: "/about" },
            ],
        },
        {
            text: "tailwindcss",
            collapsed: false,
            base: "/zh/guide/tailwindcss",
            items: [
                { text: "安装", link: "/install" },
                { text: "类名", link: "/class" },
            ],
        },
        {
            text: "Git",
            collapsed: false,
            base: "/zh/guide/git",
            items: [
                { text: "commit", link: "/commit" },
            ],
        },

    ];
}

export const search: DefaultTheme.AlgoliaSearchOptions["locales"] = {
    zh: {
        placeholder: "搜索文档",
        translations: {
            button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
            },
            modal: {
                searchBox: {
                    resetButtonTitle: "清除查询条件",
                    resetButtonAriaLabel: "清除查询条件",
                    cancelButtonText: "取消",
                    cancelButtonAriaLabel: "取消",
                },
                startScreen: {
                    recentSearchesTitle: "搜索历史",
                    noRecentSearchesText: "没有搜索历史",
                    saveRecentSearchButtonTitle: "保存至搜索历史",
                    removeRecentSearchButtonTitle: "从搜索历史中移除",
                    favoriteSearchesTitle: "收藏",
                    removeFavoriteSearchButtonTitle: "从收藏中移除",
                },
                errorScreen: {
                    titleText: "无法获取结果",
                    helpText: "你可能需要检查你的网络连接",
                },
                footer: {
                    selectText: "选择",
                    navigateText: "切换",
                    closeText: "关闭",
                    searchByText: "搜索提供者",
                },
                noResultsScreen: {
                    noResultsText: "无法找到相关结果",
                    suggestedQueryText: "你可以尝试查询",
                    reportMissingResultsText: "你认为该查询应该有结果？",
                    reportMissingResultsLinkText: "点击反馈",
                },
            },
        },
    },
};

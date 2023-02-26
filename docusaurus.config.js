// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "OPADES docs",
    tagline: "Documentación de sistemas y procesos de OPADES.",
    url: "https://jurumi.opades.org.py",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "Opades", // Usually your GitHub org/user name.
    projectName: "opades-docs", // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "es",
        locales: ["es", "en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/tonyjara/opades-docs/blob/master",
                    routeBasePath: "/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: "Opades Docs",
                logo: {
                    alt: "My Site Logo",
                    src: "img/opades-logo.png",
                },
                items: [
                    {
                        type: "doc",
                        docId: "/category/tutoriales-jurumi",
                        position: "left",
                        label: "Tutoriales",
                    },
                    {
                        type: "doc",
                        docId: "/category/conceptos-jurumi",
                        position: "left",
                        label: "Conceptos",
                    },
                    {
                        type: "doc",
                        docId: "/category/página-web",
                        position: "left",
                        label: "Web",
                    },

                    {
                        href: "https://github.com/tonyjara/opades-docs",
                        label: "GitHub",
                        position: "right",
                    },
                ],
            },
            footer: {
                style: "dark",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Tutorial",
                                to: "/category/tutoriales-jurumi",
                            },
                            {
                                label: "Conceptos",
                                to: "/category/conceptos-jurumi",
                            },
                        ],
                    },

                    {
                        title: "More",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/tonyjara/opades-sys",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Nyto, Inc. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
        }),
};

module.exports = config;

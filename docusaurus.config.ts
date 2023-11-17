import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Brave Ads',
  tagline: '',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: 'https://help.ads.brave.com',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'brave', // Usually your GitHub org/user name.
  projectName: 'brave-ads-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Brave Ads',
      logo: {
        alt: 'Brave Logo',
        src: 'img/brave128.png',
      },
      items: [
        {to: 'https://brave.com/download', label: 'Download', position: 'left'},
        {to: 'https://twitter.com/brave', label: 'Twitter', position: 'left'},
        {to: 'https://github.com/brave/brave-browser', label: 'Github', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documentation',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/brave',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/brave',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/brave/brave-browser',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brave Software, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

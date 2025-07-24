import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const angoliaAppId = process.env.REACT_APP_DOC_SEARCH_APP_ID;

const angoliaConfig = angoliaAppId
  ? {
      algolia: {
        appId: process.env.REACT_APP_DOC_SEARCH_APP_ID,
        // Public API key: it is safe to commit it
        apiKey: "9d6bcc3afa8daed9395db8c441bc04a1",
        indexName: process.env.REACT_APP_DOC_SEARCH_INDEX_NAME,
        // Ensures that search results are relevant to the current language and version
        contextualSearch: true,
        searchParameters: {
          analytics: false,
          clickAnalytics: false,
        },
      },
    }
  : undefined;

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
    locales: ['en', 'es', 'pt'],
  },
  
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        'http-equiv': 'Content-Security-Policy',
        content: `default-src 'none'; img-src 'self' data:; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; base-uri 'none'; form-action 'none'; object-src 'none'; media-src 'none'; frame-src  https://*.ads.s.brave.io; connect-src https://*.algolia.net https://*.algolianet.com https://*.algolia.io;`,
      },
    }
  ],

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
  
  staticDirectories: ["static"],

  // HTTPS Configuration for local development
  customFields: {
    // This will be used by the development server
    https: {
      enabled: true,
      // You can specify custom certificate paths if needed
      // cert: './certs/cert.pem',
      // key: './certs/key.pem',
    },
  },

  themeConfig: {
    navbar: {
      title: 'Brave Ads',
      logo: {
        alt: 'Brave Logo',
        src: 'img/brave128.png',
      },
      items: [
        { href: 'https://ads.brave.com/register', label: 'Sign up', position: 'left'},
        { href: 'https://brave.com/brave-ads', label: 'About', position: 'left'},
        { href: 'https://brave.com/brave-ads/audience', label: 'Audience', position: 'left'},
        { type: 'localeDropdown', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Try Brave',
          items: [
            {
              label: 'Browser',
              href: 'https://brave.com/download',
            },
            {
              label: 'Search',
              href: 'https://search.brave.com',
            },
          ],
        },
        {
          title: 'Follow Brave',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/brave',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/brave-software',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Case studies',
              href: 'https://brave.com/brave-ads/casestudies',
            },
            {
              label: 'Learn',
              href: 'https://brave.com/brave-ads/learn',
            },
            {
              label: 'Terms of service',
              href: 'https://basicattentiontoken.org/advertiser-terms-of-service/',
            },
            {
              label: 'Privacy policy',
              href: 'https://brave.com/privacy/advertiser/',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Brave Software, Inc.`,
    },
    ...angoliaConfig,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

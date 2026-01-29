// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://goodwitchlalya.github.io',
    base: '/Lalyan-Documentation',

    redirects: {
        '/': '/Lalyan-Documentation/en/',
    },

    integrations: [
       starlight({
          title: 'Lalyan Documentation',
          defaultLocale: 'en',
          locales: {
              en: { label: 'English', lang: 'en' },
              it: { label: 'Italiano', lang: 'it' },
          },
          social: [
             {
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/goodwitchlalya'
             }
          ],
          sidebar: [
             {
                 label: 'Docs',
                 translations: { it: 'Docs'},
                 items: [
                    { label: 'Mods Index', translations: { it: 'Indice Mods'}, slug: 'mods' },
                    { label: 'Lalyan Cosmetic Core', translations: { it: 'Lalyan Cosmetic Core'}, slug: 'mod/lalyan-cosmetic-core' },
                 ],
             },
             {

                 label: 'Legal Notes',
                 translations: { it: 'Note Legali'},
                 items: [
                    { label: 'License (AGPLv3)', translations: { it: 'Licenza (AGPLv3)'}, slug: 'license' },
                 ],
             }
          ],
       }),
    ],
});
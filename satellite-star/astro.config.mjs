// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://goodwitchlalya.github.io',
    base: '/Lalyan-Documentation',
    integrations: [
       starlight({
          title: 'Lalyan Documentation',
          // Modificato qui: ora è una lista [] invece di un oggetto {}
          social: [
             {
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/goodwitchlalya'
             }
          ],
          sidebar: [
             {
                label: 'Legal Notes',
                items: [
                   { label: 'License (AGPLv3)', slug: 'license' },
                ],
             },
          ],
       }),
    ],
});
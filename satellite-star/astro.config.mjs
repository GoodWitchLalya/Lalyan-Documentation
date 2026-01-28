// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    site: 'https://goodwitchlalya.github.io',
    base: '/Lalyan-Cosmetic-Core-Site',
    integrations: [
       starlight({
          title: 'LCC Documentation',
          // Modificato qui: ora è una lista [] invece di un oggetto {}
          social: [
             {
                icon: 'github',
                label: 'GitHub',
                href: 'https://github.com/goodwitchlalya/Lalyan-Cosmetic-Core-Site'
             }
          ],
          sidebar: [
             {
                label: 'Inizia da qui',
                items: [
                   { label: 'Introduzione', slug: 'index' },
                   { label: 'Installazione', slug: 'guides/installazione' },
                ],
             },
             {
                label: 'Dettagli Tecnici',
                autogenerate: { directory: 'reference' },
             },
             {
                label: 'Note Legali',
                items: [
                   { label: 'Licenza (AGPLv3)', slug: 'licenza' },
                ],
             },
          ],
       }),
    ],
});
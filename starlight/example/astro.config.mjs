import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import rslibTheme from 'starlight-theme-rslib';

export default defineConfig({
  // The theme is linked from the parent folder, so Vite must serve its fonts from there.
  vite: { server: { fs: { allow: ['..'] } } },
  integrations: [
    starlight({
      title: 'rgit',
      description: 'A git client for people and coding agents.',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/rslib/rgit' }],
      plugins: [rslibTheme()],
      sidebar: [
        { label: 'Start', items: ['getting-started'] },
        { label: 'Guides', items: [{ autogenerate: { directory: 'guides' } }] },
        { label: 'Reference', items: [{ autogenerate: { directory: 'reference' } }] },
      ],
    }),
  ],
});

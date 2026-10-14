# starlight-theme-rslib

The Starlight theme for rslib project docs.

Status: early (0.0.x).
Token names and options can change between releases.

## Install

The theme needs `@astrojs/starlight` 0.42 or later.
It is not on npm yet, so install it from a local checkout:

```sh
npm install ../rslib-misc/starlight
```

npm links a local folder, so Vite must be allowed to serve the theme fonts from it.
Add `vite: { server: { fs: { allow: ['../rslib-misc/starlight'] } } }` to your Astro config, with the path from your site to the theme.

## Use it

Add the plugin to your Starlight config:

```js
// astro.config.mjs
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';
import rslibTheme from 'starlight-theme-rslib';

export default defineConfig({
  integrations: [
    starlight({
      title: 'rgit',
      plugins: [rslibTheme()],
    }),
  ],
});
```

The site title shows as `rslib/rgit`.
Pass `rslibTheme({ lane: false })` to turn off the heading lane.

Your own `customCss` loads after the theme, so you can change any `--sl-*` or `--rs-*` token there.

## Preview

Open `preview.html` in a browser for a one-page look at the theme in dark and light.
It needs a network connection for the fonts.

The `example/` site uses rgit pages to show the theme:

```sh
cd example
npm install
npm run dev
```

Open http://localhost:4321.

## Design

`DESIGN.md` in this folder holds the palette, the type, the layout rules and the reasons for them.

## License

MIT. See `LICENSE` in this folder.

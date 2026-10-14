# Design

These notes are for version 0.0.1 of the theme.

## Who it is for

rslib makes small Rust tools for people and coding agents, such as rgit, rkb and rvow.
The readers are developers who come to find a command, copy it and read what it prints.
So the page must make commands and output easy to find and easy to read.

## The idea

Rust and verdigris are two oxides of metal.
Verdigris is the green on old copper.
It is the one accent color, for links, focus and the current place.
Rust and brass show only where they have a meaning: danger, deleted lines and caution.

## The one bold thing

The lane.
A thin rail runs down the left side of the page content, like `git log --graph`.
Each `h2` is a hollow node on the rail and each `h3` is a small dot.
The table of contents uses the same rail and fills the node for the section you are on.
A heading node fills when you hover it or land on it from a link.

Everything else stays quiet.
The current sidebar page gets a `*` marker, as `git branch` marks the current branch.
The site title reads `rslib/<project>`, as a repository path does.

## Palette

| Token    | Dark      | Light     | Use                               |
| -------- | --------- | --------- | --------------------------------- |
| Ink      | `#15212a` | `#f7f9f7` | page background                   |
| Text     | `#cfdad8` | `#23333d` | body text                         |
| Verdigris| `#5fc2b0` | `#1c7468` | links, focus, current place, note |
| Iris     | `#c4a7e7` | `#6e5594` | tip                               |
| Brass    | `#e3b341` | `#8a6208` | caution                           |
| Oxide    | `#e8875f` | `#a8431c` | danger, deleted lines             |

The dark background is a blue-green slate, not a neutral near-black.
The light background is a cool grey with a trace of green.
Body text and the accent pass WCAG AA (4.5:1) on both backgrounds.

Code uses the rose-pine themes, because rose-pine is the default palette of the rgit TUI.

## Type

| Role              | Face                        | Why                                               |
| ----------------- | --------------------------- | ------------------------------------------------- |
| Body              | Atkinson Hyperlegible Next  | made to keep letters such as `l`, `I` and `1` apart |
| Headings, labels  | Bricolage Grotesque         | a sans with character, so pages do not read as a terminal dump |
| Code              | Monaspace Neon              | GitHub's mono, with texture healing (`calt`)      |

Body text is 17px with a line-height of 1.7.
Code is about 13.5px.
Bricolage has an optical size axis, so large headings get tighter shapes and small labels stay open.
The content column is 46rem, which keeps body lines near 75 characters.

## Rules that come from research

- Keep body lines between 45 and 80 characters.
- Use 16px or more for body text and a line-height of 1.5 or more.
- Use one accent color and 1px hairlines, and almost no shadows.
- Pair one dark and one light code theme, so code follows the site theme switch.
- Callouts get a thin side rule and a faint tint, not a full box.
- Respect `prefers-reduced-motion` and show a clear focus ring.
- Do not use all caps for labels.

Sources:

- https://starlight.astro.build/guides/css-and-tailwind/
- https://starlight.astro.build/reference/plugins/
- https://designsystem.digital.gov/components/typography/
- https://github.com/HiDeoo/starlight-theme-rapide

## How it is built

The theme is a Starlight plugin.
It adds its CSS files to `customCss`, overrides `SiteTitle` and sets the Expressive Code options.
All theme rules sit in the `rslib` cascade layer, which comes after Starlight's layers.
A site's own CSS has no layer, so it always wins over the theme.

import type { StarlightPlugin } from '@astrojs/starlight/types';

export interface RslibThemeOptions {
  /** Draw the heading lane beside page content. Defaults to `true`. */
  lane?: boolean;
}

const styles = [
  'starlight-theme-rslib/styles/fonts.css',
  'starlight-theme-rslib/styles/tokens.css',
  'starlight-theme-rslib/styles/base.css',
  'starlight-theme-rslib/styles/chrome.css',
  'starlight-theme-rslib/styles/content.css',
];

export default function rslibTheme(options: RslibThemeOptions = {}): StarlightPlugin {
  const lane = options.lane ?? true;

  return {
    name: 'starlight-theme-rslib',
    hooks: {
      'config:setup'({ config, updateConfig, logger }) {
        const userCss = config.customCss ?? [];
        const themeCss = lane ? [...styles, 'starlight-theme-rslib/styles/lane.css'] : styles;

        if (config.components?.SiteTitle) {
          logger.warn('Keeping your SiteTitle override, so the rslib/<project> title is not shown.');
        }

        updateConfig({
          // User CSS comes last so a site can still adjust any token.
          customCss: [...themeCss, ...userCss],
          components: {
            SiteTitle: 'starlight-theme-rslib/components/SiteTitle.astro',
            ...config.components,
          },
          expressiveCode:
            config.expressiveCode === false
              ? false
              : {
                  // rgit's TUI ships rose-pine as its default palette, so code matches the terminal.
                  themes: ['rose-pine-moon', 'rose-pine-dawn'],
                  useStarlightDarkModeSwitch: true,
                  useStarlightUiThemeColors: false,
                  ...(typeof config.expressiveCode === 'object' ? config.expressiveCode : {}),
                  styleOverrides: {
                    borderRadius: '0.375rem',
                    borderColor: 'var(--rs-rule)',
                    codeFontFamily: 'var(--sl-font-mono)',
                    codeFontSize: 'var(--rs-code-size)',
                    codeLineHeight: '1.6',
                    uiFontFamily: 'var(--sl-font-mono)',
                    codeBackground: 'var(--rs-code-bg)',
                    frames: {
                      shadowColor: 'transparent',
                      editorTabBarBackground: 'var(--rs-code-bar)',
                      editorActiveTabBackground: 'var(--rs-code-bg)',
                      editorActiveTabIndicatorTopColor: 'var(--sl-color-accent)',
                      editorActiveTabIndicatorBottomColor: 'transparent',
                      terminalTitlebarBackground: 'var(--rs-code-bar)',
                      terminalTitlebarBorderBottomColor: 'var(--rs-rule)',
                      terminalBackground: 'var(--rs-code-bg)',
                      terminalTitlebarDotsOpacity: '0.35',
                      inlineButtonBorder: 'var(--rs-rule)',
                    },
                    textMarkers: {
                      markBackground: 'color-mix(in oklab, var(--sl-color-accent) 14%, transparent)',
                      markBorderColor: 'var(--sl-color-accent)',
                      insBackground: 'color-mix(in oklab, var(--sl-color-green) 14%, transparent)',
                      insBorderColor: 'var(--sl-color-green)',
                      insDiffIndicatorColor: 'var(--sl-color-green)',
                      delBackground: 'color-mix(in oklab, var(--sl-color-red) 14%, transparent)',
                      delBorderColor: 'var(--sl-color-red)',
                      delDiffIndicatorColor: 'var(--sl-color-red)',
                    },
                    ...(typeof config.expressiveCode === 'object'
                      ? config.expressiveCode.styleOverrides
                      : {}),
                  },
                },
        });
      },
    },
  };
}

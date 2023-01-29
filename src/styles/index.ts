import { createStitches } from "@stitches/react";

export const { 
    config, 
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: '#fff',
            bg: '#222222',
            bgHeader: '#011706',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',
      
            titles: '#00875f',
            description: '#00b37e'
          },

          fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
          }
    }
})
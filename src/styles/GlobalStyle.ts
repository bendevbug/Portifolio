import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    "*": {
        margin: 0, 
        padding: 0,
    // border: '1px solid red',
    },

    body: {
        '-webkit-font-smoothing': 'antialiased',
        backgroundColor: '$bg',
        color: '$description',
      },
    
      'body, input, textarea, button, a': {
        fontFamily: 'Roboto',
        fontWeight: 400,
      },
      a: {
        textDecoration: 'none',
        color: '#000',
        fontSize: '$md'
      }
})
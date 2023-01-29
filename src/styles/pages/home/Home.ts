import { styled } from "@stitches/react"

export const HomePage = styled('main', {

    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '20vh',

    button: {
        background: '#16892F',
        border: 'none',
        borderRadius: '0.25rem',
        cursor: 'pointer',
        padding: 18,
        width: '12vw',
        textTransform: 'uppercase',

        a: {
            fontWeight: '700',
        },

        '&:hover': {
            background: '#79DA2D',
            transition: 'all 0.5s'
        }
    }

})

import { styled } from ".."

export const Container = styled('div', {
    background: '$bg',

})

export const Header  = styled('header', {
    background: '$bgHeader',
    

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
    padding: '2rem',
    

    img: {
        margin: '0 0 0vw -25vw',
        borderRadius: '10rem',
        border: '0.45rem solid #222222'
    },

    div: {
        display: 'block',
        marginLeft: '5vw',
        width: '30vw',

        h2: {
            fontSize: '3.5rem'
        },
        h3: {
        marginTop: '5vh',
        fontSize: '1.5rem',
        fontWeight: 300,
        }
    },
    '.lastChild': {
        width: '13vw',
        marginRight: '-10rem',
        display: 'flex',
        alignItems: 'center',
        gap: 40,
        justifyContent: 'center',

        a: {

            img: {
                display: 'flex',
                margin: '0',
                border: 'none',

                '&:hover' :{
                    filter: 'brightness(0.6)',
                    transition: 'all 0.2s'
                }
    
            },

            

        }

        
    }

    
})
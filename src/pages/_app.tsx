import { globalStyles } from '../styles/GlobalStyle'
import { Container, Header } from '../styles/pages/app'
import type { AppProps } from 'next/app'

import minhaFoto from '../assets/eu.jpg'
import Image from 'next/image'
import git from '../assets/git.svg'
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'



globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={minhaFoto} width={300} height={300} alt=""/>
        <div>
          <h2>Benjamin Inácio</h2>
          <h3>Desenvolvedor com capacidade e vontade de fazer as melhores aplicações com os recursos disponíveis.<br />
           Além de sempre ter vontade de evoluir nos conhecimentos.<br /> Dê uma olhada abaixo parar descobrir minhas skills 🚀</h3>
        </div>
        <div className='lastChild'>
          <a href='https://github.com/mayzinng'>
            <Image src={git} alt="" width={50} height={50} />
          </a>
          <a href=''>
            <Image src={email} alt="" width={50} height={50} />
          </a>
          <a href=''>
            <Image src={phone} alt="" width={50} height={50} />
          </a>
          

        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

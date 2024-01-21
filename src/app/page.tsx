"use client"

import Agende from '@/components/Agende'
import Beneficios from '@/components/Beneficios'
import Depoimentos from '@/components/Depoimentos'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Mapa from '@/components/Mapa'
import SobreNos from '@/components/SobreNos'
import Tratamento from '@/components/Tratamento'
import styled from 'styled-components'

import useTranslation from '@/translation'
import Header from '@/components/Header'

export default function Home() {

  const {t} = useTranslation()

  return (
    <Container>
      <Content>
        <Header t={t} />
        <Hero t={t} />
        <Depoimentos t={t} />
        <Beneficios t={t} />
        <Tratamento t={t} />
        <SobreNos t={t} />
        <Agende t={t} />
        <Mapa t={t} />
        <Footer t={t} />
      </Content>
    </Container>
  )
}


const Container = styled.div`
height: 100dvh;
width: 100dvw;
display: flex;
  justify-content: center;
  align-items: flex-start;
background: linear-gradient(180deg, #CEC1AD 0%, #F0F0F0 27.63%);
/* *{
  border: 1px dashed red;
} */
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`
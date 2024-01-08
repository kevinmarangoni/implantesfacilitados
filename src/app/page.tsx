"use client"

import Agende from '@/components/Agende'
import Beneficios from '@/components/Beneficios'
import Depoimentos from '@/components/Depoimentos'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mapa from '@/components/Mapa'
import SobreNos from '@/components/SobreNos'
import Tratamento from '@/components/Tratamento'
import styled from 'styled-components'

import useTranslation from '@/translation'

export default function Home() {

  const {t} = useTranslation()

  return (
    <Container>
      <Content>
        <Header t={t} />
        <Hero t={t} />
        <Tratamento t={t} />
        <SobreNos t={t} />
        <Beneficios t={t} />
        <Depoimentos t={t} />
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

*{
  border: 1px dashed red;
}
`
const Content = styled.div`

`
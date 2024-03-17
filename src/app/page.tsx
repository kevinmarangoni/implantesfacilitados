"use client"

import Agende from '@/components/Agende'
import Diferenciais from '@/components/Diferenciais'
import Depoimentos from '@/components/Depoimentos'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import SobreNos from '@/components/SobreNos'
import Tratamento from '@/components/Tratamento'
import styled from 'styled-components'

import { sendGTMEvent } from '@next/third-parties/google'

import useTranslation from '@/translation'
import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Cards from '@/components/Cards'

export default function Home() {
  const {t} = useTranslation()
  const {width} = useWindowSize()
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(()=>{
    if(width < 800){
      setIsMobile(true)
    }
    else{
      setIsMobile(false)
    }
  },[width])

  useEffect(()=>{
    sendGTMEvent({
      event: `Usuário abriu o site em um dispositivo: ${isMobile? 'Celular/Tablet' : 'Desktop'}`, value: `isMobile: ${isMobile}`
    })
  },[isMobile])



  return (
    <Container>
      <Content>
        {!isMobile && <Header t={t} />}
        <Sections>
          <Hero id={"home"}  t={t} />
          <Tratamento id={"tratamento"} t={t} />
          <Diferenciais id={"diferenciais"}  t={t} />
          <Agende id={"contato"} t={t} />
          <Cards t={t} />
          {/* <Depoimentos id={"depoimentos"}  t={t} /> */}
          <SobreNos id={"clinica"}  t={t} />
        </Sections>
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
  background: linear-gradient(180deg, #e0c9ff 0%, #f0f0f0 27.63%);
`
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

const Sections = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 16px;
  gap: 70px;
  margin-bottom: 64px;
  max-width: 1000px;

  
`
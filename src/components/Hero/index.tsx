import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import Header from '@/components/Header'

import Image from 'next/image'

import DentistIllustration from '@/assets/illustration/dentist'

import logo from '@/assets/images/logo.png'

const Hero:React.FC<{t: TranslationObject}> = ({t}) => {
  return (
    <Container>
      <Content>
        <HeaderSection>
          <Header t={t} />
        </HeaderSection>
        <HeroSection>
        <LeftSection>
          <IllustrationSection>
            <DentistIllustration />
          </IllustrationSection>
        </LeftSection>
        <RightSection>
          <LogoSection>
            <Logo src={logo} alt={"logo"} />
          </LogoSection>
          <TitleSection>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.description.part1}<span>{t.hero.description.part2}</span>{t.hero.description.part3}</p>
          </TitleSection>
          <ButtonSection></ButtonSection>
        </RightSection>
        </HeroSection>
      </Content>
    </Container>
  )
  
}

export default Hero

const Container = styled.section`
height: 600px;
`
const Content = styled.article`
  display: flex;
  flex-direction: column;
`
const HeaderSection = styled.article``
const HeroSection = styled.article`
display: flex;
flex-direction: row-reverse;

`
const RightSection = styled.div``
const IllustrationSection = styled.div`
  width: 400px;
`
const LeftSection = styled.div``
const LogoSection = styled.div`
  height: 90px;
`
const Logo = styled(Image)`
  height: fit-content;
  width: fit-content;
  object-fit: contain;
`
const TitleSection = styled.div``
const ButtonSection = styled.div``

import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'

import Image from 'next/image'

import logo from '@/assets/images/logo.png'
import heroImage from '@/assets/images/hero.webp'

const Hero:React.FC<{t: TranslationObject}> = ({t}) => {
  return (
    <Container>
      <Content>
        <LeftSection>
          <IllustrationSection>
            <HeroImage src={heroImage} alt={"logo"}  />
          </IllustrationSection>
        </LeftSection>
        <RightSection>
          <LogoSection>
            <Logo src={logo} alt={"logo"} />
          </LogoSection>
          <TitleSection>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.description.part1}{" "}<span>{t.hero.description.part2}</span>{" "}{t.hero.description.part3}</p>
          </TitleSection>
          <ButtonSection>
            <Button>{t.hero.button}</Button>
          </ButtonSection>
        </RightSection>
      </Content>
    </Container>
  )
  
}

export default Hero

const Container = styled.section`
height: fit-content;
overflow: hidden;
max-width: 1000px;
padding: 16px;

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  width: 100%;
}

`
const Content = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5%;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    flex-direction: column;
  }
`
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`
const IllustrationSection = styled.div`
  width: 400px;
  height: fit-content;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    width: 100%;
    max-width: 400px;
  }
`
const LeftSection = styled.div``
const LogoSection = styled.div`
  height: 125px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    justify-content: center;
  }
`
const Logo = styled(Image)`
  height: fit-content;
  width: fit-content;
  object-fit: contain;
`
const HeroImage = styled(Image)`
  height: fit-content;
  width: fit-content;
  object-fit: contain;
`
const TitleSection = styled.div`
  text-align: right;
  margin-bottom: 24px;
h1{
  font-size: ${({theme})=> theme.sizes.font.title.xl};
  font-weight: ${({theme})=> theme.sizes.weights.bolder};
  margin-bottom: 8px;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    font-size: ${({theme})=> theme.sizes.font.title.md};
  }
}
p{
  font-size: ${({theme})=> theme.sizes.font.paragraph.lg};
  font-weight: ${({theme})=> theme.sizes.weights.normal};

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    font-size: ${({theme})=> theme.sizes.font.paragraph.md};
  }
}

span{
  font-size: ${({theme})=> theme.sizes.font.paragraph.lg};
  font-weight: ${({theme})=> theme.sizes.weights.bolder};

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    font-size: ${({theme})=> theme.sizes.font.paragraph.md};
  }
}

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  text-align: center;
  }
`
const ButtonSection = styled.div`
text-align: right;

`

const Button = styled.button`

  height: 50px;
  width: 80%;
  min-width: 50%;
  padding: 8px 16px;
  background-color: ${({theme})=> theme.color.font[10]};
  color: ${({theme})=> theme.color.font[30]};
  font-size: ${({theme})=> theme.sizes.font.paragraph.lg};
  font-weight: ${({theme})=> theme.sizes.weights.regular};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    width: 100%;
  }
`
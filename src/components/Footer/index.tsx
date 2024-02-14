import styled, { useTheme } from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import Link from 'next/link'
import FacebookIcon from '@/assets/icons/facebook'
import InstagramIcon from '@/assets/icons/instagram'
import WhatsappIcon from '@/assets/icons/whatsapp'

const Footer: React.FC<{ t: TranslationObject }> = ({ t }) => {

  const { color } = useTheme()

  return (
    <Container>
      <Content>
        <InfoFooter>
          <article>
            <LogoSection>
              <Logo src={logo} alt={"logo"} />
            </LogoSection>
            <HourSection>
              <Title>{t.footer.working.title}</Title>
              <Text>{t.global.hour[0]}</Text>
              <Text>{t.global.hour[1]}</Text>
            </HourSection>
            <ContactSection>
              <div>
                <Text>{t.global.phone}</Text>
                <Text>{t.global.whatsapp}</Text>
              </div>
              <Text>{t.global.email}</Text>
            </ContactSection>
            <Social>
                <Link href={"https://www.facebook.com/endodontiafacilitada/"}><FacebookIcon color={color.font[60]} /></Link>
                <Link href={"https://www.instagram.com/endodontiafacilitada"}><InstagramIcon color={color.font[60]} /></Link>
                <Link href={"https://wa.link/5evhq7"}><WhatsappIcon color={color.font[60]} /></Link>
              </Social>
          </article>
        </InfoFooter>
        <CopyrightFooter>
          <article>
            <p>{t.footer.rights}</p>
          </article>
        </CopyrightFooter>
      </Content>
    </Container>
  )
}

export default Footer

const Container = styled.div`
width: 100%;
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space;
`
const InfoFooter = styled.div`
height: 150px;
padding: 16px;
display: flex;
flex-direction: row;
gap: 16px;
justify-content: center;
align-items: center;
background-color: ${({theme})=> theme.color.background[50]};
article{
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    flex-direction: column;
    align-items: center;
  }
}

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  height: fit-content;

  }
`
const HourSection = styled.div``
const Title = styled.div``
const Text = styled.div``

const ContactSection = styled.div`

div{
  display: flex;
  flex-direction: column;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  flex-direction: row;
  justify-content: space-between;
  gap: 4px;
  }
}

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
  flex-direction: row;
  }
`
const Social = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}){
    flex-direction: row;
}
`
const CopyrightFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background-color: ${({theme})=> theme.color.background[20]};
article{
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
}
p{
  font-size: ${({theme})=> theme.sizes.font.paragraph.sm};
}
`

const LogoSection = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    justify-content: center;
  }
`

const Logo = styled(Image)`
  height: fit-content;
  width: fit-content;
  object-fit: contain;
`

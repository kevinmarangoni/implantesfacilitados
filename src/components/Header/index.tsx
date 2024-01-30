'use client'

import styled, { useTheme } from 'styled-components'
import { TranslationObject } from '@/translation'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import useScrollPosition from '@/utils/useScroll'
import ClockIcon from '@/assets/icons/clock'
import PhoneIcon from '@/assets/icons/phone'
import WhatsappIcon from '@/assets/icons/whatsapp'
import LocationIcon from '@/assets/icons/location'
import Link from 'next/link'

const Header: React.FC<{ t: TranslationObject }> = ({ t }) => {
  const scroll = useScrollPosition()
  const [isTopPage, setIsTopPage] = useState(true)
  const { color } = useTheme()

  useEffect(() => {
    if (scroll === 0) {
      setIsTopPage(true)
    }
    else {
      setIsTopPage(false)
    }
  }, [scroll])

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Content>
        <FixedHeader>
          <FixedContent $isTopPage={isTopPage}>
            <article>
              <WorkTime>
                <ClockIcon color={color.font[60]} />
                {t.global.hour[0]}
              </WorkTime>
              <Contact>
                <div>
                  <PhoneIcon color={color.font[60]} />
                  {t.global.phone}
                </div>
                <div>
                  <WhatsappIcon color={color.font[60]} />
                  {t.global.whatsapp}
                </div>
              </Contact>
              <Address>
                <LocationIcon color={color.font[60]} />
                {t.global.address}
              </Address>
            </article>
          </FixedContent>
        </FixedHeader>
        <MainHeader>
          <article>
            <LogoSection>
              <Logo src={logo} alt={"logo"} />
            </LogoSection>
            <MenuSection>
              <li onClick={() => scrollToSection("clinica")}>{t.header.menu.about}</li>
              <li onClick={() => scrollToSection("diferenciais")}>{t.header.menu.differentials}</li>
              <li onClick={() => scrollToSection("tratamento")}>{t.header.menu.treatment}</li>
              <li onClick={() => scrollToSection("depoimentos")}>{t.header.menu.testimony}</li>
              {/* <li onClick={() => scrollToSection("contact")}>{t.header.menu.contact}</li> */}
            </MenuSection>
            <div></div>
          </article>
        </MainHeader>
      </Content>
    </Container>
  )
}

export default Header


const Container = styled.div`
width: 100%;

`
const Content = styled.div``
const FixedHeader = styled.div`
height: 40px;
`
const FixedContent = styled.div<{ $isTopPage: boolean }>`
height: 40px;
width: 100%;
position: fixed;
z-index: 999;
background-color: ${({ theme }) => theme.color.background[60]};
font-size: ${({ theme }) => theme.sizes.font.paragraph.sm};
box-shadow: ${({ $isTopPage }) => !$isTopPage ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px;

article{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1000px;
}
`
const Address = styled.div`
display: flex;
flex-direction: row;
gap: 2px;
`
const Contact = styled.div`
  display: flex;
flex-direction: row;
justify-content: space-between;
gap: 16px;
div{
  display: flex;
flex-direction: row;
gap: 2px;
}
`
const WorkTime = styled.div`
display: flex;
flex-direction: row;
gap: 2px;
`
const Social = styled.div`

`

const MainHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
background-color: ${({ theme }) => theme.color.background[30]};
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
padding: 8px;

article{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
}
`

const LogoSection = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 8px;
  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    justify-content: center;
  }
`
const Logo = styled(Image)`
  height: fit-content;
  width: fit-content;
  object-fit: contain;
`

const MenuSection = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  li{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 8px;
    transition: all ease-in-out 0.2s;
    background: rgba(0,212,255,0);
    border-radius: 10px;
    &:hover{
      text-decoration: underline;
      color: ${({ theme }) => theme.color.font[10]};
    }
  }
  `
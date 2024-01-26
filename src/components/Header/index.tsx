import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React, { useEffect, useState } from 'react'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'
import useScrollPosition from '@/utils/useScroll'

const Header:React.FC<{t: TranslationObject}> = ({t}) => {
  const scroll = useScrollPosition()
  const [isTopPage, setIsTopPage] = useState(true)

  useEffect(()=>{
    if(scroll === 0){
      setIsTopPage(true)
    }
    else{
      setIsTopPage(false)
    }
  },[scroll])

  return (
    <Container>
      <Content>
        <FixedHeader>
          <FixedContent isTopPage={isTopPage}>
            <WorkTime>{t.global.hour[0]}</WorkTime>
            <Contact><div>{t.global.phone}</div><div>{t.global.whatsapp}</div></Contact>
            <Address>{t.global.address}</Address>
            <Social></Social>
          </FixedContent>
        </FixedHeader>
        <MainHeader>
        <LogoSection>
            <Logo src={logo} alt={"logo"} />
          </LogoSection>
          <MenuSection>
            <li>{t.header.menu.about}</li>
            <li>{t.header.menu.differentials}</li>
            <li>{t.header.menu.treatment}</li>
            <li>{t.header.menu.testimony}</li>
            <li>{t.header.menu.contact}</li>
          </MenuSection>
          <div></div>
        </MainHeader>
      </Content>
    </Container>
  )
}

export default Header


const Container = styled.div`
width: 100%;
/* *{
  border: 1px dashed red;
} */

`
const Content = styled.div``
const FixedHeader = styled.div`
height: 40px;
`
const FixedContent = styled.div<{isTopPage: boolean}>`
height: 40px;
width: 100%;
position: fixed;
z-index: 999;
background-color: ${({theme})=> theme.color.background[60]};
font-size: ${({theme})=> theme.sizes.font.paragraph.sm};
box-shadow: ${({isTopPage})=> !isTopPage ? '0 4px 8px rgba(0, 0, 0, 0.1)': 'none'};
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 8px;

`
const Address = styled.div``
const Contact = styled.div`
  display: flex;
flex-direction: row;
justify-content: space-between;
gap: 8px;
div{

}
`
const WorkTime = styled.div``
const Social = styled.div``

const MainHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: ${({theme})=> theme.color.background[30]};
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
padding: 8px;
`

const LogoSection = styled.div`
  height: 50px;
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

const MenuSection = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  li{

  }
  `
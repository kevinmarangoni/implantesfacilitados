import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'
import Button from '../Button'

const SobreNos:React.FC<{t: TranslationObject}> = ({t}) => {
  return (
    <Container>
      <Content>
        <TitleSection>
          <Title dangerouslySetInnerHTML={{ __html: t.about_us.title }} />
        <Subtitle>{t.about_us.subtitle}</Subtitle>
        </TitleSection>
        <PresentationSection>
        <InfoSection>
          <Text>{t.about_us.text.first}</Text>
          <Text>{t.about_us.text.second}</Text> 
          <Text>{t.about_us.text.third}</Text> 
          <Button text={''}>{t.about_us.button}</Button>
        </InfoSection>
        <VideoSection>
          <VideoWrapper>
            <video autoPlay muted loop playsInline src={"/videos/clinic.mp4"}/>
          </VideoWrapper>
        </VideoSection>
        </PresentationSection>
      </Content>
    </Container>
  )
}

export default SobreNos

const Container = styled.div`

`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  
`
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 65%;
  padding: 16px 32px;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}){
    width: 100%;
    padding: 0px;
  }
`
const VideoSection = styled.div`

`
const VideoWrapper = styled.div`
height: 500px;
 video{
  height: 100%;
 }

 @media (${({theme})=> theme.sizes.breakpoints.smartphone}){
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
  }
`

const TitleSection = styled.div`
  width: 100%;
  text-align: center;
`

const PresentationSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  background-color: ${({theme})=> theme.color.background[30]};
  border-radius: 20px;
  overflow: hidden;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}){
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    padding: 32px;
  }
`
const Title = styled.h1`
  font-size: ${({theme})=> theme.sizes.font.title.md};
  color: ${({theme})=> theme.color.font[60]};

  span{
  color: ${({theme})=> theme.color.font[10]};
}
`
const Subtitle = styled.h2`
  font-size: ${({theme})=> theme.sizes.font.paragraph.md};
`

const Text = styled.div`
font-size: ${({theme})=> theme.sizes.font.paragraph.md};
line-height: 1.8;
text-align: justify;
`
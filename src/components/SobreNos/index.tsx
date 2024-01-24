import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'

const SobreNos:React.FC<{t: TranslationObject}> = ({t}) => {
  return (
    <Container>
      <Content>
        <TitleSection>
          <Title dangerouslySetInnerHTML={{ __html: t.about_us.title }} />
        </TitleSection>
        <PresentationSection>
        <InfoSection>
        <Subtitle>{t.about_us.subtitle}</Subtitle>
          <Text>{t.about_us.text.first}</Text>
          <Text>{t.about_us.text.second}</Text> 
          <Text>{t.about_us.text.third}</Text> 
        </InfoSection>
        <VideoSection>
          <VideoWrapper>
            <video autoPlay muted loop playsInline src={"/videos/clinic.mp4"}/>
          </VideoWrapper>
        </VideoSection>
        </PresentationSection>
        <SlidesSection></SlidesSection>
      </Content>
    </Container>
  )
}

export default SobreNos

const Container = styled.div``
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`
const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 60%;
`
const VideoSection = styled.div`

`
const VideoWrapper = styled.div`
height: 400px;
 video{
  height: 100%;
  border-radius: 20px;
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
`
const SlidesSection = styled.div``

const Title = styled.h1`
  font-size: ${({theme})=> theme.sizes.font.title.md};
  color: ${({theme})=> theme.color.font[60]};

  span{
  color: ${({theme})=> theme.color.font[10]};
}
`
const Subtitle = styled.h2`
  font-size: ${({theme})=> theme.sizes.font.paragraph.xl};
  color: ${({theme})=> theme.color.font[10]};
`

const Text = styled.div``
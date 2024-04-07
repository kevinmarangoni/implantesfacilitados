import React from 'react'

import BeforeAfterSlider from '@/components/BeforeAfter'

import after from '@/assets/images/after.png'
import before from '@/assets/images/before.png'
import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import Button from '../Button'



const AntesDepois:React.FC<{t: TranslationObject}> = ({t}) => {


    const list = [
        {before:before, after:after},
        {before:before, after:after},
        {before:before, after:after},
        {before:before, after:after},
    ]

  return (
    <Container>
        <Content>
            <TitleSection>
                <h1 dangerouslySetInnerHTML={{ __html: t.before_after.title }} />
                <p>{t.before_after.text}</p>
            </TitleSection>
            <Section>
                {list.map((item, index)=>{
                    return (
                        <BeforeAfterSliderContainer key={index}>
                            <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} />
                        </BeforeAfterSliderContainer>
                    )
                })
                }
            </Section>
            <ButtonSection>
                <Button>{t.before_after.button}</Button>
            </ButtonSection>
        </Content>
    </Container>
  )
}

export default AntesDepois

const Container = styled.div``
const Content = styled.div`
display: flex;
flex-direction: column;
gap: 28px;
`
const TitleSection = styled.div`
  h1 {
    font-size: ${({theme})=> theme.sizes.font.title.md};
    text-align: center;

    span{
        color: ${({theme})=> theme.color.font[10]};
    }

    @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
      font-size: ${({ theme }) => theme.sizes.font.title.md};
    }
  }

  p {
    color: ${({theme})=> theme.color.font[60]};
    font-size: ${({theme})=> theme.sizes.font.paragraph.md};
    text-align: center;
    @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
      font-size: ${({ theme }) => theme.sizes.font.paragraph.md};
    }
  }
`

const Section = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 16px;
justify-content: space-between;

    @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
        flex-direction: column;
    }

`

const BeforeAfterSliderContainer = styled.div`
width: 48%;

    @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
        width: 100%;
    }

`


const ButtonSection = styled.div``
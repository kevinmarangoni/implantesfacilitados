import styled from 'styled-components'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const CardItem = ({img, title, text, index}) => {

    const [isLeft, setLeft] = useState(true)

    function setSide(index: number){
        if(index % 2 === 0){
            setLeft(true)
            return
        }
        setLeft(false)
    }

    useEffect(()=>{
        setSide(index)
    },[index])

  return (
    <Container>
        <Content $isLeft={isLeft}>
            <ImageSection>
                <CardImage src={img} alt={title + `photo`} />
            </ImageSection>
            <TextSection $isLeft={isLeft}>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </TextSection>
        </Content>
    </Container>
  )
}

export default CardItem

const Container = styled.div`
border-radius: 20px;
background-color: ${({theme})=> theme.color.background[30]};
overflow: hidden;
height: 170px;
box-shadow: 0px 0px 10px -5px rgba(143,143,143,1);

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    height: fit-content;
}
`
const Content = styled.div<{$isLeft: boolean}>`
display: flex;
flex-direction: ${({$isLeft})=> $isLeft  ? 'row' : 'row-reverse' };
gap: 5%;

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    flex-direction: column;
}

`
const ImageSection = styled.div`
width: 40%;


@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    width: 100%;
    height: 50%;
}

`
const CardImage = styled(Image)`
  height: fit-content;
  width: fit-content;
  object-fit: contain;

  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    object-fit: cover;
}
`
const TextSection = styled.div<{$isLeft: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    *{
        text-align: ${({$isLeft})=> $isLeft  ? 'right' : 'left' }
    }

    @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
        *{
        text-align: center;
    }
}
`
const Title = styled.div`
    font-size: ${({theme})=> theme.sizes.font.paragraph.xl};
`
const Text = styled.div`
    font-size: ${({theme})=> theme.sizes.font.paragraph.md};
`
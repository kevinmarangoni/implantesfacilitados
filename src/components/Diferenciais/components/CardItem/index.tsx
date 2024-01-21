import styled from 'styled-components'
import Image, { StaticImageData } from 'next/image'
import React, { useEffect, useState } from 'react'

interface ICardItemProps {
    img: StaticImageData;
    title: string;
    text: string;
    index: number;
}

const CardItem:React.FC<ICardItemProps> = ({img, title, text, index}) => {

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
height: fit-content;
box-shadow: 0px 0px 10px -5px rgba(143,143,143,1);

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    height: fit-content;
    flex: 0 0 48%;
}

@media (${({theme})=> theme.sizes.breakpoints.tablet}) {
    flex: 0 0 48%;
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
width: 50%;
overflow: hidden;
height: 250px;

@media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    width: 100%;
    height: 250px;
}

`
const CardImage = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
    object-fit: cover;
}
`
const TextSection = styled.div<{$isLeft: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 24px;
    gap: 8px;
    *{
        text-align: ${({$isLeft})=> $isLeft  ? 'right' : 'left' }
    }

    @media (${({theme})=> theme.sizes.breakpoints.smartphone}) {
        width: 100%;
        *{
        text-align: center;
    }
}
`
const Title = styled.h1`
    font-size: ${({theme})=> theme.sizes.font.paragraph.xl};
    color: ${({theme})=> theme.color.font[10]};
`
const Text = styled.p`
    font-size: ${({theme})=> theme.sizes.font.paragraph.md};
`
import React, { useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

const Card = ({ title, description, button, icon, index}) => {
  const theme = useTheme()
  const [color, setColor] = useState(theme.color.font[10])


  function isPair(index:number){
    const test = index % 2 === 0
    if (test){
      setColor(theme.color.background[10])
      return
    }
    setColor(theme.color.font[10])
  }

  useEffect(()=>{
    isPair(index)
  },[index])

  return (
    <Container>
      <Content>
      <IconSection $color={color}>{icon}</IconSection>
      <InfoSection>
        <Title >{title}</Title>
        <Description>{description}</Description>
      </InfoSection>
      </Content>
      <Button $color={color}>{button}</Button>
    </Container>
  );
};

const Container = styled.section`
  height: fit-content;
  height: 300px;
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme})=> theme.color.background[30]};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  
  @media (${({theme})=> theme.sizes.breakpoints.smartphone}){
    width: 100%;
  }
  `;
  
const Content = styled.div``

const IconSection = styled.div<{$color: string}>`
height: 70px;
width: 70px;
padding: 12px;
border-radius: 10px;
transform: translateY(-55px);

@media (${({theme})=> theme.sizes.breakpoints.smartphone}){
  transform: translateY(0);
}
background-color: ${({$color})=> $color};
`;

const InfoSection = styled.div`
transform: translateY(-45px);

@media (${({theme})=> theme.sizes.breakpoints.smartphone}){
  transform: translateY(0);
}

`

const Title = styled.p`
  color: ${({theme})=> theme.color.font[10]};
`;

const Description = styled.p`

`;

const Button = styled.div<{$color: string}>`

`;

export default Card;


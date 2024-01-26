/* eslint-disable react-hooks/exhaustive-deps */
import Button from '@/components/Button';
import React, { ReactNode, useEffect, useState } from 'react';
import styled, { useTheme } from 'styled-components';

interface ICardProps {
  title: string;
  description: string;
  button: string;
  icon: ReactNode;
  index: number;
  redirectText: string;
}

const Card:React.FC<ICardProps> = ({ title, description, button, icon, index, redirectText }) => {
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
      <Button $color={color} text={redirectText}>{button}</Button>
    </Container>
  );
};

const Container = styled.section`
  height: 370px;
  width: 23%;
  max-width: 250px;
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
    height: 100%;
    padding: 20px;
    max-width: 100%;
  }

  `;
  
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  @media (${({theme})=> theme.sizes.breakpoints.smartphone}){
    padding: 12px;
  }
`

const IconSection = styled.div<{$color: string}>`
height: 50px;
width: 50px;
padding: 10px;
border-radius: 10px;
transform: translateY(-45px);

@media (${({theme})=> theme.sizes.breakpoints.smartphone}){
  transform: translateY(0);
}
background-color: ${({$color})=> $color};
`;

const InfoSection = styled.div`
transform: translateY(-45px);
display: flex;
flex-direction: column;
  align-items: center;
gap: 12px;
@media (${({theme})=> theme.sizes.breakpoints.smartphone}){
  transform: translateY(0);
}

`

const Title = styled.p`
  text-align: center;
  width: 90%;
  color: ${({theme})=> theme.color.font[10]};
  font-size: ${({theme})=> theme.sizes.font.paragraph.lg};
  font-weight: ${({theme})=> theme.sizes.weights.regular};
`;

const Description = styled.p`
  text-align: center;
`;

export default Card;


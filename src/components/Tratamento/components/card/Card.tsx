import DentistIllustration from '@/assets/illustration/dentist';
import UrgencyIcon from '@/assets/illustration/urgency';
import React from 'react';
import styled,{useTheme} from 'styled-components';

const Card = ({ title, description, button, index}) => {

    const theme = useTheme();

    const iconList = [<UrgencyIcon color={theme.color.font[10]} />, <DentistIllustration />, <DentistIllustration />, <DentistIllustration />,]

  return (
    <Container>
      <Icon>{iconList[index]}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>{button}</Button>
    </Container>
  );
};

const Container = styled.section`
  height: fit-content;
  min-height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({theme})=> theme.color.background[30]};
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Icon = styled.div`
height: 50px;
width: 50px;
`;

const Title = styled.p`
  margin-top: 10px; 
`;

const Description = styled.p`
  /* Estilos para a descrição */
  margin-top: 10px; 
`;

const Button = styled.div`
  /* Estilos para o botão */
  margin-top: 10px; 
`;

export default Card;

import React from 'react';
import styled from 'styled-components';

const Card = ({ title, icon, description, button }) => {
  return (
    <Container>
      <Icon>{icon}</Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Button>{button}</Button>
    </Container>
  );
};

const Container = styled.section`
  height: 200px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Icon = styled.div`
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

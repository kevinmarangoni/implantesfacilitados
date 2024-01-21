import { TranslationObject } from '@/translation';
import React from 'react';
import Card from '@/components/Tratamento/components/card/Card'; 
import CrossIcon from '@/assets/illustration/cross';
import styled from 'styled-components';
import ToothIcon from '@/assets/illustration/tooth';
import DiagnosisIcon from '@/assets/illustration/diagnosis';
import InsuranceIcon from '@/assets/illustration/insurance';

const Tratamento: React.FC<{t: TranslationObject}> = ({t}) => {

  const icons = [<CrossIcon key={0}/>, <ToothIcon key={1}/>, <DiagnosisIcon key={2}/>, <InsuranceIcon key={3}/>]

  return (
    <Container>
      <Content>
      {t.treatment.cards.map((item, index) => (
        <Card 
          key={index}
          index={index}
          title={item.title} 
          icon={icons[index]}
          description={item.text} 
          button={item.button}
        />
      ))}
      </Content>
    </Container>
  );
};

export default Tratamento;


const Container = styled.section`
  
`

const Content = styled.section`
  display: flex;
  flex-direction: row; 
  gap: 8px;
  flex-wrap: wrap;
`
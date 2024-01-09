import { TranslationObject } from '@/translation';
import React from 'react';
import Card from '@/components/Tratamento/components/card/Card'; 
import UrgencyIcon from '@/assets/illustration/urgency';
import styled from 'styled-components';

const Tratamento: React.FC<{t: TranslationObject}> = ({t}) => {

  const illustrations = {
    urgency: <UrgencyIcon/>
  }
 const xqld = 'urgency'


  return (
    <Container>
      <Content>
      {t.treatment.cards.map((item, index) => (
        <Card 
          key={index}
          index={index}
          title={item.title} 
          // icon ={illustrations[item.icon]}
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
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
      <TitleSection>
      <Title dangerouslySetInnerHTML={{ __html: t.treatment.title }} />
        <Subtitle>{t.treatment.text}</Subtitle>
      </TitleSection>
        <CardsSection>
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
        </CardsSection>
      </Content>
    </Container>
  );
};

export default Tratamento;


const Container = styled.section`

`

const Content = styled.section`

`

const TitleSection = styled.div`
text-align: center;
`
const Title = styled.h1`
  font-size: ${({theme})=> theme.sizes.font.title.md};
span{
    color: ${({theme})=> theme.color.font[10]};
}
`
const Subtitle = styled.p``

const CardsSection = styled.div`
  display: flex;
  flex-direction: row; 
  gap: 16px;
  flex-wrap: wrap;

  margin-top: 70px;
    @media (${({theme})=> theme.sizes.breakpoints.smartphone}){
      margin-top: 24px;
  }
`
import { TranslationObject } from '@/translation';
import React from 'react';
import Card from '@/components/Tratamento/components/card/Card'; 
import styled from 'styled-components';
import ToothIcon from '@/assets/illustration/tooth';
import SyringeIcon from '@/assets/illustration/syringe';
import InsuranceIcon from '@/assets/illustration/insurance';
import TeethIcon from '@/assets/illustration/teeth';
import SurgeryIcon from '@/assets/illustration/surgery';
import PlanningIcon from '@/assets/illustration/planning';
import PorcelainToothIcon from '@/assets/illustration/porcelain';
import PreventionIcon from '@/assets/illustration/prevention';

const Tratamento: React.FC<{id:string, t: TranslationObject}> = ({id, t}) => {

  const icons = [
  <TeethIcon key={0}/>, 
  <ToothIcon key={1}/>, 
  <SyringeIcon key={2}/>, 
  <PreventionIcon key={3}/>,
  <PorcelainToothIcon key={4}/>,
  <SurgeryIcon key={5}/>,
  <InsuranceIcon key={6}/>,
  <PlanningIcon key={7}/>,
]

  return (
    <Container id={id}>
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
          redirectText={item.redirectText}
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
  row-gap: 48px;
  column-gap: 16px;
  flex-wrap: wrap;
  margin-top: 70px;

    @media (${({theme})=> theme.sizes.breakpoints.smartphone}){
      row-gap: 16px;
      margin-top: 24px;
  }
`
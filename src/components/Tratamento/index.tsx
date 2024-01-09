import { TranslationObject } from '@/translation';
import React from 'react';
import Card from '@/components/Tratamento/components/card/Card'; 
import UrgencyIllustration from '@/assets/illustration/urgency';



type IllustrationsType = {
  [key: string]: () => JSX.Element;
};


const Tratamento: React.FC<{t: TranslationObject}> = ({t}) => {

  function chooseIcon(name: string) {   if(name === 'urgency'){     return <UrgencyIllustration />   } }


  return (
    <div>
      {t.treatment.cards.map((item, index) => {



        return (
          <Card 
            key={index}
            title={item.title} 
            icon={chooseIcon(item.icon)}
            description={item.text} 
            button={item.button}
          />
        );
      })}
    </div>
  );
};

export default Tratamento;


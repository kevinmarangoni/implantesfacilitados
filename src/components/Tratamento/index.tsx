import { TranslationObject } from '@/translation'
import React from 'react'

const Tratamento:React.FC<{t: TranslationObject}> = ({t}) => {

  
  return (
  <>
  <h1> {t.treatment.title}</h1>
  <p>{t.treatment.text}</p>
  {t.treatment.cards}
  </>
  )
}

export default Tratamento
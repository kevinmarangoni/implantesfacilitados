import { TranslationObject } from '@/translation'
import React from 'react'

const Agende:React.FC<{t: TranslationObject}> = ({t}) => {
  return (
    <div>{t.schedule.title}</div>
  )
}

export default Agende
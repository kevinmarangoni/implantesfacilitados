import { TranslationObject } from '@/translation'
import React from 'react'

const Agende:React.FC<{id:string, t: TranslationObject}> = ({id, t}) => {
  return (
    <div>{t.schedule.title}</div>
  )
}

export default Agende
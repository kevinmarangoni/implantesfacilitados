import styled from 'styled-components'
import { TranslationObject } from '@/translation'
import React from 'react'

import DentistIllustration from '@/assets/illustration/dentist'

const Hero:React.FC<{t: TranslationObject}> = ({t}) => {
  return (
    <>
      <div>Hero</div>
      {/* <IllustrationSection><DentistIllustration /></IllustrationSection> */}
    </>
  )
  
}

export default Hero

const IllustrationSection = styled.div`
`
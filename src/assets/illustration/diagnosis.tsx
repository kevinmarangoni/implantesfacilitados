import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
  height: 100%;
	width: 100%;

  svg{
	height: 100%;
  	width: 100%;
  }
`

interface IIconProps {
  color?: string;
}

const DiagnosisIcon: React.FC<IIconProps> = ({color}) => {
  return (
    <Container>
<svg width="45" height="45" viewBox="0 0 45 45" fill='none' xmlns="http://www.w3.org/2000/svg">
<g id="medical-search-diagnosis">
<g id="medical-search-diagnosis_2">
<path id="vector" d="M16.6603 31.3905C24.7958 31.3905 31.3911 24.7953 31.3911 16.6598C31.3911 8.52434 24.7958 1.9292 16.6603 1.9292C8.52482 1.9292 1.92969 8.52434 1.92969 16.6598C1.92969 24.7953 8.52482 31.3905 16.6603 31.3905Z" stroke="#E9E9E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="vector_2" d="M40 42L27 28" stroke={color ?? '#FAFAFA'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path id="union" d="M14.5703 8.38293C13.8602 8.38293 13.2846 8.95857 13.2846 9.66865V13.2848H9.66853C8.95845 13.2848 8.38281 13.8604 8.38281 14.5705V18.7491C8.38281 19.4592 8.95845 20.0348 9.66853 20.0348H13.2846V23.6508C13.2846 24.3609 13.8602 24.9365 14.5703 24.9365H18.7489C19.459 24.9365 20.0346 24.3609 20.0346 23.6508V20.0348H23.6507C24.3607 20.0348 24.9364 19.4592 24.9364 18.7491V14.5705C24.9364 13.8604 24.3607 13.2848 23.6507 13.2848H20.0346V9.66865C20.0346 8.95857 19.459 8.38293 18.7489 8.38293H14.5703Z" stroke={color ?? '#FAFAFA'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>
    </Container>
  )
}

export default DiagnosisIcon
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

const ToothIcon: React.FC<IIconProps> = ({color}) => {
  return (
    <Container>
<svg width="38" height="36" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6849 10.1293C2.70268 0.867365 10.8503 -0.0253948 16.3995 3.19009C18.1437 4.20077 19.8585 4.20077 21.6027 3.19009C27.1519 -0.0253948 35.2993 0.867365 36.3173 10.1293C37.3384 19.4209 32.1059 29.2509 29.3043 33.0154C28.667 33.8718 27.6378 34.281 26.5703 34.281C24.8205 34.281 23.2585 33.1835 22.6651 31.5376L21.6755 28.7926C21.2691 27.6653 20.1994 26.9138 19.0011 26.9138C17.8027 26.9138 16.7331 27.6653 16.3266 28.7926L15.3371 31.5376C14.7436 33.1835 13.1817 34.281 11.4319 34.281C10.3643 34.281 9.33521 33.8718 8.69787 33.0154C5.89639 29.2509 0.663849 19.4209 1.6849 10.1293Z" stroke={color ?? '#FAFAFA'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23.0607 10.5928C19.7282 11.808 17.938 11.7834 14.9453 10.5928" stroke={color ?? '#FAFAFA'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </Container>
  )
}

export default ToothIcon
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

const InsuranceIcon: React.FC<IIconProps> = ({color}) => {
  return (
    <Container>
<svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.0036 1C23.1819 1 22.5158 1.6661 22.5158 2.48775V6.67215H18.3315C17.5098 6.67215 16.8438 7.33822 16.8438 8.1599V12.9951C16.8438 13.8168 17.5098 14.4829 18.3315 14.4829H22.5158V18.6671C22.5158 19.4887 23.1819 20.1548 24.0036 20.1548H28.8388C29.6605 20.1548 30.3264 19.4887 30.3264 18.6671V14.4829H34.5108C35.3324 14.4829 35.9986 13.8168 35.9986 12.9951V8.1599C35.9986 7.33822 35.3324 6.67215 34.5108 6.67215H30.3264V2.48775C30.3264 1.6661 29.6605 1 28.8388 1H24.0036Z" stroke={color ?? '#FAFAFA'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M1 30.0111L8.27134 36.0707C9.34083 36.9619 10.6889 37.4502 12.0811 37.4502H31.2511C32.6204 37.4502 33.7305 36.34 33.7305 34.9704C33.7305 32.2314 31.5102 30.0111 28.7714 30.0111H15.444" stroke={color ?? '#FAFAFA'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.92652 27.0358L12.1582 29.2673C13.3906 30.5 15.3889 30.5 16.6214 29.2673C17.8539 28.0348 17.8539 26.0367 16.6214 24.8042L13.1573 21.3401C12.0412 20.224 10.5276 19.597 8.94928 19.597H1" stroke={color ?? '#FAFAFA'} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </Container>
  )
}

export default InsuranceIcon
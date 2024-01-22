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

const CrossIcon: React.FC<IIconProps> = ({color}) => {
  return (
    <Container>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
<g clipPath="url(#clip0_601_156)">
<path d="M2 4.85714C2 3.2792 3.2792 2 4.85714 2H35.1249C36.7029 2 37.982 3.2792 37.982 4.85714V35.125C37.982 36.703 36.7029 37.9821 35.1249 37.9821H4.85714C3.2792 37.9821 2 36.703 2 35.125V4.85714Z" stroke={color ?? '#FAFAFA'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.7109 10.4822C16.922 10.4822 16.2824 11.1218 16.2824 11.9107V15.9287H12.2645C11.4755 15.9287 10.8359 16.5683 10.8359 17.3573V22.0001C10.8359 22.7891 11.4755 23.4287 12.2645 23.4287H16.2824V27.4465C16.2824 28.2354 16.922 28.875 17.7109 28.875H22.3538C23.1428 28.875 23.7824 28.2354 23.7824 27.4465V23.4287H27.8002C28.5892 23.4287 29.2289 22.7891 29.2289 22.0001V17.3573C29.2289 16.5683 28.5892 15.9287 27.8002 15.9287H23.7824V11.9107C23.7824 11.1218 23.1428 10.4822 22.3538 10.4822H17.7109Z" stroke={color ?? '#FAFAFA'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_601_156">
<rect width="40" height="40" fill="white"/>
</clipPath>
</defs>
</svg>
    </Container>
  )
}

export default CrossIcon
import React from 'react'
import styled from 'styled-components'

const ClockIcon: React.FC<{ color:string}> = ({ color }) => {
    return (
        <Container>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 33" fill="none">
            <circle cx="16.5" cy="16.5" r="12" stroke={color} strokeWidth="2"/>
            <path d="M22.6875 16.5H16.75C16.6119 16.5 16.5 16.3881 16.5 16.25V11.6875" stroke={color} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </Container>
    )
}

export default ClockIcon

const Container = styled.div`
  height: 15px;
	width: 15px;

  svg{
	height: 100%;
  	width: 100%;
  }
`
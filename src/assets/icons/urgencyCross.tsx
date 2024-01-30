import React from 'react'
import styled from 'styled-components'

const UrgencyCrossIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 74" fill="none">
        <path d="M46.2866 8.42871H25.7151L25.7151 30.2859H2.57227L2.57227 49.7144H25.7151L25.7151 71.5716H46.2866L46.2866 49.7144H69.4294L69.4294 30.2859H46.2866L46.2866 8.42871Z" fill={ color } stroke={ color } stroke-linecap="round" stroke-linejoin="round" />
        <g clip-path="url(#clip0_860_155)">
          <path d="M65.7134 0.893066H58.2849L58.2849 8.92878H49.9277L49.9277 16.0716H58.2849L58.2849 24.1074H65.7134L65.7134 16.0716H74.0706L74.0706 8.92878H65.7134L65.7134 0.893066Z" stroke={ color } stroke-linecap="round" stroke-linejoin="round" />
        </g>
      </svg>
    </Container>
  )
}

export default UrgencyCrossIcon

const Container = styled.div`
  height: 15px;
	width: 15px;

  svg{
	height: 100%;
  	width: 100%;
  }
`
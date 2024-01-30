import React from 'react'
import styled from 'styled-components'

const ParkIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Container>
      <svg viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="33" cy="33" r="30.5" stroke={ color } stroke-width="5" />
        <path d="M30.032 21.92V30.32H41.312V35.648H30.032V44.528H42.752V50H23.312V16.448H42.752V21.92H30.032Z" fill={ color } />
      </svg>
    </Container>
  )
}

export default ParkIcon

const Container = styled.div`
  height: 15px;
	width: 15px;

  svg{
	height: 100%;
  	width: 100%;
  }
`
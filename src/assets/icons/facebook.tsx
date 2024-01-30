import React from 'react'
import styled from 'styled-components'

const FacebookIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 29" fill="none">
        <g clip-path="url(#clip0_761_1746)">
          <path d="M15 0C6.7158 0 0 6.49194 0 14.5C0 21.2999 4.8432 27.006 11.3766 28.5731V18.9312H8.2836V14.5H11.3766V12.5906C11.3766 7.65542 13.6872 5.3679 18.6996 5.3679C19.65 5.3679 21.2898 5.54828 21.9606 5.72808V9.74458C21.6066 9.70862 20.9916 9.69064 20.2278 9.69064C17.7684 9.69064 16.818 10.5914 16.818 12.9328V14.5H21.7176L20.8758 18.9312H16.818V28.8939C24.2454 28.0268 30.0006 21.9136 30.0006 14.5C30 6.49194 23.2842 0 15 0Z" fill={ color } />
        </g>
      </svg>
    </Container>
  )
}

export default FacebookIcon

const Container = styled.div`
  height: 15px;
	width: 15px;

  svg{
	height: 100%;
  	width: 100%;
  }
`
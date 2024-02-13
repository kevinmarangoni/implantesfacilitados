import React from 'react'
import styled from 'styled-components'

const LocationIcon: React.FC<{ color: string }> = ({ color }) => {
  return (
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 29" fill="none">
        <path d="M21 11.4091C21 17.6818 11.5 25 11.5 25C11.5 25 2 17.6818 2 11.4091C2 6.28427 6.32567 2 11.5 2C16.6743 2 21 6.28427 21 11.4091Z" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.8929 14.2143C13.4905 14.2143 14.7857 12.8232 14.7857 11.1071C14.7857 9.39111 13.4905 8 11.8929 8C10.2952 8 9 9.39111 9 11.1071C9 12.8232 10.2952 14.2143 11.8929 14.2143Z" stroke={ color } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Container>
  )
}

export default LocationIcon

const Container = styled.div`
  height: 15px;
	width: 15px;

  svg{
	height: 100%;
  	width: 100%;
  }
`
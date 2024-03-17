import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const BeforeAfterContainer = styled.div`
  position: relative;
`;

const BeforeImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
`;

const AfterImage = styled(Image)`
  width: 100%;
  height: auto;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: inset(0 ${props => 100 - props.position}% 0 0);
`;

const ProgressBar = styled.input`
  width: 100%;
  height: 10px;
  background-color: #f1f1f1;
  border-radius: 5px;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const BeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [position, setPosition] = useState(50);

  const handleSliderChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <Container>
      <BeforeAfterContainer>
        <BeforeImage src={beforeImage} alt="Before" layout="responsive" />
        <AfterImage src={afterImage} alt="After" layout="responsive" position={position} />
      </BeforeAfterContainer>
      <ProgressBar type="range" min="0" max="100" value={position} onChange={handleSliderChange} />
    </Container>
  );
};

export default BeforeAfterSlider;

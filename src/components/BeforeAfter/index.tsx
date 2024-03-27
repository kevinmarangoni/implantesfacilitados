import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100%; /* Define o tamanho do componente como 100% do contêiner pai */
`;

const BeforeAfterContainer = styled.div`
  position: relative;
  width: 100%; /* Define o tamanho do componente como 100% do contêiner pai */
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

const Label = styled.div`
  position: absolute;
  top: 10px;
  ${props => props.position === 'before' ? 'left: 10px;' : 'right: 10px;'};
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
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
  const [isBeforeLabelVisible, setIsBeforeLabelVisible] = useState(true);
  const [isAfterLabelVisible, setIsAfterLabelVisible] = useState(true);

  const handleSliderChange = (e) => {
    const newPosition = parseInt(e.target.value);
    setPosition(newPosition);
    if (newPosition < 30) {
      setIsBeforeLabelVisible(false);
      setIsAfterLabelVisible(true);
    } else if (newPosition > 60) {
      setIsBeforeLabelVisible(true);
      setIsAfterLabelVisible(false);
    } else {
      setIsBeforeLabelVisible(true);
      setIsAfterLabelVisible(true);
    }
  };

  return (
    <Container>
      <BeforeAfterContainer>
        <BeforeImage src={beforeImage} alt="Before" layout="responsive" />
        <AfterImage src={afterImage} alt="After" layout="responsive" position={position} />
        <Label position="before" isVisible={isBeforeLabelVisible}>Depois</Label>
        <Label position="after" isVisible={isAfterLabelVisible}>Antes</Label>
      </BeforeAfterContainer>
      <ProgressBar type="range" min="0" max="100" value={position} onChange={handleSliderChange} />
    </Container>
  );
};

export default BeforeAfterSlider;
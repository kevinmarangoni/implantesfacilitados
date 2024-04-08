import styled from 'styled-components';
import React from 'react';

// Styled container for the SVG icon
const Container = styled.div`
  height: 100%;
  width: 100%;

  svg {
    height: 100%;
    width: 100%;
  }
`;

// Interface for the props of the icon component
interface IIconProps {
  color?: string;
}

// Icon component for the Close SVG icon
const PlanningIcon: React.FC<IIconProps> = ({ color='#FAFAFA' }) => {
  return (
    <Container>
      <svg width="30" height="30" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_201_21153)">
          <path d="M1.5223 2.47038H5.96503V5.24709H1.5223V2.47038ZM5.96503 5.80243C6.11232 5.80243 6.25357 5.74392 6.35772 5.63977C6.46187 5.53563 6.52038 5.39437 6.52038 5.24709V2.47038C6.52038 2.16217 6.27047 1.91504 5.96503 1.91504H1.5223C1.21409 1.91504 0.966962 2.16217 0.966962 2.47038V5.24709C0.966962 5.39437 1.02547 5.53563 1.12962 5.63977C1.23376 5.74392 1.37502 5.80243 1.5223 5.80243H0.411621V6.35777H7.07572V5.80243H5.96503Z" fill={color || "black"} />
        </g>
        <defs>
          <clipPath id="clip0_201_21153">
            <rect width="6.6641" height="6.6641" fill="white" transform="translate(0.411621 0.804688)"/>
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
};

export default PlanningIcon;
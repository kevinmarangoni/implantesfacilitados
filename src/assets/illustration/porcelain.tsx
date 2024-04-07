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

// Icon component for the fourth SVG icon
const PorcelainToothIcon: React.FC<IIconProps> = ({ color='#FAFAFA'  }) => {
  return (
    <Container>
      <svg width="27" height="31" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_201_4193)">
          <path d="M26.024 6.21952C25.3862 3.59986 23.2948 1.46567 20.6937 0.790187C18.8289 0.30588 17.044 1.08564 15.5297 2.19966C15.3414 2.33811 15.1265 2.41574 14.9214 2.51712L16.5621 3.57205C16.9919 3.84839 17.117 4.42191 16.8401 4.85292C16.5818 5.25554 16.0134 5.42412 15.5593 5.13099L9.73657 1.38746C8.53739 0.758904 7.22351 0.437385 5.86618 0.790187C3.26505 1.46625 1.17373 3.59986 0.535905 6.21952C-0.0509408 8.63063 0.511573 10.901 1.78143 12.6169C3.13471 14.4458 3.67463 16.5945 3.88376 18.8358C4.13866 21.5679 4.48219 24.2906 5.09685 26.9648L5.54871 28.9315C5.73351 29.735 6.44607 30.3045 7.26754 30.3045C8.07684 30.3045 8.78244 29.7513 8.97883 28.9628L10.9757 20.944C11.2399 19.8826 12.19 19.1388 13.2791 19.1388C14.3682 19.1388 15.3183 19.8832 15.5824 20.944L17.5793 28.9628C17.7757 29.7513 18.4813 30.3045 19.2906 30.3045C20.1121 30.3045 20.8246 29.735 21.0095 28.9315L21.4613 26.9648C22.076 24.2912 22.4189 21.5679 22.6744 18.8358C22.8835 16.5939 23.4235 14.4458 24.7767 12.6169C26.0483 10.9015 26.6108 8.63121 26.024 6.21952Z" fill={color || "black"} />
        </g>
        <defs>
          <clipPath id="clip0_201_4193">
            <rect width="25.9533" height="29.6609" fill="white" transform="translate(0.303101 0.643555)"/>
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
};

export default PorcelainToothIcon;

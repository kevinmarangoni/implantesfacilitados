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

// Icon component for the Prevention SVG icon
const PreventionIcon: React.FC<IIconProps> = ({ color="#FAFAFA"  }) => {
  return (
    <Container>
      <svg width="23" height="31" viewBox="0 0 23 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_201_5609)">
          <path d="M7.6185 4.99784C7.6185 2.6942 9.48592 0.826782 11.7896 0.826782C14.0932 0.826782 15.9606 2.6942 15.9606 4.99784C15.9606 7.30143 14.0932 9.16891 11.7896 9.16891C9.48592 9.16891 7.6185 7.30143 7.6185 4.99784ZM22.3694 5.07738C21.6455 4.35342 20.4717 4.35342 19.7478 5.07738L14.7293 10.0958H8.84978L3.83135 5.07738C3.10744 4.35342 1.93364 4.35342 1.20972 5.07738C0.485756 5.80135 0.485756 6.9751 1.20972 7.69907L6.6916 13.1809V28.6339C6.6916 29.6577 7.52159 30.4877 8.54541 30.4877H9.47231C10.4961 30.4877 11.3261 29.6577 11.3261 28.6339V22.1455H12.253V28.6339C12.253 29.6577 13.083 30.4877 14.1068 30.4877H15.0337C16.0575 30.4877 16.8875 29.6577 16.8875 28.6339V13.1809L22.3694 7.69901C23.0934 6.97504 23.0934 5.80135 22.3694 5.07738Z" fill={color || "black"} />
        </g>
        <defs>
          <clipPath id="clip0_201_5609">
            <rect width="22.2457" height="29.6609" fill="white" transform="translate(0.666626 0.82666)"/>
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
};

export default PreventionIcon;

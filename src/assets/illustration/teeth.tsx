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

// Icon component for the new SVG icon
const TeethIcon: React.FC<IIconProps> = ({ color }) => {
  return (
    <Container>
      <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_201_4259)">
          <path d="M32.4421 0.304474H6.48878C3.41726 0.304474 0.927368 2.79437 0.927368 5.86589V24.4039C0.927368 27.4755 3.41726 29.9654 6.48878 29.9654H32.4421C35.5136 29.9654 38.0035 27.4755 38.0035 24.4039V5.86589C38.0035 2.79437 35.5136 0.304474 32.4421 0.304474ZM10.1964 21.6232C10.1964 23.159 8.95145 24.4039 7.41569 24.4039C5.87993 24.4039 4.63498 23.159 4.63498 21.6232V17.9156C4.63498 17.4035 5.04977 16.9887 5.56188 16.9887H9.26949C9.78161 16.9887 10.1964 17.4035 10.1964 17.9156V21.6232ZM10.1964 14.208C10.1964 14.7201 9.78161 15.1349 9.26949 15.1349H5.56188C5.04977 15.1349 4.63498 14.7201 4.63498 14.208V10.5004C4.63498 8.96464 5.87993 7.7197 7.41569 7.7197C8.95145 7.7197 10.1964 8.96464 10.1964 10.5004V14.208ZM18.5385 21.1598C18.5385 22.9516 17.0862 24.4039 15.2944 24.4039C13.5025 24.4039 12.0502 22.9516 12.0502 21.1598V17.9156C12.0502 17.4035 12.465 16.9887 12.9771 16.9887H17.6116C18.1237 16.9887 18.5385 17.4035 18.5385 17.9156V21.1598ZM18.5385 14.208C18.5385 14.7201 18.1237 15.1349 17.6116 15.1349H12.9771C12.465 15.1349 12.0502 14.7201 12.0502 14.208V9.11005C12.0502 7.31823 13.5025 5.86589 15.2944 5.86589C17.0862 5.86589 18.5385 7.31823 18.5385 9.11005V14.208ZM26.8806 21.1598C26.8806 22.9516 25.4283 24.4039 23.6365 24.4039C21.8447 24.4039 20.3923 22.9516 20.3923 21.1598V17.9156C20.3923 17.4035 20.8071 16.9887 21.3192 16.9887H25.9537C26.4659 16.9887 26.8806 17.4035 26.8806 17.9156V21.1598ZM26.8806 14.208C26.8806 14.7201 26.4659 15.1349 25.9537 15.1349H21.3192C20.8071 15.1349 20.3923 14.7201 20.3923 14.208V9.11005C20.3923 7.31823 21.8447 5.86589 23.6365 5.86589C25.4283 5.86589 26.8806 7.31823 26.8806 9.11005V14.208ZM34.2959 21.6232C34.2959 23.159 33.0509 24.4039 31.5152 24.4039C29.9794 24.4039 28.7345 23.159 28.7345 21.6232V17.9156C28.7345 17.4035 29.1492 16.9887 29.6614 16.9887H33.369C33.8811 16.9887 34.2959 17.4035 34.2959 17.9156V21.6232ZM34.2959 14.208C34.2959 14.7201 33.8811 15.1349 33.369 15.1349H29.6614C29.1492 15.1349 28.7345 14.7201 28.7345 14.208V10.5004C28.7345 8.96464 29.9794 7.7197 31.5152 7.7197C33.0509 7.7197 34.2959 8.96464 34.2959 10.5004V14.208Z" fill={color ?? "#FAFAFA"} />
        </g>
        <defs>
          <clipPath id="clip0_201_4259">
            <rect width="37.0761" height="29.6609" fill="white" transform="translate(0.927246 0.304443)" />
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
};

export default TeethIcon;

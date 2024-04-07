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
const SurgeryIcon: React.FC<IIconProps> = ({ color='#FAFAFA' }) => {
  return (
    <Container>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_201_5061)">
          <path d="M18.5471 14.3413L15.6679 20.0996C15.3203 20.8006 14.3123 20.7774 13.9937 20.0649L10.6974 12.7481L8.95943 16.9018H3.50809L14.0806 27.706C14.4919 28.1289 15.1581 28.1289 15.5694 27.706L26.1477 16.9018H19.8274L18.5471 14.3413ZM27.4396 4.4987L27.3005 4.35388C24.3171 1.30668 19.4334 1.30668 16.4442 4.35388L14.8279 6.01071L13.2116 4.35967C10.2281 1.30668 5.33872 1.30668 2.35525 4.35967L2.21622 4.4987C-0.605044 7.38369 -0.7267 11.9777 1.79332 15.048H7.72549L9.80523 10.0543C10.1181 9.30701 11.1724 9.28963 11.5084 10.0312L14.88 17.5217L17.7187 11.8502C18.0605 11.1666 19.0337 11.1666 19.3755 11.8502L20.9744 15.048H27.8625C30.3825 11.9777 30.2608 7.38369 27.4396 4.4987Z" fill={color || "black"} />
        </g>
        <defs>
          <clipPath id="clip0_201_5061">
            <rect width="29.6609" height="29.6609" fill="white" transform="translate(-0.00244141 0.217773)"/>
          </clipPath>
        </defs>
      </svg>
    </Container>
  );
};

export default SurgeryIcon;

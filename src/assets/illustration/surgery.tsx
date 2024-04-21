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
<svg width="123" height="125" viewBox="0 0 123 125" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M106.232 28.7573C106.593 28.8795 106.98 28.8971 107.35 28.8083C107.72 28.7195 108.058 28.5278 108.327 28.2545L122.4 13.9524C122.669 13.6792 122.858 13.3354 122.945 12.9595C123.033 12.5835 123.015 12.1903 122.895 11.8238C122.775 11.4574 122.557 11.1321 122.265 10.8845C121.973 10.637 121.619 10.4768 121.243 10.4221L113.807 9.34221L112.745 1.78549C112.691 1.4031 112.533 1.04352 112.29 0.747002C112.046 0.450489 111.726 0.228763 111.365 0.106662C111.005 -0.0154392 110.618 -0.0330926 110.248 0.0556797C109.878 0.144452 109.54 0.336143 109.271 0.60928L95.1976 14.9114C94.9288 15.1846 94.7402 15.5285 94.6529 15.9046C94.5657 16.2806 94.5834 16.6739 94.7038 17.0404L96.8622 23.621L93.0298 27.5158C82.4011 17.485 68.3231 12.0943 53.8238 12.5032C39.3245 12.912 25.5623 19.0876 15.4972 29.7018C5.43211 40.316 -0.131736 54.5208 0.00236915 69.2609C0.136474 84.001 5.95782 98.0988 16.2143 108.522C26.4708 118.945 40.343 124.861 54.8473 124.998C69.3515 125.134 83.329 119.48 93.7734 109.251C104.218 99.0221 110.295 85.0361 110.697 70.301C111.099 55.566 105.795 41.2591 95.9245 30.4576L99.7561 26.5636L106.232 28.7573ZM106.624 68.6499C106.641 80.6143 102.605 92.2199 95.194 101.516C87.7828 110.812 77.4482 117.232 65.9277 119.696C54.4072 122.16 42.4032 120.519 31.9335 115.047C21.4637 109.576 13.1667 100.608 8.43712 89.6517C3.70753 78.6953 2.83374 66.4182 5.96264 54.8841C9.09155 43.3501 16.0324 33.2623 25.6183 26.3167C35.2043 19.3711 46.851 15.991 58.6005 16.7448C70.35 17.4985 81.486 22.34 90.1365 30.4555L81.4211 39.3132C73.8568 32.3928 63.9325 28.7477 53.7625 29.1544C43.5924 29.5612 33.9807 33.9877 26.975 41.4909C19.9693 48.994 16.1235 58.9807 16.257 69.3232C16.3904 79.6657 20.4925 89.5465 27.6894 96.8603C34.8863 104.174 44.6089 108.343 54.786 108.479C64.963 108.614 74.7899 104.706 82.173 97.5864C89.5561 90.4668 93.9118 80.6988 94.312 70.3633C94.7123 60.0279 91.1255 49.9422 84.3158 42.255L93.0318 33.3979C101.777 42.9848 106.632 55.5773 106.624 68.6499ZM54.0012 70.1207C54.1912 70.3139 54.4168 70.4672 54.6652 70.5718C54.9135 70.6764 55.1797 70.7302 55.4485 70.7302C55.7173 70.7302 55.9834 70.6764 56.2318 70.5718C56.4801 70.4672 56.7057 70.3139 56.8957 70.1207L65.4484 61.429C67.2398 63.9872 68.02 67.1362 67.6342 70.2516C67.2485 73.3669 65.725 76.2213 63.3657 78.2488C61.0065 80.2762 57.9837 81.3288 54.8967 81.1978C51.8097 81.0668 48.8838 79.7619 46.6991 77.5416C44.5143 75.3213 43.2302 72.3479 43.1013 69.2107C42.9725 66.0735 44.0082 63.0016 46.0032 60.6039C47.9983 58.2063 50.8069 56.658 53.8725 56.266C56.938 55.874 60.0366 56.6669 62.5539 58.4874L54.0012 67.1792C53.8111 67.3722 53.6602 67.6015 53.5573 67.8539C53.4543 68.1062 53.4014 68.3767 53.4014 68.6499C53.4014 68.9231 53.4543 69.1936 53.5573 69.446C53.6602 69.6983 53.8111 69.9276 54.0012 70.1207ZM65.474 55.5199C62.1725 52.9131 58.0176 51.6832 53.8551 52.0805C49.6926 52.4779 45.8357 54.4726 43.0697 57.6585C40.3036 60.8445 38.8365 64.982 38.967 69.2287C39.0975 73.4754 40.8158 77.5119 43.7721 80.5162C46.7283 83.5205 50.7002 85.2668 54.879 85.3994C59.0577 85.532 63.1291 84.041 66.264 81.23C69.399 78.419 71.3618 74.4993 71.7528 70.2692C72.1437 66.0391 70.9335 61.8165 68.3685 58.4614L81.4223 45.1955C87.46 52.0966 90.6138 61.1172 90.2144 70.3427C89.8149 79.5682 85.8937 88.2724 79.2828 94.6079C72.672 100.943 63.892 104.411 54.8063 104.276C45.7207 104.141 37.0445 100.413 30.6192 93.8829C24.194 87.3532 20.5255 78.5359 20.3923 69.3025C20.2591 60.0691 23.6717 51.1463 29.9059 44.428C36.14 37.7097 44.7049 33.7247 53.7828 33.3187C62.8607 32.9128 71.7369 36.1179 78.5276 42.2537L65.474 55.5199ZM109.271 6.4926L109.971 11.476C110.033 11.9214 110.237 12.3342 110.55 12.6523C110.863 12.9704 111.269 13.1767 111.708 13.2403L116.611 13.9524L106.326 24.4039L100.823 22.5389L98.9876 16.9428L109.271 6.4926Z" fill={color}/>
</svg>
    </Container>
  );
};

export default SurgeryIcon;

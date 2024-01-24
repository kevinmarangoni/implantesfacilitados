import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  overflow: hidden;
`;

const SlideItem = styled.div<{$index: number}>`
  padding: 10px;
  margin: 0 5px;
  transition: transform 0.5s ease-in-out;
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const ArrowButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  border: none;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div<{$isActive: boolean}>`
  width: 10px;
  height: 5px;
  border-radius: 5px;
  background: ${(props) => (props.$isActive ? '#333' : '#ccc')};
  margin: 0 5px;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
`;

interface ICarouselProps {
  children: ReactNode
  visibleItem: number
}

const Carousel:React.FC<ICarouselProps> = ({ children, visibleItem }) => {
  const itemsPerPage = visibleItem;
  const totalItems = React.Children.count(children);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(0);

  const startIdx = currentPage * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;

  const currentItems = React.Children.toArray(children).slice(startIdx, endIdx);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleDotClick = (index:number) => {
    setCurrentPage(index);
  };

  return (
    <CarouselContainer>
      <SlideContainer>
        {currentItems.map((item, index) => (
          <SlideItem key={index} $index={index - currentPage}>
            {item}
          </SlideItem>
        ))}
      </SlideContainer>
      <ArrowContainer>
        <ArrowButton onClick={handlePrevPage}>{'<'}</ArrowButton>
        <ArrowButton onClick={handleNextPage}>{'>'}</ArrowButton>
      </ArrowContainer>
      <DotsContainer>
        {Array.from({ length: totalPages }).map((_, index) => (
          <Dot
            key={index}
            $isActive={index === currentPage}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
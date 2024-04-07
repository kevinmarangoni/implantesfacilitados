import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'usehooks-ts';

const ImageGallery = ({ images, Overlay=null }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Armazena o ID do intervalo
  const { width } = useWindowSize();

  useEffect(() => {
    // Define o intervalo para troca automática das imagens
    const newIntervalId = setInterval(() => {
      setSelectedImage((prevSelectedImage) =>
        prevSelectedImage === images.length - 1 ? 0 : prevSelectedImage + 1
      );
    }, 15000);

    // Limpa o intervalo anterior quando o componente é desmontado
    return () => clearInterval(newIntervalId);
  }, [images.length]); // Executa quando o número de imagens mudar

  // Função para trocar de imagem
  const handleImageChange = (index) => {
    // Limpa o intervalo anterior
    clearInterval(intervalId);
    // Define um novo intervalo
    const newIntervalId = setInterval(() => {
      setSelectedImage((prevSelectedImage) =>
        prevSelectedImage === images.length - 1 ? 0 : prevSelectedImage + 1
      );
    }, 15000);
    // Atualiza o estado com o novo ID do intervalo
    setIntervalId(newIntervalId);

    // Define a nova imagem selecionada
    setSelectedImage(index);
  };

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <Thumbnail
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          isSelected={selectedImage === index}
          onClick={() => handleImageChange(index)} // Chamando a função handleImageChange
        />
      ))}
        {Overlay &&
            <OverlayComponent>
                <Content>
                    {Overlay}
                </Content>
            </OverlayComponent>
        }
    </GalleryContainer>
  );
};

export default ImageGallery;


const GalleryContainer = styled.div`
  position: relative;
  display: flex;
  overflow-x: hidden; /* Oculta o conteúdo que ultrapassa os limites do contêiner */
  height: 100%; /* Altura do contêiner pai */
`;

const Thumbnail = styled.img`
  width: ${(props) => (props.isSelected ? '80%' : '5%')}; /* Largura das miniaturas */
  height: 100%; /* Altura das miniaturas */
  object-fit: cover; /* Para garantir que a imagem preencha o espaço disponível */
  cursor: pointer;
  border: none;
  flex-shrink: 0; /* Impede que as miniaturas sejam reduzidas além do tamanho especificado */
  transition: width 0.3s ease; /* Adiciona uma transição suave para a largura */

  &:hover {
    opacity: 0.7;
  }
`;

const OverlayComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
`

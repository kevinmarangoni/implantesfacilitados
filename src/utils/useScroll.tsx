import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    // Adiciona um listener de evento de rolagem quando o componente monta
    window.addEventListener('scroll', handleScroll);

    // Remove o listener de evento de rolagem quando o componente desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // O segundo argumento [] garante que o efeito seja executado apenas uma vez durante a montagem do componente

  return scrollPosition;
};

export default useScrollPosition;
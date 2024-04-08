import styled from 'styled-components';
import { TranslationObject } from '@/translation';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';
import Button from '../Button';
import { useWindowSize } from 'usehooks-ts';
import ImageGallery from '../Carousel';

const Hero: React.FC<{ id: string; t: TranslationObject }> = ({ id, t }) => {
  const { width } = useWindowSize();

  const images = [
    `https://iili.io/JOgDXa4.jpg`,
    `https://iili.io/JOgD0ZX.jpg`,
    `https://iili.io/JOgDWFf.jpg`,
    `https://iili.io/JOgDGGs.jpg`,
    `https://iili.io/JOgDEnn.jpg`
  ];

  return (
    <Container>
      <Content>
            <RightSection>
                <LogoSection>
                  <Logo src={logo} alt={"logo"} />
                </LogoSection>
              <TitleSection>
                <h1>{t.hero.title}</h1>
                <p>{t.hero.description.part1}{" "}<span>{t.hero.description.part2}</span></p>
              </TitleSection>
              <LeftSection>
                <ImageGallery images={images}/>
              </LeftSection>
              <ButtonSection>
                <Button>{t.hero.button}</Button>
              </ButtonSection>
            </RightSection>
      </Content>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  height: fit-content;
  overflow: hidden;
  max-width: 1000px;
  padding: 16px;
  margin-top: 36px;

  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    width: 100%;
    padding: 0px;
  }
`;

const Content = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5%;

  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    flex-direction: column;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftSection = styled.div`
  border-radius: 20px;
  overflow: hidden;
  height: 400px;
  margin-bottom: 24px;
  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    height: 200px;
  }
`;

const LogoSection = styled.div`
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    justify-content: center;
  }
`;

const Logo = styled(Image)`
  height: fit-content;
  width: fit-content;
  object-fit: contain;
`;

const TitleSection = styled.div`
  margin-bottom: 24px;
  text-align: center;
  h1 {
    font-size: ${({ theme }) => theme.sizes.font.title.xl};
    font-weight: ${({ theme }) => theme.sizes.weights.bolder};
    margin-bottom: 8px;

    @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
      font-size: ${({ theme }) => theme.sizes.font.title.md};
    }
  }

  p {
    font-size: ${({ theme }) => theme.sizes.font.paragraph.lg};
    font-weight: ${({ theme }) => theme.sizes.weights.normal};

    @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
      font-size: ${({ theme }) => theme.sizes.font.paragraph.md};
    }
  }

  span {
    font-size: ${({ theme }) => theme.sizes.font.paragraph.lg};
    font-weight: ${({ theme }) => theme.sizes.weights.bolder};

    @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
      font-size: ${({ theme }) => theme.sizes.font.paragraph.md};
    }
  }

  @media (${({ theme }) => theme.sizes.breakpoints.smartphone}) {
    text-align: center;
  }
`;

const ButtonSection = styled.div`
  text-align: right;
`;
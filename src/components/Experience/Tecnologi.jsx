import React from "react";
import styled from "styled-components";
import { getImageUrl } from "../../utils";
import styles from "./Experience.module.css";

const SliderContainer = styled.div`
  width: 75vw;
  height: auto;
  margin: auto;
  overflow: hidden;
`;

const SlideTrack = styled.div`
  display: flex;
  animation: scroll 40s linear infinite;
  -webkit-animation: scroll 40s linear infinite;
  width: calc(200px * 14);

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Slide = styled.div`
  width: 200px;
`;

const SlideImage = styled.img`
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: contain;
  mix-blend-mode: color-burn;
`;

const SectionTitle = styled.h2`
  text-align: center;
`;

const Tecnologi = () => {
  const images = [
    "skills/html.png",
    "skills/css.png",
    "skills/js.png",
    "skills/typescript.png",
    "skills/vue.png",
    "skills/react.png",
    "skills/figma.png",
    "skills/adobe.png",
    "skills/html.png",
    "skills/css.png",
    "skills/js.png",
    "skills/typescript.png",
    "skills/vue.png",
    "skills/react.png",
    "skills/figma.png",
    "skills/adobe.png",
  ];

  return (
    <>
      <SectionTitle>Tecnologías</SectionTitle>
      <SliderContainer>
        <SlideTrack>
          {images.concat(images).map((src, index) => (
            <Slide key={index}>
              <SlideImage src={getImageUrl(src)} alt="" />
            </Slide>
          ))}
        </SlideTrack>
      </SliderContainer>
    </>
  );
};

export default Tecnologi;

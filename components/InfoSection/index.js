import React, { useState } from "react";
import { Button, Button1, Button2 } from "../ButtomElement";
import {
  InfoContainer,
  Column2,
  ImgWrap,
  InfoWrapper,
  InfoRow,
  Column1,
  BtnWrap,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Img,
  BtnWrap1,
  BtnWrap2,
} from "./InfoElements";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Accordion } from "react-bootstrap";

import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: ${({ view }) => view};
  flex-direction: column;
  align-items: left;
  justify-content: center;
  position: relative;
  height: 39vh;
  background: #000;
`;

const Container = styled.div`
  position: absolute;
  top: -5%;
`;

const Wrap = styled.div`
  background: #010606;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  h1 {
    padding: 0.5rem;
    font-size: 1rem;
  }
  span {
    margin-right: 0.5rem;
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #00ffb9;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
  p {
    padding: 0.5rem;
    font-size: 0.7rem;
  }
`;

export const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  headline,
  linkS,
  linkR,
  description,
  desc,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  to,
  linkC,
  data,
  view,
}) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightBg={lightBg}>{headline}</Heading>
                <Subtitle lightBg={lightBg}>{description}</Subtitle>
                <Subtitle lightBg={lightBg}>{desc}</Subtitle>
                <IconContext.Provider
                  value={{ color: "#00FFB9", size: "16px" }}
                >
                  <AccordionSection view={view}>
                    <Container>
                      {data.map((item, index) => {
                        return (
                          <>
                            <Wrap onClick={() => toggle(index)} key={index}>
                              <h1>{item.question}</h1>
                              <span>
                                {clicked === index ? <FiMinus /> : <FiPlus />}
                              </span>
                            </Wrap>
                            {clicked === index ? (
                              <Dropdown>
                                <p>{item.ans}</p>
                              </Dropdown>
                            ) : null}
                          </>
                        );
                      })}
                    </Container>
                  </AccordionSection>
                </IconContext.Provider>
                <BtnWrap linkS={linkS}>
                  <Button
                    to={to}
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={100}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
                <BtnWrap2 linkC={linkC}>
                  <Button2
                    href="https://vq11ir53vlc.typeform.com/to/hevRV3g6"
                    smooth="true"
                    duration={500}
                    exact="true"
                    offset={100}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    target="_blank"
                  >
                    {buttonLabel}
                  </Button2>
                </BtnWrap2>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <LazyLoadImage src={img} alt={alt} width="100%" effect="blur" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

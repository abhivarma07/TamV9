import styled from "styled-components";

export const InfoContainer = styled.div`
  background: "transparent";

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-column: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 760px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 20px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-tranform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  color: ${({ lightBg }) => (lightBg ? "#000000" : "#fff")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 470px;
  margin-bottom: 33px;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  justify-content: center;
  color: ${({ lightBg }) => (lightBg ? "#010606" : "#fff")};

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  display: ${({ linkS }) => (linkS ? "flex" : "none")};
`;

export const BtnWrap1 = styled.div`
  display: flex;
  justify-content: flex-start;

  display: ${({ linkR }) => (linkR ? "flex" : "none")};
`;

export const BtnWrap2 = styled.div`
  display: flex;
  justify-content: flex-start;

  display: ${({ linkC }) => (linkC ? "flex" : "none")};
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
  overflow: hidden;
  border-radius: 15px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px;
`;

import styled from "styled-components";

const BrandContainer = styled.div`
  position: fixed;
  top: 56px;
  z-index: -1;
`;

const BrandText = styled.h1`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  line-height: 148.8px;
  letter-spacing: 0.18em;
  background: linear-gradient(
    #e60000 0.07%,
    #ffcc00 30.94%,
    #007f00 65.61%,
    #0000cc 99.94%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  writing-mode: vertical-rl;

  @media (max-width: 1160px) {
    background: linear-gradient(
      rgba(230, 0, 0, 0.12) 0.07%,
      rgba(255, 204, 0, 0.12) 30.94%,
      rgba(0, 127, 0, 0.12) 65.61%,
      rgba(0, 0, 204, 0.12) 99.94%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

function Brand() {
  return (
    <BrandContainer>
      <BrandText>TAIWAN</BrandText>
    </BrandContainer>
  );
}

export default Brand;

import styled from "styled-components";

const DividerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

const DividerLine = styled.div`
  flex-grow: 1;
  border-top: 1px solid #b388ff;
`;

const DividerText = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  padding: 8px 13px;
  color: #b388ff;
  border: 1px solid #b388ff;
  border-radius: 16px;
`;

export default function Divider() {
  return (
    <DividerContainer>
      <DividerLine />
      <DividerText>搜尋結果</DividerText>
      <DividerLine />
    </DividerContainer>
  );
}

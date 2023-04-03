import styled from "styled-components";

const SearchingContainer = styled.div`
  width: 100%;
  max-width: 1004px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 16px;
  gap: 42px;
`;

const SearchingTitle = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 46px;
  color: #000000;
`;

function Searching() {
  return (
    <SearchingContainer>
      <SearchingTitle>人口數、戶數按戶別及性別統計</SearchingTitle>
    </SearchingContainer>
  );
}

export default Searching;

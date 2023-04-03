import styled from "styled-components";
import SearchingGroup from "./SearchingGroup";

const SearchingContainer = styled.div`
  width: 100%;
  max-width: 1004px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 8px;
  gap: 42px;

  @media (max-width: 1160px) {
    padding: 8px 8px 0 8px;
  }
`;

const SearchingTitle = styled.h1`
  font-weight: 400;
  font-size: 32px;
  line-height: 46px;
  color: #000000;

  @media (max-width: 1160px) {
    font-size: 25px;
    line-height: 36px;
  }
`;

function Searching() {
  return (
    <SearchingContainer>
      <SearchingTitle>人口數、戶數按戶別及性別統計</SearchingTitle>
      <SearchingGroup />
    </SearchingContainer>
  );
}

export default Searching;

import { FormEvent } from "react";
import styled from "styled-components";
import SearchingInput from "./SearchingInput";
import YearInput from "./YearInput";

const SearchingGroupContainer = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 14px;
  gap: 12px;

  @media (max-width: 1160px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SubmitButton = styled.button<{ $isEnable: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  width: 83px;
  height: 36.5px;
  background: ${(props) =>
    props.$isEnable ? "#651FFF" : "rgba(0, 0, 0, 0.12)"};
  border-radius: 4px;
  border: none;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => (props.$isEnable ? "#FFFFFF" : "rgba(0, 0, 0, 0.26)")};
  cursor: ${(props) => (props.$isEnable ? "pointer" : "not-allowed")};

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

export default function SearchingGroup() {
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SearchingGroupContainer>
      <Form onSubmit={submitHandler}>
        <YearInput label="年份" width="73px" />
        <SearchingInput
          label="縣/市"
          width="165px"
          placeholder="請選擇 縣/市"
          defaultSuggestions={[]}
        />
        <SearchingInput
          label="區"
          width="165px"
          placeholder="請先選擇 縣/市"
          defaultSuggestions={[]}
        />
        <SubmitButton $isEnable={false}>Submit</SubmitButton>
      </Form>
    </SearchingGroupContainer>
  );
}

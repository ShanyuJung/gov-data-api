import { useState } from "react";
import styled from "styled-components";

const SearchingInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 26px;
  @media (max-width: 1160px) {
    width: 100%;
  }
`;

const SearchingLabel = styled.label`
  position: absolute;
  top: -10px;
  left: 15px;
  background-color: #fff;
  padding: 0 4px;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
`;

const Input = styled.input<{ width: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px 26px 10px 12px;
  background: #ffffff;
  border: 1px solid #b6b6b6;
  border-radius: 4px;
  width: ${(props) => props.width};
  height: 40px;

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

const SvgWrapper = styled.div`
  margin-left: -26px;
`;

const DropDownMenu = styled.ul``;

const DropDownItem = styled.li``;

export default function SearchingInput({
  label,
  width,
  placeholder,
}: {
  label: string;
  width: string;
  placeholder: string;
}) {
  //   const [inputValue, setInputValue] = useState("");
  //   const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SearchingInputContainer>
      <SearchingLabel>{label}</SearchingLabel>
      <Input
        width={width}
        onFocus={() => {
          setIsFocused(true);
        }}
        placeholder={placeholder}
      />
      <SvgWrapper>
        <svg
          width="12"
          height="6"
          viewBox="0 0 12 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6.5 6L0.5 0H12.5L6.5 6Z" fill="#797979" />
        </svg>
      </SvgWrapper>
      {isFocused && (
        <DropDownMenu>
          <DropDownItem>1</DropDownItem>
        </DropDownMenu>
      )}
    </SearchingInputContainer>
  );
}

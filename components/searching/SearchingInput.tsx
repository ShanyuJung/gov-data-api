import { useOnClickOutside } from "@/utils/hooks";
import { useEffect, useRef, useState } from "react";
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

const SearchingLabel = styled.label<{ $isFocus: boolean }>`
  position: absolute;
  top: -10px;
  left: 15px;
  background-color: #fff;
  padding: 0 4px;
  color: ${(props) => (props.$isFocus ? "#651fff" : "#000000")};
  font-weight: ${(props) => (props.$isFocus ? "500" : "300")};
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
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  ::placeholder {
    color: #b6b6b6;
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #b6b6b6;
  }

  ::-ms-input-placeholder {
    color: #b6b6b6;
  }

  &:hover {
    border: 1px solid #272727;
  }

  &:focus {
    outline: none;
    border: 2px solid #651fff;
  }

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

const SvgWrapper = styled.div`
  margin-left: -26px;
`;

const DropDownMenu = styled.ul`
  position: absolute;
  list-style-type: none;
  top: 40px;
  z-index: 10;
  width: 165px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fffdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 12px 0;
  max-height: 258px;

  @media (max-width: 1160px) {
    width: 100%;
  }
`;

const DropDownItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  height: 23px;
  padding-left: 16px;
  width: 100%;
`;

export default function SearchingInput({
  label,
  width,
  placeholder,
  defaultSuggestions,
}: {
  label: string;
  width: string;
  placeholder: string;
  defaultSuggestions: string[];
}) {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>(defaultSuggestions);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsFocused(false));

  useEffect(() => {
    const filteredSuggestions = defaultSuggestions.filter((item) =>
      item.includes(inputValue)
    );
    setSuggestions(filteredSuggestions);
  }, [defaultSuggestions, inputValue]);

  return (
    <SearchingInputContainer ref={ref}>
      <SearchingLabel $isFocus={isFocused}>{label}</SearchingLabel>
      <Input
        type="text"
        width={width}
        value={inputValue}
        placeholder={placeholder}
        onFocus={() => {
          setIsFocused(true);
        }}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
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
          {suggestions.map((item) => {
            return <DropDownItem>{item}</DropDownItem>;
          })}
        </DropDownMenu>
      )}
    </SearchingInputContainer>
  );
}

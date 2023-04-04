import { useOnClickOutside } from "@/utils/hooks";
import { useRef, useState } from "react";
import styled from "styled-components";

const SearchingInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 26px;
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
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:hover {
    border: 1px solid #272727;
  }

  &:focus {
    outline: none;
    border: 2px solid #651fff;
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
  width: 73px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #fffdfd;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 12px 0;
  max-height: 258px;
  overflow-y: auto;
`;

const DropDownItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: left;
  height: 23px;
  padding-left: 16px;
  width: 100%;
  cursor: pointer;
`;

const SUGGESTION = [106, 107, 108, 109, 110];

export default function YearInput({
  label,
  width,
}: {
  label: string;
  width: string;
}) {
  const [inputValue, setInputValue] = useState<number>(110);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsFocused(false));

  return (
    <SearchingInputContainer ref={ref}>
      <SearchingLabel $isFocus={isFocused}>{label}</SearchingLabel>
      <Input
        type="number"
        width={width}
        value={inputValue}
        onFocus={() => {
          setIsFocused(true);
        }}
        onChange={(e) => {
          setInputValue(Number(e.target.value));
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
          {SUGGESTION.map((item) => {
            return (
              <DropDownItem
                onClick={() => {
                  setInputValue(item);
                  setIsFocused(false);
                }}
              >
                {item}
              </DropDownItem>
            );
          })}
        </DropDownMenu>
      )}
    </SearchingInputContainer>
  );
}

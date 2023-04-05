import { COUNTIES, DISTRICTS_OBJ } from "@/assets/DUMMY_DATA";
import { AppDispatch, RootState } from "@/store";
import { chartDataActions } from "@/store/chartDataSlice";
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const chartData = useSelector((state: RootState) => state.chartData);
  const { county, district } = chartData;
  const [districtSuggestions, setDistrictSuggestions] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const selectCountyHandler = (selectedCounty: string) => {
    dispatch(chartDataActions.selectCounty({ county: selectedCounty }));
  };

  const cleanCountyHandler = () => {
    dispatch(chartDataActions.cleanCounty());
  };

  const selectDistrictHandler = (selectedDistrict: string) => {
    dispatch(chartDataActions.selectDistrict({ district: selectedDistrict }));
  };

  const cleanDistrictHandler = () => {
    dispatch(chartDataActions.cleanDistrict());
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    const newSuggestions = DISTRICTS_OBJ[`${county}`]?.districts || [];
    if (newSuggestions.length === 0) return;
    setDistrictSuggestions([...newSuggestions]);
  }, [county]);

  return (
    <SearchingGroupContainer>
      <Form onSubmit={submitHandler}>
        <YearInput label="年份" width="73px" />
        <SearchingInput
          label="縣/市"
          width="165px"
          placeholder="請選擇 縣/市"
          defaultSuggestions={COUNTIES}
          inputValue={county}
          setValueHandler={selectCountyHandler}
          cleanValueHandler={cleanCountyHandler}
        />
        <SearchingInput
          label="區"
          width="165px"
          placeholder="請先選擇 縣/市"
          defaultSuggestions={districtSuggestions}
          inputValue={district}
          setValueHandler={selectDistrictHandler}
          cleanValueHandler={cleanDistrictHandler}
        />
        <SubmitButton $isEnable={false}>Submit</SubmitButton>
      </Form>
    </SearchingGroupContainer>
  );
}

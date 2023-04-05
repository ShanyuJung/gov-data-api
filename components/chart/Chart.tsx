import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 42px;
  gap: 40px;
`;

const ChartTitle = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 46px;

  @media (max-width: 1160px) {
    font-size: 25px;
    line-height: 36px;
  }
`;

const ErrorMessage = styled.h1`
  color: red;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BAR_CHART_OPTIONS = {
  title: "人口數統計",
  categories: ["共同生活", "獨立生活"],
};

const PIE_CHART_OPTIONS = {
  title: "戶數統計",
};

export default function Chart() {
  const router = useRouter();
  const params = router.query.data;
  const chartData = useSelector((state: RootState) => state.chartData);
  const { errorMessage, items } = chartData;
  const [barDataMale, setBarDataMale] = useState<number[]>([]);
  const [barDataFemale, setBarDataFemale] = useState<number[]>([]);
  const [pieData, setPieData] = useState<{ category: string; total: number }[]>(
    []
  );

  useEffect(() => {
    if (typeof params === "string" || typeof params === "undefined") return;
    if (!router.isReady || !params[0] || !params[1] || !params[2]) return;

    const initialValue = 0;
    const sumOrdinaryMale = items
      .map((item) => Number(item.household_ordinary_m))
      .reduce((acc, cur) => {
        return acc + cur;
      }, initialValue);
    const sumSingleMale = items
      .map((item) => Number(item.household_single_m))
      .reduce((acc, cur) => {
        return acc + cur;
      }, initialValue);

    const sumOrdinaryFemale = items
      .map((item) => Number(item.household_ordinary_f))
      .reduce((acc, cur) => {
        return acc + cur;
      }, initialValue);
    const sumSingleFemale = items
      .map((item) => Number(item.household_single_f))
      .reduce((acc, cur) => {
        return acc + cur;
      }, initialValue);

    setBarDataMale([sumOrdinaryMale, sumSingleMale]);
    setBarDataFemale([sumOrdinaryFemale, sumSingleFemale]);

    const sumOrdinary = items
      .map((item) => Number(item.household_ordinary_total))
      .reduce((acc, cur) => {
        return acc + cur;
      }, initialValue);
    const sumSingle = items
      .map((item) => Number(item.household_single_total))
      .reduce((acc, cur) => {
        return acc + cur;
      }, initialValue);
    setPieData([
      { category: "共同生活", total: sumOrdinary },
      { category: "獨立生活", total: sumSingle },
    ]);
  }, [router.isReady, params]);

  if (typeof params === "string" || typeof params === "undefined") return null;

  if (!router.isReady || !params[0] || !params[1] || !params[2]) return null;

  return (
    <ChartContainer>
      <ChartTitle>{`${params[0]}年 ${params[1]} ${params[2]}`}</ChartTitle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {!errorMessage && (
        <ChartWrapper>
          <BarChart
            title={BAR_CHART_OPTIONS.title}
            categories={BAR_CHART_OPTIONS.categories}
            maleData={barDataMale}
            femaleData={barDataFemale}
          />
          <PieChart title={PIE_CHART_OPTIONS.title} categories={pieData} />
        </ChartWrapper>
      )}
    </ChartContainer>
  );
}

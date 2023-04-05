import { RootState } from "@/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import styled from "styled-components";

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

export default function Chart() {
  const router = useRouter();
  const params = router.query.data;
  const chartData = useSelector((state: RootState) => state.chartData);
  const { errorMessage } = chartData;

  if (typeof params === "string" || typeof params === "undefined") return null;

  if (!router.isReady || !params[0] || !params[1] || !params[2]) return null;

  return (
    <ChartContainer>
      <ChartTitle>{`${params[0]}年 ${params[1]} ${params[2]}`}</ChartTitle>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </ChartContainer>
  );
}

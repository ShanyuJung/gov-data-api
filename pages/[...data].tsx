import Brand from "@/components/brand/Brand";
import Chart from "@/components/chart/Chart";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import Searching from "@/components/searching/Searching";
import { AppDispatch, RootState } from "@/store";
import { fetchDataHandler } from "@/store/chartDataActions";
import { chartDataActions } from "@/store/chartDataSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Container, Main, Wrapper } from ".";

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export default function SearchingHome() {
  const dispatch = useDispatch<AppDispatch>();
  const chartData = useSelector((state: RootState) => state.chartData);
  const { isFetching } = chartData;
  const router = useRouter();
  const params = router.query.data;

  useEffect(() => {
    if (!router.isReady) return;

    if (typeof params === "string" || typeof params === "undefined") return;

    if (typeof params[0] !== "string") return;
    dispatch(chartDataActions.selectYear({ year: params[0] }));

    if (typeof params[1] !== "string") return;
    dispatch(chartDataActions.selectCounty({ county: params[1] }));

    if (typeof params[2] !== "string") return;
    dispatch(chartDataActions.selectDistrict({ district: params[2] }));
  }, [router.isReady]);

  useEffect(() => {
    if (!router.isReady) return;
    if (typeof params === "string" || typeof params === "undefined") return;
    if (
      typeof params[0] !== "string" ||
      typeof params[1] !== "string" ||
      typeof params[2] !== "string"
    )
      return;

    dispatch(fetchDataHandler(params[0], params[1], params[2]));
  }, [router.isReady, params]);

  return (
    <Main>
      <Brand />
      <Container>
        <Wrapper>
          <Searching />
          {!isFetching && <Chart />}
          {isFetching && (
            <SpinnerWrapper>
              <LoadingSpinner />
            </SpinnerWrapper>
          )}
        </Wrapper>
      </Container>
    </Main>
  );
}

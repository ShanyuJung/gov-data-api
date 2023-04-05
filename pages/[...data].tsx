import Brand from "@/components/brand/Brand";
import Chart from "@/components/chart/Chart";
import Searching from "@/components/searching/Searching";
import { AppDispatch } from "@/store";
import { fetchDataHandler } from "@/store/chartDataActions";
import { chartDataActions } from "@/store/chartDataSlice";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Main, Wrapper } from ".";

export default function SearchingHome() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
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
          <Chart />
        </Wrapper>
      </Container>
    </Main>
  );
}

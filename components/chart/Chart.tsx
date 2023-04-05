import { useRouter } from "next/router";
import styled from "styled-components";

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 42px;
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

export default function Chart() {
  const router = useRouter();
  const params = router.query.data as string[];

  if (!router.isReady) return null;

  return (
    <ChartContainer>
      {!!params[0] && !!params[1] && !!params[2] && (
        <ChartTitle>{`${params[0]}年 ${params[1]} ${params[2]}`}</ChartTitle>
      )}
    </ChartContainer>
  );
}

import Brand from "@/components/brand/Brand";
import Searching from "@/components/searching/Searching";
import Head from "next/head";
import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  padding-top: 8px;
  padding-left: 149px;

  @media (max-width: 1160px) {
    padding-left: 0px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>政府資料開放平台資料查詢</title>
        <meta name="description" content="政府資料開放平台資料查詢" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Brand />
        <Container>
          <Wrapper>
            <Searching />
          </Wrapper>
        </Container>
      </Main>
    </>
  );
}

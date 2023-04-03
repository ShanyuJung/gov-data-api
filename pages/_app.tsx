import Header from "@/components/header/Header";
import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC', sans-serif;
  }
  
  html,body {
    min-width: 320px;
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

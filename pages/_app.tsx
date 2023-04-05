import Header from "@/components/header/Header";
import store from "@/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans TC', sans-serif;
    
    &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track-piece {
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 7px;
    background-color: #b6b6b6;
  }
  }
  
  html,body {
    min-width: 320px;
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

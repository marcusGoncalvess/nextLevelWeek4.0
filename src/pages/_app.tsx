import GlobalStyle from "../styles/global";

import AppProvider from "../contexts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;

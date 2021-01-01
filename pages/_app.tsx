import { AppProps }                         from 'next/app';
import Head                                 from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import reset                                from 'styled-reset';

import { theme as ThemeConfig } from '@styles/theme';

const [resetStyles] = reset;

const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height : 100%;
    width  : 100%;
  }

  ${resetStyles}

  a, div, html, h1, h2, h3, input, p, span {
    font-family: 'Ubuntu', sans-serif;
  }
`;

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet" type="text/css" />
      </Head>
      <ThemeProvider theme={ThemeConfig}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;

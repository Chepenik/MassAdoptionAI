import Head from 'next/head';
import '../styles/globals.css';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>MassAdoption</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ColorSchemeProvider>
          <Component {...pageProps} />
        </ColorSchemeProvider>
      </MantineProvider>
    </>
  );
}
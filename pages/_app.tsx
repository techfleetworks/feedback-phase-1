import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import StrapiApolloProvider from '../graphql/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrapiApolloProvider>
      <Component {...pageProps} />
    </StrapiApolloProvider>
  );
}

export default MyApp;

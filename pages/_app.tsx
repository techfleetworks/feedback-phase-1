import '../styles/globals.css';
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

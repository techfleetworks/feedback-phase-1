import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

// const GRAPHQL_ENDPOINT = 'http://localhost:1337/graphql';
const GRAPHQL_ENDPOINT = 'https://tranquil-journey-42623.herokuapp.com/graphql';

// Creates Apollo client with reference to client
const StrapiApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default StrapiApolloProvider;

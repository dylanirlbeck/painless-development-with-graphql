import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/react-hooks";
import { client } from "../../lib/graphql/config";

const withGraphQL = BaseComponent => props => {
  return (
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <BaseComponent {...props} />
      </ApolloProviderHooks>
    </ApolloProvider>
  );
};

export default withGraphQL;

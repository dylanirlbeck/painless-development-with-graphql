import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { Container } from "../../components/ui/Common";
import withGraphQL from "../../components/hocs/withGraphQL";

const meQueryTemplate = gql`
  query {
    me {
      firstName
    }
  }
`;

const MountingExample = () => {
  const all = useQuery(meQueryTemplate);

  console.log(all);

  return (
    <Container>
      <h1>Query on Mount</h1>
    </Container>
  );
};

export default withGraphQL(MountingExample);

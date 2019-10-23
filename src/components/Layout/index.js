import React from "react";
import { Container } from "semantic-ui-react";
import Navigation from "../Navigation";
/**
 * Base layout container
 * for now it's an wrapper over inital container
 * but can be utilized for future purposes
 */
export default props => {
  return (
    <Container {...props}>
      <Navigation />
      {props.children}
    </Container>
  );
};

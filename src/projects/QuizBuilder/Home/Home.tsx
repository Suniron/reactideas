import React from "react";
import { RouteComponentProps } from "react-router";
import { Container, Col } from "react-bootstrap";
export const Home = ({ match }: RouteComponentProps) => {
  return (
    <Container>
      <Col className="m-2">
        <div className="p-2">
          <h1>Outil de création de quiz</h1>
        </div>
        <div className="p-2">
          <h2>
            Comment l'utiliser ?
            <span role="img" aria-label="emoji">
              🤔
            </span>
          </h2>
          <p>
            Pour utiliser cet outil, des quiz peuvent être créés depuis la
            partie
            <b>"Création"</b> et peuvent être testés dans <b>"Consulation".</b>
          </p>
        </div>
      </Col>
    </Container>
  );
};

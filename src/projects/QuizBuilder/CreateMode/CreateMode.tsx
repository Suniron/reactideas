import React from "react";
import { Container, Row } from "react-bootstrap";

const Infos = () => {
  return <p>Infos</p>;
};

const AddAnswersArea = () => {
  return <p>Zone ajout questions</p>;
};

const Buttons = () => {
  return <p>Boutons</p>;
};

const CreateQuiz = () => {
  return (
    <Container>
      <Row>
        <Infos />
      </Row>
      <Row>
        <AddAnswersArea />
      </Row>
      <Row>
        <Buttons />
      </Row>
    </Container>
  );
};

export const CreateMode = () => {
  return <CreateQuiz />;
};

import React from "react";
import { ShowQuizProps } from "./types";
import { Container, Row, ProgressBar } from "react-bootstrap";

const ShowQuiz = (props: ShowQuizProps) => {
  return (
    <Container>
      <Row>
        <h1>{props.quiz.name}</h1>
      </Row>
      <Row>
        <p>{props.quiz.description}</p>
      </Row>
      <Row>
        <ProgressBar animated now={45} />
      </Row>
      <Row>{/** TODO: ANSWER MODE*/}</Row>
    </Container>
  );
};

export default ShowQuiz;

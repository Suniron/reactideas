import React from "react";
import { Card, CardColumns, Container, Row, Button } from "react-bootstrap";
import { QuizCardProps, QuizCardsProps } from "./types";

// Data needed to test::
import { quizTest } from "./../quizData/quizDataTest";
import { Quiz } from "../quizData/types";
import ShowQuiz from "./ShowQuiz";
import { useOvermind } from "store";
import { RouteComponentProps } from "react-router";

const QuizCard = (props: QuizCardProps) => {
  // -- HOOKS --
  const { actions } = useOvermind();

  // -- FUNCTIONS --
  const onClickHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    actions.setCurrentQuiz(props.quiz);
  };

  // -- RENDER --
  return (
    <Card>
      {props.quiz.illustrationPath ? (
        <Card.Img variant="top" src={props.quiz.illustrationPath} />
      ) : null}
      <Card.Body>
        <Card.Title>{props.quiz.name}</Card.Title>
        <Card.Text>{props.quiz.description}</Card.Text>
        <Row className="justify-content-md-center">
          <Button onClick={onClickHandle}>Démarrer celui-ci !</Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

const QuizCards = (props: QuizCardsProps) => {
  return (
    <CardColumns>
      {quizTest.map(quiz => (
        <QuizCard
          key={quiz.name}
          quiz={quiz}
          handleChoose={props.handleChoose}
        />
      ))}
    </CardColumns>
  );
};

export const ShowMode = ({ match }: RouteComponentProps) => {
  // -- HOOKS --
  const { state, actions } = useOvermind();

  // -- FUNCTIONS --
  const onChooseQuiz = (choosedQuiz: Quiz) => {
    actions.setCurrentQuiz(choosedQuiz);
  };

  console.log(match);
  // -- RENDER --
  return state.currentQuiz ? (
    <ShowQuiz quiz={state.currentQuiz} />
  ) : (
    <Container>
      <Row>
        <h1>Choisissez un quiz:</h1>
      </Row>

      <Row>
        <QuizCards handleChoose={onChooseQuiz} />
      </Row>
    </Container>
  );
};

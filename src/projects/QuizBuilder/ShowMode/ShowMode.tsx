import React, { useState } from "react";
import { Card, CardColumns, Container, Row, Button } from "react-bootstrap";
import { QuizCardProps, QuizCardsProps } from "./types";

// Data needed to test::
import { quizTest } from "./../quizData/quizDataTest";
import { Quiz } from "../quizData/types";
import ShowQuiz from "./ShowQuiz";
import { useOvermind } from "store";

const QuizCard = (props: QuizCardProps) => {
  // -- HOOKS --
  const { actions } = useOvermind();

  // -- FUNCTIONS --
  const onClickHandle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    actions.changeIsInQuiz(true);
    props.handleChoose(props.quiz);
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

export const ShowMode = () => {
  // -- HOOKS --
  const [selectedQuiz, setSelectedQuiz] = useState<null | Quiz>(null);

  // -- FUNCTIONS --
  const onChooseQuiz = (choosedQuiz: Quiz) => {
    setSelectedQuiz(choosedQuiz);
  };

  // -- RENDER --
  if (selectedQuiz) {
    return <ShowQuiz quiz={selectedQuiz} />;
  } else {
    return (
      <Container>
        <Row>
          <h1>Choisissez un quiz:</h1>
        </Row>

        <Row>
          <QuizCards handleChoose={onChooseQuiz} />
        </Row>
      </Container>
    );
  }
};

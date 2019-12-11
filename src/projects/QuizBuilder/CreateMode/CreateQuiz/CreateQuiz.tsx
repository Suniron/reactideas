import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Quiz } from "projects/QuizBuilder/quizData/types";
import { InfosProps } from "./types";
import MakeQuizArea from "./MakeQuizArea";

const Infos = (props: InfosProps) => {
  if (!props.currentQuiz) {
    return <p>Il faut ajouter une 1ere question au quiz</p>;
  } else {
    return (
      <p>
        Le questionnaire contient {props.currentQuiz.questions.length} questions
      </p>
    );
  }
};

const Buttons = () => {
  return <p>Boutons</p>;
};

const CreateQuiz = () => {
  // -- HOOKS --
  const [createdQuiz, setCreatedQuiz] = useState<null | Quiz>(null);

  // -- RENDER --
  return (
    <Container>
      <Row>
        <Infos currentQuiz={createdQuiz} />
      </Row>
      <Row>
        <MakeQuizArea />
      </Row>
      <Row>
        <Buttons />
      </Row>
    </Container>
  );
};

export default CreateQuiz;

import React, { useState } from "react";
import { ShowQuizProps } from "./types";
import {
  Container,
  Row,
  ProgressBar,
  Button,
  CardColumns,
  Col
} from "react-bootstrap";
import { useOvermind } from "store";
import { QuestionCard } from "./QuestionCard";

/**
 * TODO:
 * - Show score when all questions are submitted (and author info? :-) )
 * - Add marging & padding (questions, progressbar, ...)
 */

const ShowQuiz = (props: ShowQuizProps) => {
  // -- HOOKS --
  const { actions } = useOvermind();
  const [quizProgress, setQuizProgress] = useState<number>(0);
  const [rightAnswers, setRightAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  // -- FUNCTIONS --
  const updateQuizProgress = (totalAnswers: number) => {
    setQuizProgress(totalAnswers);
  };

  const handleAnswered = (resultisCorrectAnswer: boolean) => {
    if (resultisCorrectAnswer) {
      const newRightAnswers = rightAnswers + 1;
      updateQuizProgress(newRightAnswers + wrongAnswers);
      setRightAnswers(newRightAnswers);
    } else {
      const newWrongAnswers = wrongAnswers + 1;
      updateQuizProgress(rightAnswers + newWrongAnswers);
      setWrongAnswers(newWrongAnswers);
    }
  };

  // -- RENDER --
  return (
    <Container>
      <Row>
        <Col className="justify-content-center">
          <Row>
            <h1>{props.quiz.name}</h1>
          </Row>
          <Row>
            <p>{props.quiz.description}</p>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-end p-3">
            <Button
              onClick={() => {
                actions.setCurrentQuiz(null);
              }}
              variant="dark"
            >
              Quitter le quiz
            </Button>
          </Row>
        </Col>
      </Row>

      {quizProgress !== 0 ? (
        <Row className="justify-content-center">
          <ProgressBar
            variant={
              quizProgress === props.quiz.questions.length ? "success" : "info"
            }
            now={quizProgress}
            max={props.quiz.questions.length}
            label={`Progression du quiz`}
            style={{ width: "80%", minHeight: "25px" }}
          />
        </Row>
      ) : null}

      <Row className="justify-content-center">
        <CardColumns className="p-3">
          {props.quiz.questions.map(question => {
            return (
              <QuestionCard
                onAnswered={handleAnswered}
                question={question}
                key={question.question}
              />
            );
          })}
        </CardColumns>
      </Row>
    </Container>
  );
};

export default ShowQuiz;

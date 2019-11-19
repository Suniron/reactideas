import React, { useState } from "react";
import {
  ShowQuizProps,
  QuestionCardProps,
  AnswerSelectorProps,
  AnswerRadioButtonProps
} from "./types";
import {
  Container,
  Row,
  ProgressBar,
  Button,
  Card,
  CardDeck,
  Form,
  Col
} from "react-bootstrap";
import { Answer } from "projects/QuizBuilder/quizData/types";
import { useOvermind } from "store";

/**
 * TODO:
 * - Show score when all questions are submitted (and author info? :-) )
 * - Add marging & padding (questions, progressbar, ...)
 */

const AnswerRadioButton = (props: AnswerRadioButtonProps) => {
  // -- FUNCTIONS --
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onCheckAnswer(props.answer);
  };

  // -- RENDER --
  return (
    <Form.Check
      onChange={handleChange}
      type="radio"
      label={props.answer.text}
      name="answers"
      id={props.answer.text}
    />
  );
};

const AnswerSelector = (props: AnswerSelectorProps) => {
  // -- HOOKS --
  const [userAnswer, setUserAnswer] = useState<Answer | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // -- FUNCTIONS --
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!userAnswer) {
      // TODO: Show an error message: answer required to submit
    } else {
      setIsAnswered(true);
      props.onAnswerSubmit(userAnswer.isCorrect);
    }
  };

  const handleCheckAnswer = (userCheckedAnswer: Answer) => {
    setUserAnswer(userCheckedAnswer);
  };

  // -- RENDER --
  if (isAnswered) {
    return (
      <Container>
        <Row className="justify-content-center">
          <Card.Text style={{ fontWeight: "bold" }}>Réponse envoyée</Card.Text>
        </Row>
      </Container>
    );
  }
  return (
    <Container>
      <Row>
        <fieldset>
          <Form.Group>
            {props.answers.map(answer => {
              return (
                <AnswerRadioButton
                  onCheckAnswer={handleCheckAnswer}
                  answer={answer}
                  key={answer.text}
                />
              );
            })}
          </Form.Group>
        </fieldset>
      </Row>
      <Row>
        <Button onClick={handleClick}>Envoyer</Button>
      </Row>
    </Container>
  );
};

const QuestionCard = (props: QuestionCardProps) => {
  // -- HOOKS --
  const [cardBackground, setCardBackground] = useState<
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light"
    | undefined
  >(undefined);

  // -- FUNCTIONS --
  const handleAnswerSubmit = (isCorrect: boolean) => {
    if (isCorrect) {
      setCardBackground("success");
    } else {
      setCardBackground("danger");
    }
    props.onAnswered(isCorrect);
  };

  // -- RENDER --
  return (
    <Card bg={cardBackground}>
      {props.question.imagePath ? (
        <Card.Img src={props.question.imagePath} />
      ) : null}
      <Card.Body>
        <Card.Title>{props.question.question}</Card.Title>
        <AnswerSelector
          answers={props.question.answers}
          onAnswerSubmit={handleAnswerSubmit}
        />
      </Card.Body>
    </Card>
  );
};

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

  const handleAnswered = (resultIsCorrect: boolean) => {
    if (resultIsCorrect) {
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
                actions.setIsInQuiz(false);
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
        <CardDeck className="p-3">
          {props.quiz.questions.map(question => {
            return (
              <QuestionCard
                onAnswered={handleAnswered}
                question={question}
                key={question.question}
              />
            );
          })}
        </CardDeck>
      </Row>
    </Container>
  );
};

export default ShowQuiz;

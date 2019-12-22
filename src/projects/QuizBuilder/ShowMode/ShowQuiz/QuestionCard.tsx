import React, { useState } from "react";
import {
  QuestionCardProps,
  AnswerSelectorProps,
  AnswerRadioButtonProps,
  AnswerWithoutSelectorProps
} from "./types";
import { Row, Container, Card, Form, Button } from "react-bootstrap";
import { Answer } from "projects/QuizBuilder/quizData/types";

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
      props.onAnswerSubmit(userAnswer.isCorrectAnswer);
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

const AnswerWithoutSelector = (props: AnswerWithoutSelectorProps) => {
  return (
    <Container>
      <Row>
        <fieldset>
          <Form.Group>
            {props.answers.map(answer => (
              <p key={answer.text}>
                {answer.text} - {answer.isCorrectAnswer ? "vrai" : "faux"}
              </p>
            ))}
          </Form.Group>
        </fieldset>
      </Row>
    </Container>
  );
};

export const QuestionCard = (props: QuestionCardProps) => {
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
  const handleAnswerSubmit = (isCorrectAnswer: boolean) => {
    if (isCorrectAnswer) {
      setCardBackground("success");
    } else {
      setCardBackground("danger");
    }
    if (props.onAnswered) {
      props.onAnswered(isCorrectAnswer);
    }
  };

  // -- RENDER --
  return (
    <Card bg={cardBackground}>
      {props.question.imagePath ? (
        <Card.Img
          src={props.question.imagePath}
          style={{ maxWidth: "200px" }}
        />
      ) : null}
      <Card.Body>
        <Card.Title>{props.question.question}</Card.Title>
        {props.onAnswered ? (
          <AnswerSelector
            answers={props.question.answers}
            onAnswerSubmit={handleAnswerSubmit}
          />
        ) : (
          <div>
            <AnswerWithoutSelector answers={props.question.answers} />
            {/* TODO: <Button onClick={props.editUpdater}>Modifier</Button>*/}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

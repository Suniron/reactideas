import React, { useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { InfosProps } from "./types";
import CreateQuizQuestions from "./CreateQuizQuestions";
import CreateQuizInfos from "./CreateQuizInfos";
import Quiz from "img/quiz.png";
import { Question } from "projects/QuizBuilder/quizData/types";

// Global variable for Default Image Url to use
var DEFAULT_IMAGE_URL = Quiz;

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

const CreateQuiz = () => {
  // -- HOOKS --
  //const [createdQuiz, setCreatedQuiz] = useState<null | Quiz>(null);
  const [quizTitle, setQuizTitle] = useState<null | string>("null");
  const [quizDescription, setQuizDescription] = useState<null | string>("null");
  const [quizImageURL, setQuizImageURL] = useState<null | string>(null);
  const [quizQuestions, setQuizQuestions] = useState<null | Array<Question>>(
    null
  );

  // -- FUNCTIONS --
  const updateQuizInfos = (
    title: string,
    description: string,
    image?: string
  ) => {
    setQuizTitle(title);
    setQuizDescription(description);
    if (image) {
      setQuizImageURL(image);
    }
  };

  const updateQuizQuestions = (questions: Array<Question>) => {
    setQuizQuestions(questions);
  };

  // -- RENDER --
  return (
    <Container>
      <Row>
        {quizTitle && quizDescription ? (
          <Container>
            <Row>
              <Col>
                <Row>
                  <h1>{quizTitle}</h1>
                </Row>
                <Row>
                  <h3>{quizDescription}</h3>
                </Row>
              </Col>
              <Col>
                <Image
                  style={{ width: "auto", height: 100 }}
                  src={quizImageURL ? quizImageURL : DEFAULT_IMAGE_URL}
                  rounded
                />
              </Col>
            </Row>

            <Row>
              <CreateQuizQuestions updater={updateQuizQuestions} />
            </Row>
          </Container>
        ) : (
          <CreateQuizInfos updater={updateQuizInfos} />
        )}
      </Row>
    </Container>
  );
};

export default CreateQuiz;

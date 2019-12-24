import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import CreateQuizQuestions from "./CreateQuizQuestions";
import CreateQuizInfos from "./CreateQuizInfos";
import Quiz from "img/quiz.png";
import { Question } from "projects/QuizBuilder/quizData/types";
import { useOvermind } from "store";

// Global variable for Default Image Url to use
var DEFAULT_IMAGE_URL = Quiz;

const CreateQuiz = () => {
  // -- HOOKS --
  const { actions, state } = useOvermind();

  const [isCreating, setIsCreating] = useState<boolean>(false);

  const [quizTitle, setQuizTitle] = useState<null | string>(null);
  const [quizDescription, setQuizDescription] = useState<null | string>(null);
  const [quizImageURL, setQuizImageURL] = useState<null | string>(null);
  const [quizQuestions, setQuizQuestions] = useState<null | Array<Question>>(
    null
  );

  // -- FUNCTIONS --

  const resetQuiz = () => {
    setQuizTitle(null);
    setQuizDescription(null);
    setQuizImageURL(null);
    setQuizQuestions(null);
    setIsCreating(false);
  };

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

  // Send quiz if it's completed:
  if (quizTitle && quizDescription && quizQuestions) {
    actions.addQuizToAllQuiz({
      name: quizTitle,
      description: quizDescription,
      illustrationPath: quizImageURL,
      questions: quizQuestions
    });

    resetQuiz();
  }

  // -- RENDER --
  if (isCreating) {
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
  }

  return (
    <Container>
      <Row>
        <h1>Espace de création de quiz</h1>
      </Row>
      <Row>
        <h2>{`Il y a ${state.allQuiz.length} quiz de disponible`}</h2>
      </Row>
      <Row>
        <Button onClick={() => setIsCreating(true)}>
          Créer un nouveau Quiz
        </Button>
      </Row>
    </Container>
  );
};

export default CreateQuiz;

import React, { useState, ChangeEvent } from "react";
import {
  FormControlProps,
  Button,
  CardColumns,
  Card,
  Form,
  Row,
  Container,
  Col
} from "react-bootstrap";
import {
  CreateQuizQuestionsProps,
  QuestionCardMakerProps,
  MakeAnswerFormProps,
  IQuestion
} from "./types";
import { Question, Answer } from "projects/QuizBuilder/quizData/types";
import { QuestionCard } from "projects/QuizBuilder/ShowMode/ShowQuiz/QuestionCard";

const MakeAnswerForm = (props: MakeAnswerFormProps) => {
  // -- HOOKS --
  const [isCorrectAnswer, setIsCorrectAnswer] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  // -- FUNCTIONS --
  const onChangeText = (event: ChangeEvent<FormControlProps>) => {
    event.preventDefault();
    if (!event.target.value) {
      return;
    }
    setText(event.target.value);
    props.updater(
      { text: event.target.value, isCorrectAnswer: isCorrectAnswer },
      parseInt(props.id)
    );
  };

  const onChangeCheck = (event: ChangeEvent<HTMLInputElement>) => {
    setIsCorrectAnswer(event.target.checked);

    props.updater(
      { text: text, isCorrectAnswer: event.target.checked },
      parseInt(props.id)
    );
  };

  // -- RENDERER --
  return (
    <Form.Row>
      <Form.Control
        placeholder="Saisir la réponse"
        id={props.id}
        onChange={onChangeText}
      />
      <Form.Check
        type="checkbox"
        label="Cocher s'il s'agit d'une bonne réponse"
        id={`check${props.id}`}
        onChange={onChangeCheck}
      />
    </Form.Row>
  );
};

const QuestionCardMaker = (props: QuestionCardMakerProps) => {
  // -- HOOKS --
  const [question, setQuestion] = useState<string>("");
  const [currentMode, setCurrentMode] = useState<"show" | "edit">("edit");
  const [imageURL, setImageURL] = useState<undefined | string>(undefined);
  // TODO: remove any and index 1,2 etc:
  const [answers, setAnswers] = useState<Array<Answer>>([
    { text: "", isCorrectAnswer: false },
    { text: "", isCorrectAnswer: false }
  ]);
  // -- FUNCTIONS --
  const addAnswer = () => {
    // Make a copy of answer state to edit before update
    let answersCopy = [...answers];

    // Add a new default answer to answersCopy:
    answersCopy.push({
      text: "",
      isCorrectAnswer: false
    });
    // Update answer state
    setAnswers(answersCopy);
  };

  const updateAnswers = (answer: Answer, answerId: number) => {
    if (!answers) return;

    let answersCopy = [...answers];

    for (let id in answersCopy) {
      if (parseInt(id) === answerId - 1) {
        answersCopy[id] = answer; // Set new answer object
        setAnswers(answersCopy); // set answers state
      }
    }
  };

  const onChangeImageURL = (event: ChangeEvent<FormControlProps>) => {
    event.preventDefault();

    if (!event.target.value) {
      setImageURL(undefined);
      return;
    }

    const imageUrl = event.target.value;

    fetch(imageUrl)
      .then(success => {
        if (success.status === 200) {
          // TODO: Check if image is broken:
          setImageURL(imageUrl);
        }
      })
      .catch(error => {
        console.error("Impossible de charger l'image:", error);
      });
  };

  const onChangeQuestion = (event: ChangeEvent<FormControlProps>) => {
    event.preventDefault();
    if (!event.target.value) {
      return;
    }
    setQuestion(event.target.value);
  };

  const onValidQuestion = () => {
    // TODO: get correct "answers" checking
    if (question && answers) {
      setCurrentMode("show");
      props.updater(props.questionId, {
        imagePath: imageURL,
        question: question,
        answers: answers
      });
    }
  };

  const onEditButton = () => {
    setCurrentMode("edit");
  };

  // -- GENERATE COMPONENTS --
  let answersComp = [];
  for (let i = 1; i <= Object.keys(answers).length; i++) {
    answersComp.push(
      <MakeAnswerForm key={`#${i}`} updater={updateAnswers} id={i.toString()} />
    );
  }

  // -- RENDERER --
  if (currentMode === "show") {
    return (
      <QuestionCard
        key={question}
        question={{
          imagePath: imageURL,
          question: question,
          answers: answers
        }}
        editUpdater={onEditButton}
      />
    );
  }

  return (
    <Card className="p-2">
      {imageURL ? (
        <Col>
          <Row>
            <Form.Label>Aperçu de l'image:</Form.Label>
          </Row>
          <Row>
            <Card.Img variant="top" src={imageURL} />
          </Row>
        </Col>
      ) : null}

      <Form>
        <Form.Group>
          <Form.Label>Ajouter une image (optionnel):</Form.Label>
          <Form.Control
            onChange={onChangeImageURL}
            placeholder="Saisir l'url de l'image .jpg .png ou .gif"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Question:</Form.Label>
          <Form.Control
            onChange={onChangeQuestion}
            placeholder="Saisir la question"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Réponses:</Form.Label>

          {answersComp.map(comp => comp)}
        </Form.Group>
      </Form>
      <Row className="justify-content-center">
        <Button
          className="m-1"
          variant="outline-primary"
          size="sm"
          onClick={addAnswer}
        >
          Ajouter une autre réponse
        </Button>
        <Button onClick={onValidQuestion}>
          Valider cette question et ses réponses
        </Button>
      </Row>
    </Card>
  );
};

const CreateQuizQuestions = (props: CreateQuizQuestionsProps) => {
  // -- HOOKS --
  const [questions, setQuestions] = useState<Array<IQuestion>>([
    { questionId: 1 }
  ]);

  // -- FUNCTIONS --
  const addQuestion = () => {
    const questionsTemp = [...questions];

    questionsTemp.push({ questionId: questions.length + 1 });
    setQuestions(questionsTemp);
  };

  const updateQuestion = (questionId: number, question: Question) => {
    const questionsTemp = [...questions];

    questionsTemp.forEach(questionItem => {
      if (questionItem.questionId === questionId) {
        questionItem.question = question;
        setQuestions(questionsTemp);
      }
    });
  };

  const onClickValidate = () => {
    const allQuestions: Question[] = [];

    questions.forEach(question => {
      if (question.question) {
        allQuestions.push(question.question);
      }
    });

    if (allQuestions.length !== 0) {
      if (
        window.confirm(
          `Confirmez-vous la création de ce Quiz ? (${allQuestions.length} questions validées)`
        )
      ) {
        props.updater(allQuestions);
      }
    } else {
      alert("Il faut valider la ou les question(s)");
    }
  };

  // -- RENDER --
  return (
    <Container>
      <Row>
        <CardColumns>
          {questions.map(({ questionId }) => (
            <QuestionCardMaker
              key={"questionCard" + questionId}
              questionId={questionId}
              updater={updateQuestion}
            />
          ))}
          <Card className="p-2">
            <Row className="justify-content-center">
              <Button onClick={addQuestion}>Ajouter une autre question</Button>
            </Row>
          </Card>
        </CardColumns>
      </Row>

      <Row className="m-1">
        <Button onClick={onClickValidate}>
          Terminer la création de ce Quiz
        </Button>
      </Row>
    </Container>
  );
};

export default CreateQuizQuestions;

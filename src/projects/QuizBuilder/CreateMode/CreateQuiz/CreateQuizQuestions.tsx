import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  FormControlProps,
  Button,
  CardGroup,
  Card,
  Form
} from "react-bootstrap";
import {
  CreateQuestionProps,
  CreateQuizQuestionsProps,
  MakeQuestionCardProps,
  MakeAnswerFormProps
} from "./types";
import { Question, Answer } from "projects/QuizBuilder/quizData/types";

const Buttons = () => {
  return <p>Boutons</p>;
};

const CreateQuestion = (props: CreateQuestionProps) => {
  // -- HOOKS --
  const [question, setQuestion] = useState<undefined | string>(undefined);

  // -- FUNCTIONS --

  const onChangeQuestion = (event: ChangeEvent<FormControlProps>) => {
    if (event.target.value) {
      setQuestion(event.target.value);
    }
  };

  const onSubmitHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (question) {
      props.updater(question);
    }
    // TODO: Else handle error (empty field, not string, ...)
  };

  // -- RENDERER --
  return (
    <Container>
      <Row>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Quelle est la question ?</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onChange={onChangeQuestion} />
        </InputGroup>
      </Row>

      <Row>
        <Button type="button" onClick={onSubmitHandler}>
          Valider la question et passer à l'ajout de ses réponses
        </Button>
      </Row>
    </Container>
  );
};

const CreateQuizQuestions = (props: CreateQuizQuestionsProps) => {
  // -- HOOKS --
  const [questions, setQuestions] = useState<undefined | Array<string>>(
    undefined
  );

  // -- FUNCTIONS --
  const updateQuestion = (question: string) => {
    if (!questions) {
      setQuestions([question]);
    } else {
      setQuestions(questions.concat(question));
    }
  };

  // -- RENDER --
  return (
    <Container>
      <Row>aperçu des questions déjà crées</Row>
      <Row>
        <CreateQuestion updater={updateQuestion} />
      </Row>
      <Row>Saisie réponses</Row>
      <Row>
        <Buttons />
      </Row>
    </Container>
  );
};

// ======================== NEW: =============================
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
        onChange={() =>
          isCorrectAnswer ? setIsCorrectAnswer(false) : setIsCorrectAnswer(true)
        }
      />
    </Form.Row>
  );
};

const MakeQuestionCard = (props: MakeQuestionCardProps) => {
  // -- HOOKS --
  const [question, setQuestion] = useState<string>("");
  const [currentMode, setCurrentMode] = useState<"show" | "edit">("edit");
  const [imageURL, setImageURL] = useState<undefined | string>(undefined);
  const [numberOfAnswers, setNumberOfAnswers] = useState<number>(2);
  const [answers, setAnswers] = useState<null | Array<Answer>>(null);

  // -- FUNCTIONS --
  const changeCurrentMode = () => {
    if (currentMode === "show") {
      setCurrentMode("edit");
    } else {
      setCurrentMode("show");
    }
  };

  const addAnswer = () => {
    setNumberOfAnswers(numberOfAnswers + 1);
  };

  const updateAnswers = (answer: Answer) => {
    if (!answers) return;

    let answersCopy = [...answers];

    for (let i = 0; i <= answersCopy.length; i++) {
      console.log("test");
    }
  };

  const onChangeImageURL = (event: ChangeEvent<FormControlProps>) => {
    event.preventDefault();

    if (!event.target.value) {
      return;
    }

    // TODO: Check if it's an image url (.jpg, .png, .gif, ...)
    setImageURL(event.target.value);
  };

  const onChangeQuestion = (event: ChangeEvent<FormControlProps>) => {
    event.preventDefault();
    if (!event.target.value) {
      return;
    }
    setQuestion(event.target.value);
  };

  const onSubmitQuestion = () => {
    console.log(question, currentMode, imageURL, numberOfAnswers);
    /*
    if (question && answers) {
      props.updater({
        imagePath: imageURL,
        question: question,
        answers: answers
      });
    }
    */
  };

  // -- GENERATE COMPONENTS --
  let answersComp = [];
  for (let i = 0; i <= numberOfAnswers; i++) {
    answersComp.push(<MakeAnswerForm key={`#${i}`} id={i.toString()} />);
  }

  // -- RENDERER --
  if (currentMode === "show") {
    return <Card>Show</Card>;
  }

  return (
    <Card>
      <Form>
        <Form.Group>
          <Form.Label>Ajouter une image (optionnel):</Form.Label>
          <Form.Control
            onChange={onChangeImageURL}
            placeholder="Saisir l'url du fichier image"
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
      <Button>Ajouter une réponse</Button>
      <Button onClick={onSubmitQuestion}>Valider cette question</Button>
    </Card>
  );
};

const CreateQuizQuestions2 = (props: CreateQuizQuestionsProps) => {
  // -- HOOKS --
  const [questions, setQuestions] = useState<null | Array<Question>>(null);
  console.log("Questions:", questions);
  // -- FUNCTIONS --
  const addQuestion = (question: Question) => {
    if (!questions) {
      setQuestions([question]);
    } else {
      setQuestions(questions.concat(question));
    }
  };

  // -- RENDER --
  return (
    <CardGroup>
      <MakeQuestionCard updater={addQuestion} />
    </CardGroup>
  );
};

export default CreateQuizQuestions2;

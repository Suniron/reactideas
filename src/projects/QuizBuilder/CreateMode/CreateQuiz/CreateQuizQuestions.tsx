import React, { useState, ChangeEvent } from "react";
import {
  FormControlProps,
  Button,
  CardDeck,
  Card,
  Form
} from "react-bootstrap";
import {
  CreateQuizQuestionsProps,
  MakeQuestionCardProps,
  MakeAnswerFormProps
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

const MakeQuestionCard = (props: MakeQuestionCardProps) => {
  // -- HOOKS --
  const [question, setQuestion] = useState<string>("");
  const [currentMode, setCurrentMode] = useState<"show" | "edit">("edit");
  const [imageURL, setImageURL] = useState<undefined | string>(undefined);
  // TODO: remove any and index 1,2 etc:
  const [answers, setAnswers] = useState<any>({
    1: { text: "", isCorrectAnswer: false },
    2: { text: "", isCorrectAnswer: false }
  });

  // -- FUNCTIONS --
  const changeCurrentMode = () => {
    if (currentMode === "show") {
      setCurrentMode("edit");
    } else {
      setCurrentMode("show");
    }
  };

  const addAnswer = () => {
    // Make a copy of answer state to edit before update
    let answersCopy = { ...answers };

    // Add a new default answer to answersCopy:
    answersCopy[Object.keys(answers).length + 1] = {
      text: "",
      isCorrectAnswer: false
    };
    // Update answer state
    setAnswers(answersCopy);
  };

  const updateAnswers = (answer: Answer, answerId: number) => {
    if (!answers) return;

    let answersCopy = { ...answers };

    for (let id in answersCopy) {
      if (parseInt(id) === answerId) {
        answersCopy[id] = answer; // Set new answer object
        setAnswers(answersCopy); // set answers state
      }
    }
  };

  const onChangeImageURL = (event: ChangeEvent<FormControlProps>) => {
    event.preventDefault();

    if (!event.target.value) {
      return;
    }

    const imageUrl = event.target.value;

    // TODO: Check with regex:
    if (
      imageUrl.split(".")[imageUrl.split(".").length - 1] === "jpg" ||
      imageUrl.split(".")[imageUrl.split(".").length - 1] === "png" ||
      imageUrl.split(".")[imageUrl.split(".").length - 1] === "gif" ||
      imageUrl.split(".")[imageUrl.split(".").length - 1] === "png"
    ) {
      setImageURL(event.target.value);
    }
  };

  const onChangeQuestion = (event: ChangeEvent<FormControlProps>) => {
    event.preventDefault();
    if (!event.target.value) {
      return;
    }
    setQuestion(event.target.value);
  };

  const onAddNewAnswer = () => {
    addAnswer();
  };

  const onValidQuestion = () => {
    // TODO: corrige "answers" check
    if (question && answers) {
      setCurrentMode("show");
      props.updater({
        imagePath: imageURL,
        question: question,
        answers: answers
      });
    }
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
      />
    );
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
      <Button onClick={onAddNewAnswer}>Ajouter une réponse</Button>
      <Button onClick={onValidQuestion}>Valider cette question</Button>
    </Card>
  );
};

const CreateQuizQuestions2 = (props: CreateQuizQuestionsProps) => {
  // -- HOOKS --
  const [questions, setQuestions] = useState<null | Array<Question>>(null);

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
    <CardDeck>
      <MakeQuestionCard updater={addQuestion} />
    </CardDeck>
  );
};

export default CreateQuizQuestions2;

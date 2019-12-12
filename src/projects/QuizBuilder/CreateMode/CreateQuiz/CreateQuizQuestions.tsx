import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  FormControlProps,
  Button
} from "react-bootstrap";
import { CreateQuestionProps, CreateQuizQuestionsProps } from "./types";

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

export default CreateQuizQuestions;

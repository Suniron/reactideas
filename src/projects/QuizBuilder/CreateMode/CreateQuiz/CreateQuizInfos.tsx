import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import { CreateQuizInfosProps } from "./types";
import {
  Container,
  Row,
  FormControlProps,
  Button,
  Form
} from "react-bootstrap";

const CreateQuizInfos = (props: CreateQuizInfosProps) => {
  // -- HOOKS --
  const [title, setTitle] = useState<undefined | string>(undefined);
  const [description, setDescription] = useState<undefined | string>(undefined);
  const [imageURL, setImageURL] = useState<undefined | string>(undefined);

  // -- FUNCTIONS --
  const onChangeTitle = (event: ChangeEvent<FormControlProps>) => {
    if (event.target.value) {
      setTitle(event.target.value);
    }
  };

  const onChangeDescription = (event: ChangeEvent<FormControlProps>) => {
    if (event.target.value) {
      setDescription(event.target.value);
    }
  };

  const onChangeImage = (event: ChangeEvent<FormControlProps>) => {
    // TODO: Show image in a box
    if (event.target.value) {
      setImageURL(event.target.value);
    }
  };

  const onSubmitHandler = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (title && description) {
      props.updater(title, description, imageURL);
    }
    // TODO: Else handle error (empty field, not string, ...)
  };

  // -- RENDERER --
  return (
    <Container>
      <Row>
        <h1>Renseignez les informations pour le nouveau Quiz:</h1>
      </Row>

      <Row>
        <Form>
          <Form.Group controlId="formTitle">
            <Form.Label>Le titre du quiz</Form.Label>
            <Form.Control
              onChange={onChangeTitle}
              placeholder="Saisir le titre"
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>La description du quiz</Form.Label>
            <Form.Control
              onChange={onChangeDescription}
              placeholder="Saisir la description"
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Le titre du quiz (Optionnel)</Form.Label>
            <Form.Control
              onChange={onChangeImage}
              placeholder="Saisir l'url de l'image"
            />
            <Form.Text className="text-muted">
              L'adresse doit finir par .jpg, .png ou .gif. Ce champs peut rester
              vide.
            </Form.Text>
          </Form.Group>
        </Form>
      </Row>

      <Row>
        <Button type="button" onClick={onSubmitHandler}>
          Valider et passer aux questions
        </Button>
      </Row>
    </Container>
  );
};

export default CreateQuizInfos;

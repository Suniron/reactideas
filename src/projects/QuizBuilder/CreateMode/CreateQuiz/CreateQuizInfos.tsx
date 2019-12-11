import React, { useState, ChangeEvent, SyntheticEvent } from "react";
import { CreateQuizInfosProps } from "./types";
import {
  Container,
  Row,
  InputGroup,
  FormControl,
  FormControlProps,
  Button
} from "react-bootstrap";

const CreateQuizInfos = (props: CreateQuizInfosProps) => {
  // -- HOOKS --
  const [title, setTitle] = useState<null | string>(null);
  const [description, setDescription] = useState<null | string>(null);
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
        <h1>Renseignez les informations du quiz:</h1>
      </Row>

      <Row>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Saisir le titre du Quiz:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onChange={onChangeTitle} />
        </InputGroup>
      </Row>

      <Row>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Saisir la description du Quiz:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onChange={onChangeDescription} />
        </InputGroup>
      </Row>

      <Row>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              Url de l'illustration du quiz (Optionnel)
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onChange={onChangeDescription} />
        </InputGroup>
      </Row>

      <Row>
        <Button type="button" onClick={onSubmitHandler}>
          Envoyer
        </Button>
      </Row>
    </Container>
  );
};

export default CreateQuizInfos;

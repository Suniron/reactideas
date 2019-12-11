import React, { useState, ChangeEvent } from "react";
import { Container, Row, InputGroup, FormControl } from "react-bootstrap";
import { FormControlProps } from "react-bootstrap";

const MakeQuizArea = () => {
  // -- HOOKS --
  const [title, setTitle] = useState<null | string>(null);
  const [description, setDescription] = useState<null | string>(null);

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

  // -- RENDER --
  return (
    <Container>
      <Row>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Saisir le titre du Quiz:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onChange={onChangeTitle} />
        </InputGroup>
      </Row>
      <Row>
        {description ? (
          `Description du Quiz: ${description}`
        ) : (
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>Saisir la description du Quiz:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl onChange={onChangeDescription} />
          </InputGroup>
        )}
      </Row>
      <Row>Image</Row>
      <Row>Saisie / aperçu questions déjà crées</Row>
      <Row>Saisie réponses</Row>
    </Container>
  );
};

export default MakeQuizArea;

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AppCardProps } from "./types";
import QuizBuilder from "./QuizBuilder";
import { Card, Button, CardColumns, Container, Row } from "react-bootstrap";
import quiz from "img/quiz.png";

const AppCard = (props: AppCardProps) => {
  return (
    <Card className="p-2" border="info" style={{ minWidth: "120px" }}>
      {props.imagePath ? (
        <Card.Img variant="top" src={props.imagePath} />
      ) : null}

      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary">{props.name}</Button>
      </Card.Body>
    </Card>
  );
};
const AppCards = () => {
  return (
    <CardColumns className="w-75 p-2">
      <AppCard
        name="Quiz Builder"
        imagePath={quiz}
        description="A quiz builder tool"
      />
      <AppCard
        name="Quiz Builder"
        imagePath={quiz}
        description="A quiz builder tool"
      />
      <AppCard
        name="Quiz Builder"
        imagePath={quiz}
        description="A quiz builder tool"
      />
      <AppCard
        name="Quiz Builder"
        imagePath={quiz}
        description="A quiz builder tool"
      />
      <AppCard
        name="Quiz Builder"
        imagePath={quiz}
        description="A quiz builder tool"
      />
    </CardColumns>
  );
};
const Home = () => {
  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <header className="App-header"></header>

      <Container>
        <Row>
          <h1>Decouvrir mes projets...</h1>
        </Row>

        <Row className="justify-content-md-center">
          <AppCards />
        </Row>
        <Row>
          <h1>Après</h1>
        </Row>
      </Container>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path={"/quizbuilder"} component={QuizBuilder} />
    </BrowserRouter>
  );
};

export default App;

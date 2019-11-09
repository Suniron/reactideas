import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppCardProps } from "./types";
import "./App.css";
import QuizBuilder from "./QuizBuilder";
import { Card, Button, CardColumns, Container, Row } from "react-bootstrap";
import quiz from "img/quiz.png";

const AppCard = (props: AppCardProps) => {
  return (
    <Card className="p-2" bg={"success"} style={{ minWidth: "120px" }}>
      {props.imagePath ? (
        <Card.Img variant="top" src={props.imagePath} />
      ) : null}

      <Card.Body>
        <Card.Text>{props.description}</Card.Text>
        <Link to={props.link}>
          <Button variant="dark">{props.name}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};
const AppCards = () => {
  return (
    <CardColumns className="w-75 p-2">
      <AppCard
        name="Quiz Builder"
        link="/quizbuilder"
        imagePath={quiz}
        description="Un outil de création de quiz"
      />
    </CardColumns>
  );
};
const Home = () => {
  return (
    <div className="App home">
      <Container>
        <Row>
          <h1>Decouvrir mes projets...</h1>
        </Row>

        <Row className="justify-content-md-center">
          <AppCards />
        </Row>
      </Container>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/quizbuilder" component={QuizBuilder} />
      </Router>
    </div>
  );
};

export default App;

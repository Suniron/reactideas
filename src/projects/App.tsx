import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { AppCardProps } from "./types";
import QuizBuilder from "./QuizBuilder";
import { Card, Button, CardGroup } from "react-bootstrap";

const AppCard = (props: AppCardProps) => {
  return (
    <Card border="info">
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
    <CardGroup>
      <AppCard
        name="Quiz Builder"
        imagePath={null}
        description="A quiz builder tool"
      />
    </CardGroup>
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
      <body>
        <AppCards />
      </body>
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

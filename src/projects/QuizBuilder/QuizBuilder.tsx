import React, { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { ChoosenApp, HeaderProps } from "./types";
import Counter from "./Counter";

const Header = (props: HeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Quiz Builder</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => props.setMode("home")}>Accueil</Nav.Link>
        <Nav.Link onClick={() => props.setMode("createMode")}>
          Création
        </Nav.Link>
        <Nav.Link onClick={() => props.setMode("showMode")}>
          Consultation
        </Nav.Link>
      </Nav>
      <Nav className="mr-auto"></Nav>
      <Button variant="outline-info">Menu</Button>
    </Navbar>
  );
};

const Home = () => {
  return (
    <div>
      <p>Home !</p>
      <Counter />
    </div>
  );
};

const CreateMode = () => {
  return <p>CreateMode !</p>;
};

const ShowMode = () => {
  return <p>ShowMode !</p>;
};

const QuizBuilder = () => {
  const [choosenApp, setChoosenApp] = useState<ChoosenApp>("home");

  return (
    <div className="App quizBuilder">
      <Header setMode={setChoosenApp} />
      {choosenApp === "home" ? <Home /> : null}
      {choosenApp === "createMode" ? <CreateMode /> : null}
      {choosenApp === "showMode" ? <ShowMode /> : null}
    </div>
  );
};

export default QuizBuilder;

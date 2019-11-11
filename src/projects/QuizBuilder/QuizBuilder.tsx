import React, { useState } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import { ChoosenApp, HeaderProps } from "./types";
import Home from "./Home";
import CreateMode from "./CreateMode";
import ShowMode from "./ShowMode";

const Header = (props: HeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => props.setMode("home")}>
        Quiz Builder
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Accueil</Nav.Link>
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

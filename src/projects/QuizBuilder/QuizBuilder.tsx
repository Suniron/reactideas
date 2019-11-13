import React, { useState } from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { ChoosedMode, HeaderProps } from "./types";
import Home from "./Home";
import CreateMode from "./CreateMode";
import ShowMode from "./ShowMode";
import { Row } from "react-bootstrap";

const Header = (props: HeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => props.setMode("home")}>
        Quiz Builder
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Choisir un mode
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => props.setMode("createMode")}>
                Création
              </Dropdown.Item>
              <Dropdown.Item onClick={() => props.setMode("showMode")}>
                Consultation
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const QuizBuilder = () => {
  const [choosedMode, setChoosedMode] = useState<ChoosedMode>("home");

  return (
    <div className="quizBuilder">
      <Header setMode={setChoosedMode} />
      {choosedMode === "home" ? <Home /> : null}
      {choosedMode === "createMode" ? <CreateMode /> : null}
      {choosedMode === "showMode" ? <ShowMode /> : null}
    </div>
  );
};

export default QuizBuilder;

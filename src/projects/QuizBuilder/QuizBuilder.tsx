import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { HeaderProps } from "./types";
import Home from "./Home";
import CreateMode from "./CreateMode";
import ShowMode from "./ShowMode";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = (props: HeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Quiz Builder</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Choisir un mode
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link style={{ color: "black" }} to="/quizbuilder">
                  Accueil
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link style={{ color: "black" }} to="/quizbuilder/create">
                  Création
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link style={{ color: "black" }} to="/quizbuilder/show">
                  Consultation
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};

const QuizBuilder = () => {
  return (
    <Router>
      <Header />

      <Route exact path="/quizbuilder" component={Home} />
      <Route path="/quizbuilder/create" component={CreateMode} />
      <Route path="/quizbuilder/show" component={ShowMode} />
    </Router>
  );
};

export default QuizBuilder;

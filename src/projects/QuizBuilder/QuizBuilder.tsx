import React from "react";
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { HeaderProps } from "./types";
import Home from "./Home";
import CreateMode from "./CreateMode";
import ShowMode from "./ShowMode";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

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
                <NavLink style={{ color: "black" }} to="/quizbuilder">
                  Accueil
                </NavLink>
              </Dropdown.Item>

              <Dropdown.Item>
                <NavLink style={{ color: "black" }} to="/quizbuilder/create">
                  Création
                </NavLink>
              </Dropdown.Item>

              <Dropdown.Item>
                <NavLink style={{ color: "black" }} to="/quizbuilder/show">
                  Consultation
                </NavLink>
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
    <div className="quizBuilder">
      <Header />
      <Router>
        <Route exact path="/quizbuilder" component={Home} />
        <Route exact path="/quizbuilder/create" component={CreateMode} />
        <Route exact path="/quizbuilder/show" component={ShowMode} />
      </Router>
    </div>
  );
};

export default QuizBuilder;

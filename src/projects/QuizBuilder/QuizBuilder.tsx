import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { HeaderProps } from "./types";
import Home from "./Home";
import CreateMode from "./CreateMode";
import ShowMode from "./ShowMode";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = (props: HeaderProps) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Quiz Builder</Navbar.Brand>

      <Button variant="outline-secondary">
        <Link style={{ color: "grey" }} to="/quizbuilder">
          Accueil
        </Link>
      </Button>

      <Button variant="outline-secondary">
        <Link style={{ color: "grey" }} to="/quizbuilder/create">
          Création
        </Link>
      </Button>
      <Button variant="outline-secondary">
        <Link style={{ color: "grey" }} to="/quizbuilder/show">
          Consultation
        </Link>
      </Button>
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

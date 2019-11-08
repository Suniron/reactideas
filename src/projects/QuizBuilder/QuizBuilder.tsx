import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const QuizBuilder = () => {
  return (
    <div className="app-common quizBuilder">
      <Link to="/">
        <Button>Test</Button>
      </Link>
    </div>
  );
};

export default QuizBuilder;

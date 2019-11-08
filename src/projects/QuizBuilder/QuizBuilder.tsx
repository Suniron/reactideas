import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const QuizBuilder = () => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <Link to="/">
        <Button>Test</Button>
      </Link>
    </div>
  );
};

export default QuizBuilder;

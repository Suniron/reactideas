import React, { Dispatch } from "react";

import { CounterProps } from "./types";
import { Button } from "react-bootstrap";

/**
 * TODO: Suivre tuto https://www.baptiste-donaux.fr/react-redux-concept/
 */

const Counter = (props: CounterProps) => {
  return (
    <div>
      <p>Compteur: {}</p>
      <Button>+</Button>
      <Button>-</Button>
    </div>
  );
};

export default Counter;

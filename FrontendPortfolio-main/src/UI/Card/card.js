import React, { Fragment } from "react";
import "./card.css";
const card = props  => {
  return  (<Fragment>
{props.children}
  </Fragment>);
};

export default card;

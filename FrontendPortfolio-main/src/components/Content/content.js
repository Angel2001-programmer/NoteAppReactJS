import { Fragment } from "react";

import "./content.css";

const content = props => {
  return(
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default content;
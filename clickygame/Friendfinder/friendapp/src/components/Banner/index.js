import React from "react";
import "./style.css";

function Banner(props) {
  return <h3 className="banner">{props.children}</h3>;
}

export default Banner;

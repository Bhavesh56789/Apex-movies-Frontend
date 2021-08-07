import React from "react";
import "./Card1.css";

function Card1(props) {

  return (
    <form className="form">
      <div className="inputGroup">
        <input id={props.id} name="option1" type="checkbox" onClick={() => props.changehandler(props.title)} />
        <label htmlFor={props.id}>{props.title}</label>
      </div>
    </form>
  );
}

export default Card1;

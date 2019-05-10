import React from "react";
import "./Smurf.css";
const Smurf = props => {
  let deleteSmurf = e => {
    e.preventDefault();
    props.deleteSmurf(props.id);
    console.log(props.id);
    console.log(props.deleteSmurf);
  };

  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <details className="details">
        <summary>Open me to delete smurf</summary>
        <button onClick={deleteSmurf}>Delete</button>
      </details>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;

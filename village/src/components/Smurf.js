import React from "react";

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
      <button onClick={deleteSmurf}>Delete</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;

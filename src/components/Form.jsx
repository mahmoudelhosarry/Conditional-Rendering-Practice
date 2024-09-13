import React from "react";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.userIsRegistered === false ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null}
      {props.userIsRegistered === false ? (
        <button type="submit">Register</button>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
}

export default Form;

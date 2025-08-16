import React from "react";
import "./Form.css";

const Form = ({
  title,
  name,
  phone,
  email,
  text,
  submitFormHandeler,
  nameChangeHandler,
  phoneChangeHandler,
  emailChangeHandler,
  textChangeHandler,
}) => {
  return (
    <div className="container">
      <form onSubmit={submitFormHandeler}>
        <h2>{title}</h2>
        <div className="input__container">
          <input
            type="text"
            name="name"
            placeholder="Name/LastName"
            value={name}
            onChange={nameChangeHandler}
          />
        </div>
        <div className="input__container">
          <input
            type="text"
            name="phone"
            placeholder="PhoneNumber"
            value={phone}
            onChange={phoneChangeHandler}
          />
        </div>
        <div className="input__container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={emailChangeHandler}
          />
        </div>
        <div className="input__container">
          <textarea
            type="text"
            name="text"
            placeholder="Your Idea"
            value={text}
            onChange={textChangeHandler}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;

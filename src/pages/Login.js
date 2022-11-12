import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormInput from "./FormInput";
import "../css/Login.css";

export default function Login() {
  const navigate = useNavigate();

  // Clears Token

  window.localStorage.setItem("token", "none");

  // Variable for Form Values
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  // Parameters for Form Inputs
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];

  // Axios variables

  let myUrl = `${process.env.REACT_APP_APIURL}/api/v1/login`;

  let body = {
    username: values.username,
    password: values.password,
  };

  let headers = {
    "Content-Type": "application/json",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = await axios
      .post(myUrl, body, headers)
      .then((response) => response.data);
    localStorage.setItem("token", data.token);
    navigate("/");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="formInput-container">
      <form onSubmit={handleSubmit}>
        <h2 id="formInputTitle">Login</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="formInput">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import FormInput from "./FormInput";

export default function CreateAccount() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "username",
      type: "text",
      placeholder: "Username",
      label: "Username",
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      required: true,
    },
  ];

  const writeToken = () => {
    window.localStorage.setItem("token", "token-token");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    writeToken();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2 id="formInputTitle">Create Account</h2>
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
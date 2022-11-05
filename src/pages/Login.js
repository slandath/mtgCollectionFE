import { useState } from "react";
import FormInput from "./FormInput";

export default function Login() {

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

// Variables for Fetch
  const myUrl = "http://localhost:3000/api/v1/login";
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username: values.username, password: values.password})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(myUrl, options)
    .then(res => res.json())
    .then(res => {window.localStorage.setItem("token", res.token)});
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
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

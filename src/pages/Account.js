import { useState } from "react";
import FormInput from "./FormInput";

export default function CreateAccount() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

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
    {
      id: 3,
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
        <h1>Create Account</h1>
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
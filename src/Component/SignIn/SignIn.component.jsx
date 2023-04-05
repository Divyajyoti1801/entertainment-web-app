import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { signInWithAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import "./SignIn.component.scss";

//Default State of Input Fields
const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInWithAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log("User SignIn Not Happened");
    }
  };

  return (
    <div className="auth">
      <Link className="auth__logo" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <form onSubmit={handleSubmit} className="sign-in">
        <h2 className="sign-in__heading">Login</h2>
        <FormInput
          type="email"
          required
          onChange={onChangeHandler}
          name="email"
          value={email}
          placeholder="Email"
        />
        <FormInput
          type="password"
          required
          onChange={onChangeHandler}
          name="password"
          value={password}
          placeholder="Password"
        />
        <button type="submit" className="sign-in__btn">
          Login to your account
        </button>
        <p className="sign-in__prompt">
          Don't have an account &nbsp;{" "}
          <Link className="sign-in__prompt--link" to="sign-up">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

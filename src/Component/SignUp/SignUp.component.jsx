import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import "./SignUp.component.scss";

const defaultFormField = {
  email: "",
  password: "",
  repeatPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password, repeatPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormField);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      alert("Entered Passwords Doesn't Match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { email });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("User Creation encountered an Issue" + error);
      }
    }
  };

  return (
    <div className="form">
      <Link className="form__logo" to="/">
        <img src={Logo} alt="Logo" />
      </Link>

      <form className="sign-up" onSubmit={onSubmitHandler}>
        <h3 className="sign-up__heading">Sign Up</h3>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={onChangeHandler}
          placeholder="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={onChangeHandler}
          required
        />
        <FormInput
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          placeholder="Confirm Password"
          onChange={onChangeHandler}
          required
        />
        <button type="submit" className="sign-up__btn">
          Create an account
        </button>
        <p className="sign-up__prompt">
          Already have an account? &nbsp;{" "}
          <Link className="sign-up__prompt--link" to={"/auth"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

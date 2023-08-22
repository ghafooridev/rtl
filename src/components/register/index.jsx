import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";

function Register() {
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setRegisterInput({
      ...registerInput,
      [e.target.name]: e.target.value,
    });
  };

  const onClickSubmit = () => {
    if (!validator.isEmail(registerInput.email)) {
      return setError("The email you input is invalid.");
    } else if (registerInput.password.length < 5) {
      return setError(
        "The password you entered should contain 5 or more characters."
      );
    } else if (registerInput.password !== registerInput.confirmPassword) {
      return setError("The passwords don't match. Try again.");
    }
    navigate(`products`);
  };

  return (
    <div className="container">
      <h1>Register To Login</h1>

      <div className="content">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={registerInput.email}
          onChange={handleChange}
        />
      </div>
      <div className="content">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={registerInput.password}
          onChange={handleChange}
        />
      </div>
      <div className="content">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          name="confirmPassword"
          value={registerInput.confirmPassword}
          onChange={handleChange}
        />
      </div>
      {error && <p className="error">{error}</p>}
      <div className="content">
        <button
          type="submit"
          className={
            (registerInput.email === "" ||
              registerInput.password === "" ||
              registerInput.confirmPassword === "") &&
            "disabled"
          }
          onClick={onClickSubmit}
          disabled={
            registerInput.email === "" ||
            registerInput.password === "" ||
            registerInput.confirmPassword === ""
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;

import { useState } from "react";
import validator from "validator";

function Register() {
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

  const onClickSubmit = (e) => {
    e.preventDefault();
    if (!validator.isEmail(registerInput.email)) {
      return setError("The email you input is invalid.");
    } else if (registerInput.password.length < 5) {
      return setError(
        "The password you entered should contain 5 or more characters."
      );
    } else if (registerInput.password !== registerInput.confirmPassword) {
      return setError("The passwords don't match. Try again.");
    }
  };

  return (
    <div className="container">
      <h1>Register To Login</h1>
      <form>
        <div className="content">
          <label htmlFor="email">Email address</label>
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
          <button type="submit" className="" onClick={onClickSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import { ERROR_MESSAGE } from "../../constants";
import { utils } from "../helper";

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
      return setError(ERROR_MESSAGE.EMAIL);
    } else if (registerInput.password.length < 5) {
      return setError(ERROR_MESSAGE.PASSWORD);
    } else if (registerInput.password !== registerInput.confirmPassword) {
      return setError(ERROR_MESSAGE.CONFIRM_PASSWORD);
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
          className="btn"
          onClick={onClickSubmit}
          disabled={
            utils.isEmpty(registerInput.email) ||
            utils.isEmpty(registerInput.password) ||
            utils.isEmpty(registerInput.confirmPassword)
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Register;

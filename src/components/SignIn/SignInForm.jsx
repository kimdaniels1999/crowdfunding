import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SignIn.css";

function SignInForm() {
  const history = useHistory();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [id]: value,
    }));
  };

  const postData = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}api-token-auth/`,
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );
    return response.json();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.username && credentials.password) {
      postData().then((response) => {
        window.localStorage.setItem("token", response.token);
        // window.location = `${window.location.origin}`/`
        history.push("/");
      });
    }
  };

  return (
    <div className="sign-box">
      <h1 className="sign-label">Log In Time</h1>
      <form className="sign-form" onSubmit={handleSubmit}>
        <div className="user">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-input"
            id="username"
            placeholder="Enter username"
            onChange={handleChange}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-input"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className="submitBtn" onClick={handleSubmit}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;

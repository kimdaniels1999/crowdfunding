import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          SignIn
        </button>
      </div>
    </form>
  );
}

export default SignInForm;

import { useState } from "react";
import axios from "axios";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //const onSubmit
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Login"
    />
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registration Completed!");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      label="Register"
    />
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  label,
  onSubmit,
}) => {
  return (
    <div className="auth-container flex justify-center items-center">
      <form onSubmit={onSubmit}>
        <h2 className="text-2xl font-bold text-center mb-4"> {label} </h2>
        <div className="form-group">
          <label htmlFor="username" className="text-lg font-bold">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className="w-full border border-gray-400 rounded-md p-2 mb-4"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="text-lg font-bold">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full border border-gray-400 rounded-md p-2 mb-4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white font-medium py-2 px-4 rounded-lg"
        >
          {label}
        </button>
      </form>
    </div>
  );
};

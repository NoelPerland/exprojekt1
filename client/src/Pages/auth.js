import React, { useState } from "react";

export const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <Register />
    </div>
  );
};

const Login = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-2xl font-bold">Login</h2>
      <div></div>
    </div>
  );
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="auth-container flex justify-center items-center">
      <form className="w-1/3">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
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
          Register
        </button>
      </form>
    </div>
  );
};

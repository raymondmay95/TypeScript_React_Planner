import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { Redirect } from "react-router-dom";
import { AppProps } from "../../App";

type LoginProps = {
   setLogin: (a:boolean) => void
}
const LoginFormPage: React.FC<LoginProps & AppProps> = ({setLogin, useAppDispatch, useAppSelector}) => {
  const dispatch = useAppDispatch;
  const sessionUser = useAppSelector((state:any) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to={`/`} />;

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (credential !== "" && password !== "") {
      setErrors([]);
      const data:any | JSON = await dispatch(sessionActions.login({ credential, password }))
      if (data && data.errors) setErrors(data.errors);
      return data
      };
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Please Sign In</h2>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <fieldset>
            <legend>Name or Email</legend>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <legend>Password</legend>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </fieldset>
          <div>
            <button type="submit">Log In</button>
            <button
              type="button"
              onClick={(e) => {
                setCredential("demolition@email.com");
                setPassword("password");
              }}
            >
              Demo
            </button>
            <button
              type="button"
              onClick={() => {setLogin(false);}}
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginFormPage;

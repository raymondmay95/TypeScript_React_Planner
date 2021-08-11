import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import * as eventActions from "../../store/events";
import { Redirect } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
type LoginProps = {
   setLogin: (a:boolean) => void;
   setIsLoaded: (a:boolean) => void
}
const LoginFormPage: React.FC<LoginProps> = ({setLogin, setIsLoaded}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state:any) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) {
    return <Redirect to={`/`} />;
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (credential !== "" && password !== "") {
      setErrors([]);
      const data:any | JSON = await dispatch(sessionActions.login({ credential, password }))
      if (data && data.errors) {
        setErrors(data.errors);
        setIsLoaded(false)
        return data
      }
      await dispatch(eventActions.getEvents(data.id))
      setIsLoaded(true)
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
              onClick={() => {
                setLogin(false)
              }}
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

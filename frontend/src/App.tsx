import React, { useState, useEffect, useRef } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import NavBar from "./components/navbar";
import Home from "./components/home";
import LoginForm from "./components/login/login-form";

export interface AppProps {
  useAppSelector:any,
  useAppDispatch:any
}

const App: React.FC<AppProps> = ({useAppSelector,useAppDispatch}) => {
  const dispatch = useAppDispatch
  const [isLoaded, setIsLoaded] = useState(false);;
  const user = useRef(null);
  useEffect(() => {
    async function getUser() {
      const response = await dispatch(sessionActions.restoreUser())
      if (response.ok) {
        user.current = response.user;
        setIsLoaded(true);
      } else {
        console.log(response)
      }
    }
    getUser();
  }, [dispatch]);

  const reactStyles = {
  container: {
    backgroundColor: "var(--main-bg-color)",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
  },
  appBody : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 1,
    padding: 1,
    backgroundColor: "var(--secondary-bg-color)",
    width: "97%",
    height: "95%"
  },
}
  return (
    <>
      <NavBar isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
      <div style={reactStyles.container}>
        <div style={reactStyles.appBody}>
          <Switch>
            <Route path="/login">
              <LoginForm setLogin={setIsLoaded} useAppDispatch={useAppDispatch} useAppSelector={useAppSelector} />
            </Route>
            <Route path="/" exact>
              <Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} useAppDispatch={useAppDispatch} useAppSelector={useAppSelector} />
            </Route>
            <Route path="/">
              <div style={{textAlign:"center"}}>
                <div>404 Page does not exist</div>
                <NavLink to="/" title="home">Home</NavLink>
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
}

export default App;

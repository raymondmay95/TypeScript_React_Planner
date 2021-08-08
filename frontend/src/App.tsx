import React, { useState, useEffect, useRef } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import NavBar from "./components/navbar";
import Home from "./components/home";
import LoginForm from "./components/login/login-form";
import Daily from "./components/calender/daily"

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

  //TODO: Move this to a module.css file and import it
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
          <Switch>
            {/* ---------- Login Page ------------ */}
            <Route path="/login">
              <div style={reactStyles.container}>
                <div style={reactStyles.appBody}>
                  <LoginForm setLogin={setIsLoaded} useAppDispatch={useAppDispatch} useAppSelector={useAppSelector} />
                </div>
              </div>
            </Route>
            {/* ---------- Login Page ------------ */}
            {/* ---------- Daily Calender ------------ */}
            <Route path="/daily/:day">
              <Daily />
            </Route>
            {/* ---------- Daily Calender ------------ */}
            {/* ---------- Home Page  ------------ */}
            <Route path="/" exact>
              <div style={reactStyles.container}>
                <div style={reactStyles.appBody}>
                  <Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} useAppDispatch={useAppDispatch} useAppSelector={useAppSelector} />
                </div>
              </div>
            </Route>
            {/* ---------- Home Page  ------------ */}
            {/* ---------- 404 Page  ------------ */}
            <Route path="/">
              <div style={{textAlign:"center"}}>
                <div>404 Page does not exist</div>
                <NavLink to="/" title="home">Home</NavLink>
              </div>
            </Route>
            {/* ---------- 404 Page  ------------ */}
          </Switch>
    </>
  );
}

export default App;

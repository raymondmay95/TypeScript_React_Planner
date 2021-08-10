import React, { useState, useEffect, useRef } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import * as eventActions from "./store/events";
import NavBar from "./components/navbar";
import Home from "./components/home";
import LoginForm from "./components/login/login-form";
import Daily from "./components/calender/daily"
import Monthly from "./components/calender/monthly";
import { useDispatch } from "react-redux";


const App: React.FC = () => {
  const dispatch = useDispatch()
  const [isLoaded, setIsLoaded] = useState(false);;
  const user = useRef(null);
  useEffect(() => {
    async function getUser(): Promise<void> {
      let __user = await dispatch<any>(sessionActions.restoreUser())
      if (__user) {
        user.current = __user;
        await dispatch(eventActions.getEvents(__user.id))
        setIsLoaded(true);
      } else {
        console.log("no user found")
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
                  <LoginForm setLogin={setIsLoaded} setIsLoaded={setIsLoaded} />
                </div>
              </div>
            </Route>
            {/* ---------- Login Page ------------ */}
            {/* ---------- Daily Calender ------------ */}
            <Route path="/daily/:day">
              <Daily />
            </Route>
            {/* ---------- Daily Calender ------------ */}
            {/* ---------- Daily Calender ------------ */}
            <Route path="/month/:month">
              <Monthly />
            </Route>
            {/* ---------- Daily Calender ------------ */}
            {/* ---------- Home Page  ------------ */}
            <Route path="/" exact>
              <div style={reactStyles.container}>
                <div style={reactStyles.appBody}>
                  <Home isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
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

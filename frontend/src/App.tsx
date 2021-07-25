import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/home';
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

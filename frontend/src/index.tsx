import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
  }
}

const Root: React.FC = () => {
  return (
    <div style={reactStyles.container}>
      <div style={reactStyles.appBody}>
        <App />
      </div>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

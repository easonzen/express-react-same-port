import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState({
    username: [],
  });
  const getUserName = useCallback(() => {
    axios.get("/username").then((res) => {
      setState({
        ...state,
        username: res.data.username,
      });
    });
  }, [state]);

  useEffect(() => {
    getUserName();
  }, [getUserName]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {state.username}
        </a>
      </header>
    </div>
  );
}

export default App;

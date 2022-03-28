import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

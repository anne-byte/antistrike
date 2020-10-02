import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Employees from './employees';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Codex</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
          <Link className="nav-link" to="/">Employees</Link>
          </li>
          </ul>
          </div>
        </nav>
        <Switch><Route path="/"><Employees /></Route></Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

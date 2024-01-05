import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Expense from "./components/Expense";
import Members from "./components/Members";
import Error from "./components/Error";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/expense" component={Expense} />
          <Route path="/members" component={Members} />
          <Route path="/*" component={Error} />
        </Switch>
      </Router>
    </>
  );
};

export default App;

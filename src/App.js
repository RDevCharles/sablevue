import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavBar";
import About from "./screens/AboutScreen";
import Submit from "./screens/SubmitScreen";
import Privacy from "../src/screens/Privacy";
import DealsScreen from "./screens/DealsScreen";

const App = () => {
  return (
    <div>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/submit" component={Submit} />
          <Route path="/about" component={About} />
          <Route path="/submit" component={Submit} />
          <Route path="/deals" component={DealsScreen} /> 
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

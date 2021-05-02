import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavBar";
import About from "./screens/AboutScreen";
import Submit from "./screens/SubmitScreen";
import Wishlist from "../src/screens/WishList";
import Privacy from "../src/screens/Privacy";

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
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/privacy" component={Privacy} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

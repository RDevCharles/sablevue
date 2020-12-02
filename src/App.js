import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/NavBar";
import About from "./screens/AboutScreen";
import Submit from "./screens/SubmitScreen";
import Wishlist from "../src/screens/WishList";
import TestScreen from "../src/screens/TestScreen"


const App = () => {
  return (
    <div style={stylesMain.mainColors}>
      <Router>
        <NavMenu />
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/submit" component={Submit} />
                  <Route path="/about" component={About} />
          <Route path="/submit" component={Submit} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/test" component={TestScreen} />
        </Switch>
      </Router>
    </div>
  );
};

const stylesMain = {
  mainColors: {
    // background-color: #923cb5;
    // background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%);
  }
};
export default App;

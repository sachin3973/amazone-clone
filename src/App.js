import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Wishlist from "./Wishlist";
import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only runs when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      if (auth) {
        //  the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      {/* BEM convention */}
      <div className="app">
        {/* If you want to render the same like here header component on every page you can pull that component out of Switch and save yourself some time */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/wishlist">
            <Header />
            <Wishlist />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          {/* Make sure your default route is at the bottom otherwise it won't work */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

        {/* Home */}
      </div>
    </Router>
  );
}

export default App;

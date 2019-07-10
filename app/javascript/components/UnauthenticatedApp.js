import React from "react";
import PropTypes from "prop-types";
import { Button, Nav, NavItem, NavLink, Navbar } from "reactstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import home_screen from "../images/home_screen.png";
import movie from "../images/movie.jpeg";
import { Parallax, Background } from "react-parallax";

import Home from "./pages/Home";
import Invitations from "./pages/Invitations";
import Profile from "./pages/Profile";
import { width } from "window-size";

class UnauthenticatedApp extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className="insideStyle">
            <p className="loginSignUp">Movie Choices Made Simple</p>
            <Button className="bttn" outline href="/users/sign_up">
              Register
            </Button>
          </div>
        </section>

        <section>
          <div className="insideStyle">
            <p className="loginSignUp">Already a User?</p>
            <Button
              className="bttn"
              outline
              color="secondary"
              href="/users/sign_in"
            >
              Log-In
            </Button>
            <div style={{ border: "1px solid gray" }}>
              <p>test login list</p>
              <div style={{ border: "1px solid gray" }}>
                <p>test@test.com</p>
                <p>janedoe@test.com</p>
                <p>wonder@gmail.com</p>
                <p>password : 123456</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default UnauthenticatedApp;

import React, { Component } from "react";
import "./Nav.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
         <ul>
          <li className="itemLeft"><img src={require("../../images/spinaltap.jpeg")} alt="Spinal Tap" height="150px"/></li>
          <li className="itemCenter">Win the game by clicking all 12 images without clicking the same image twice.</li>
          <li className="itemRight">Score: {this.props.score}</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
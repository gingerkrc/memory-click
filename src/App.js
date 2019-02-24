import React, { Component } from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import spinaltap from "./spinaltap.json";
import "./App.css";

class App extends Component {
  state = {
    spinaltap,
    clickedSpinalTap: [],
    score: 0
  };

imageClick = event => {
    const currentspinalTap = event.target.alt;
    const spinalClicked =
      this.state.clickedSpinalTap.indexOf(currentspinalTap) > -1;

    if (spinalClicked) {
      this.setState({
        spinaltap: this.state.spinaltap.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedSpinalTap: [],
        score: 0
      });
        alert("You clicked the same image twice. Better luck next time.");
    } else {
      this.setState(
        {
          spinaltap: this.state.spinaltap.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedSpinalTap: this.state.clickedSpinalTap.concat(
            currentspinalTap
          ),
          score: this.state.score + 1
        },
 () => {
          if (this.state.score === 12) {
            alert("You did it!");
            this.setState({
              spinaltap: this.state.spinaltap.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedSpinalTap: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Nav 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.spinaltap.map(spinaltap => (
            <Card
              imageClick={this.imageClick}
              id={spinaltap.id}
              key={spinaltap.id}
              image={spinaltap.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;


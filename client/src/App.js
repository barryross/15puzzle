import React, { Component } from 'react';
import Puzzle from './Puzzle'
import 'semantic-ui-css/semantic.min.css'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
				<header>
					<h1>Random 15 Puzzle Challenge</h1>
					<h3>Move the pieces so that the black square ends up in the bottom-right corner.  Toggle the "reference image" for help!</h3>
					<p>The images used in the puzzles are randomly pulled from <a href="https://unsplash.com/">Unsplash's api</a></p>
				</header>
				<section className="Gameboards-container">
					<Puzzle/>
				</section>
      </div>
    );
  }
}

export default App;

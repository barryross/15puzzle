import React, { Component } from 'react';
import Puzzle from './Puzzle'
import 'semantic-ui-css/semantic.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
				<section className="Gameboards-container">
					<Puzzle/>
					{/* <Puzzle/>
					<Puzzle/> */}
				</section>
      </div>
    );
  }
}

export default App;

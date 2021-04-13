import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      clicks: 0
    }
  }

  clickText () {
    if (this.state.clicks === 1) {
      return `Clicked 1 time `
    }
    return `Clicked ${this.state.clicks} times`
  }

  render() {
    return (
      <div className="App">
        <main>
          <h2>Clicker App</h2>
          <p>{this.clickText()}</p>
          <button 
            onClick={event => this.setState({ clicks: this.state.clicks + 1 })}
            >
              Click me!
            </button>
        </main>
      </div>
    );
  }
}

export default App;

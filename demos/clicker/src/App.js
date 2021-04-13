import React, { useState } from "react";
import "./App.css";

// Moved export default keywords to top of
// function component definition
export default function App() {
  // constructor() {
  //   super()
  //   this.state = {
  //     clicks: 0
  //   }
  // }

  // Lines 5-10 are replated with the useState()
  // React hook!
  const [clickText, setClickText] = useState(0);

  // clickText () {
  //   if (this.state.clicks === 1) {
  //     return `Clicked 1 time `
  //   }
  //   return `Clicked ${this.state.clicks} times`
  // }

  // lines 16-21 are replaced with an arrow function
  // instead of a method definition
  const handleClickText = () => {
    if (clickText === 1) {
      return <p>Clicked {clickText} time</p>;
    }
    return <p>Clicked {clickText} times</p>;
  };

  // render() {
  //   return (
  //     <div className="App">
  //       <main>
  //         <h2>Clicker App</h2>
  //         <p>{this.clickText()}</p>
  //         <button
  //           onClick={event => this.setState({ clicks: this.state.clicks + 1 })}
  //           >
  //             Click me!
  //           </button>
  //       </main>
  //     </div>
  //   );
  // }

  // lines 34-38 are replaced with a return because we
  // converted our component to a function and no londer
  // need a render method
  return (
    <div className="App">
      <main>
        <h2>Clicker App</h2>
        {/* <p>{this.clickText()}</p> */}
        {/* Lin 56 is replaced with a function call to render correct count */}
        {handleClickText()}
        <button onClick={() => setClickText(clickText + 1)}>Click me!</button>
      </main>
    </div>
  );
}

// export default App; <--- this now lives at the beginning
// of our fucntion definition

//No change.

import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// import React, { Component } from "react";
// import "./App.css";
// import { BrowserRouter } from "react-router-dom";
// import Main from "./components/Main";

// class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
        
//           <Main />
        
//       </BrowserRouter>
//     );
//   }
// }

// export default App;


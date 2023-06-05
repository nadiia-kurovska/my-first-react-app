import React from "react";
import Greeting from './components/Greeting';
import Header from './components/Header';
import Review from './components/Review';

class App extends React.Component {
  render(){
    return (
    <div>
      <Header />
      <Greeting name='User' />
      <Review />
    </div>
    )
  }
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
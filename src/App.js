import React from 'react';
import './App.css';
import { Switch,Route, HashRouter } from 'react-router-dom'
import About from './views/About';
import Home from './views/Home';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route component={Home} exact path="/"/>
          <Route component={About} path="/about"/>
        </Switch>
      </HashRouter>
    )
  }
}

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

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./views/components/Button/Button.css"
import ButtonUI from "./views/components/Button/Button"
import {Route, Switch, withRouter} from "react-router-dom"

class App extends React.Component{
  render(){
    return (
      <div >
        <h1>App Js</h1>
        <div className="custom-btn custom-btn-outlined"> Button </div>
        <div className="custom-btn custom-btn-contained"> Button </div>
        <ButtonUI type="contained">Button</ButtonUI>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div >
//       <h1>App Js</h1>
//       <div className="custom-btn custom-btn-outlined"> Button </div>
//       <div className="custom-btn custom-btn-contained"> Button </div>
//       <ButtonUI type="contained">Button</ButtonUI>
     
    
//     </div>
//   );
// }

export default withRouter(App);

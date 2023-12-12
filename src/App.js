import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import SignIn from './components/SignIn/SignIn.js'

class App extends Component{

  render(){
    return(
      <div>
      <h1>Log It!</h1>
     <Navigation/>
     <SignIn/>
      </div>
    )
  }
}


export default App;

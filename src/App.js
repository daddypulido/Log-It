import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import SignIn from './components/SignIn/SignIn.js'
import Register from './components/Register/Register.js';
import Profile from './components/Profile/Profile.js';




class App extends Component{
  constructor(){
    super()
    this.state = {
      route:'',
      isSignedIn:false
    }
  }



onRouteChange = (route) => {
  this.setState({ route });

  // If the route is 'profile', set isSignedIn to true
  if (route === 'profile') {
    this.setState({ isSignedIn: true });
  } else {
    this.setState({ isSignedIn: false });
  }
};


render () {
  const {route, isSignedIn} = this.state
  return (
    <div className='App'>
     <h1 style={{color:"white"}}>Log It!</h1>
     <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {(() => {
        if (this.state.route === 'signin') {
          return (
            <div>
     <SignIn  isSignedIn={this.state.isSignedIn} currentLog={this.state.route} onRouteChange={this.onRouteChange}/>
</div>
)
        } else if (this.state.route === 'register') {
          return (
     <Register isSignedIn={this.state.isSignedIn} currentLog={this.state.route} onRouteChange={this.onRouteChange}/>
)
        }  else if(this.state.route ==='profile'){
          return(
            <Profile  isSignedIn={this.state.isSignedIn}/>
            )
        }
      })()}
    </div>
  )
}
}
export default App;

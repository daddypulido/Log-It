import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation.js'
import SignIn from './components/SignIn/SignIn.js'
import Register from './components/Register/Register.js';


const initialState = {
  route:'',
  isSignedIn:false
}

class App extends Component{
  constructor(){
    super()
    this.state = initialState
  }

onRouteChange = (route)=>{
   if(route ==='signin'){
   this.setState({route:route})
  } else if(route === 'register'){
    this.setState({route:route})
    console.log(route)
  }
}

//   render(){
//     return(
//       <div className='App'>
//       <h1 style={{color:"white"}}>Log It!</h1>
//       <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>

//       {  this.state.route==='login' 
    
//          <SignIn isSignedIn={this.state.isSignedIn} currentLog={this.state.route} onRouteChange={this.onRouteChange}/>

//        <Register currentLog={this.state.route}/>
      


//       }
//       </div>
//     )
//   }
// }
render () {
  return (
    <div className='App'>
     <h1 style={{color:"white"}}>Log It!</h1>
    <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
      {(() => {
        if (this.state.route === 'signin') {
          return (
     <SignIn isSignedIn={this.state.isSignedIn} currentLog={this.state.route} onRouteChange={this.onRouteChange}/>
)
        } else if (this.state.route === 'register') {
          return (
     <Register currentLog={this.state.route}/>
)
        } 
      })()}
    </div>
  )
}
}
export default App;

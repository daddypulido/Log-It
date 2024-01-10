import React, {Component} from "react";
import 'tachyons';

class SignIn extends Component  {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password:''
    }
  }
  onEmailChange=(e) => {
    this.setState({email:e.target.value})
    console.log(e.target.value)
  }
  onPasswordChange = (e) => {
    this.setState({password:e.target.value})
    console.log(e.target.value)
  }


  
  render(){
   const {onRouteChange,currentLog,isSignedIn} = this.props

    return(

  <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-1 center">
      <main className="pa4 white-80">
<fieldset className="ba b--transparent ph0 mh0">
    <legend className="f1 fw6 ph0 mh0 white ">Log In</legend>
    <div className="mt3 ">
    <label className="db fw6 lh-copy f3 white" htmlFor="email-address">Email</label>
    <input
     className="pa2 input-reset ba bg-transparent hover-white w-80 white center"
     onChange={this.onEmailChange}
      type="email"
      name="email-address" 
      id="email-address"/>
    </div>

    <div className="mv3">
    <label className="db fw6 lh-copy f3 white" htmlFor="email-address">Password</label>
    <input
     className="pa2 input-reset ba bg-transparent hover-white w-80 white"
     onChange={this.onEmailChange}
      type="password"
      name="password" 
      id=""/>
    </div>

</fieldset>
<div className="">
  <input 
  onClick={()=> onRouteChange('profile')}
  className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
  type="submit" 
  value="Sign In"/>
</div>
<div className="lh-copy mt3">
  <p  className="f6 link dim white db pointer">Register</p>

</div>
</main>
</article>

    )
  }

  
   
}

export default SignIn; 
import React from "react";
import 'tachyons';



const Register = ({currentLog}) => {
  if(currentLog === 'register'){
    return (
      <div className="register" >
  <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-1 center">
      <main className="pa4 white-80">
<fieldset className="ba b--transparent ph0 mh0">



    <legend className="f1 fw6 ph0 mh0 white center">Register</legend>
    <div className="mt3">
    <label className="db fw6 lh-copy f3 white " htmlFor="email-address">Name</label>
    <input
     className="pa2 input-reset ba bg-transparent hover-white w-80 white"
      type="text"
      name="text" 
      id="name"/>
    </div>



    <div className="mt3">
    <label className="db fw6 lh-copy f3 white " htmlFor="email-address">Email</label>
    <input
     className="pa2 input-reset ba bg-transparent hover-white w-80 white"
      type="email"
      name="email-address" 
      id=""/>
    </div>

    <div className="mv3">
    <label className="db fw6 lh-copy f3 white" htmlFor="email-address">Password</label>
    <input
     className="pa2 input-reset ba bg-transparent hover-white w-80 white"
      type="password"
      name="password" 
      id="reg-password"/>
    </div>

</fieldset>
<div className="">
  <input 
  className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
  type="submit" 
  value="Register"/>
</div>

</main>
</article>
</div>
  )
  } else {
    return (
      <div className="register" style={{display:'none'}} >
  <article className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-1 center">
      <main className="pa4 white-80">
<fieldset className="ba b--transparent ph0 mh0">
    <legend className="f1 fw6 ph0 mh0 white center">Register</legend>
    <div className="mt3">
    <label className="db fw6 lh-copy f3 white " htmlFor="email-address">Email</label>
    <input
     className="pa2 input-reset ba bg-transparent hover-white w-60 white"
      type="email"
      name="email-address" 
      id="email-address"/>
    </div>

    <div className="mv3">
    <label className="db fw6 lh-copy f3 white" htmlFor="email-address">Password</label>
    <input
     className="pa2 input-reset ba bg-transparent hover-white w-60 white"
      type="password"
      name="password" 
      id="reg-password"/>
    </div>

</fieldset>
<div className="">
  <input 
  className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" 
  type="submit" 
  value="Register"/>
</div>

</main>
</article>
</div>
  )
  }
  
    
}
export default Register;
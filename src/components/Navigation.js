import React from "react";
import 'tachyons';





const Navigation = ({onRouteChange}) => {


    return (
        <div style={{ display: "flex",justifyContent: "center", gap: "50px"}}>
        <p onClick={()=>onRouteChange('signin') }  className=" f1 link dim shadow-3 ph3 pv2 mb2 dib white pointer">Log In</p>
        <p  onClick={()=>onRouteChange('register')}className="f1 link dim shadow-3 ph3 pv2 mb2 dib white pointer ">Register</p>
        <p className="f1 link dim shadow-3 ph3 pv2 mb2 dib white pointer ">Guest</p>
        </div>
    )

}


export default Navigation;

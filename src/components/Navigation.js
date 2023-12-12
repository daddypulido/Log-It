import React from "react";
import 'tachyons';


const buttonStyle = {
    borderRadius: "5px",
    boxShadow: "5px",
    borderStyle: "none",
    cursor: "pointer",
    padding: "14px 30px",
    fontSize: "30px",
    backgroundColor: "rgb(223, 207, 139)",
    hoverColor: "green"
}

const Navigation = () => {
    return (
        <div style={{ display: "flex",justifyContent: "center", gap: "50px"}}>
        <button className="f6 link dim br3 ba bw2 ph3 pv2 mb2 dib black" >Log In</button>
        <button style={buttonStyle}>Register</button>
        <button style={buttonStyle}>Guest</button>
        </div>
    )

}


export default Navigation;

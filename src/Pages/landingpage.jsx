import React from "react";
import "../pagesStyles/landingPageStyles.css"
import { Link } from "react-router-dom";

const LandingPage = () => {
    let displayWidth = window.innerWidth;
    const body = {
        width: { displayWidth }
    }
    return (
        < div className="main-container" style={body}>
            <div className="image-container">
                <img></img>
            </div>
            <div className="text-conatiner">
                <h1>Welcome<br /> to our Page</h1>
                <h2>Do you know who my uncle is</h2>

                <div className="register">
                    <Link to="registration"><button type="button" className="register-button" >Register</button></Link>
                </div>
            </div>
        </div >
    )
}

export default LandingPage;
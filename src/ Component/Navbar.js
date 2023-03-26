import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logouticon from './logout icon.png'


export default function Navbar(props) {

    console.log(props);
    
    const handleLogoutButton = () => {
        props.updateUser.LogoutButton();
        // console.log(props);

        console.log(" i was not in the city")



    }

    console.log("inside navbar " + JSON.stringify(props.updateUser.currentRole))
    let g = 1
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     
                        <button className="btn btn-dark shadow-none"> <img src={logouticon} alt="..." class=" btn-outline-success my-2 my-sm-0 " onClick={handleLogoutButton} /></button>
                        {/* </form> */}

                    </div>
                </div>
            </nav>
        </div>
    )
}

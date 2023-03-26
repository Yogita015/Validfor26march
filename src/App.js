import React from 'react'

import { useState } from 'react'

import A from './ Component/A';
import B from './ Component/B';
import MainLogin from './ Component/MainLogin';
import Severalpage from './ Component/Severalpage';
import Navbar from './ Component/Navbar';
import Boss from './ Component/Boss';
import './ Component/App.css'



function App() {

  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [currentempId, setcurrentempId] = useState("");




  const updateUser = (props) => {
    console.log(" ta ta ta ")
    console.log(JSON.stringify(props));




    setCurrentUser(props.userName);
    setCurrentRole(props.role);
    setcurrentempId(props.empId);


    console.log("current userName:" + JSON.stringify(currentUser));
    console.log("current role : " + JSON.stringify(currentRole));
    console.log("current empId : " + JSON.stringify(currentempId));


  }


  const changeLoginStatus = () => {


    setIsAuthenticated(true);


  }




  // this is for the button when the logout button that is present in the navbar is clicked
  const LogoutButton = () => {
    setIsAuthenticated(false);



  }

  return (
    <div>
      {
      isAuthenticated ? 
      <Severalpage currentRole={currentRole} currentUser={currentUser} LogoutButton={LogoutButton} /> :
          <MainLogin changeLoginStatus={changeLoginStatus} updateUser={updateUser} />
      }

    </div>

  )
}
export default App



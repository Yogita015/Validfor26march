import React from 'react'
import "./Profile.css";
import "./Admin.css";
import {  Link } from "react-router-dom";
import MyComponent from './MyComponent';
import Name from './Name';
export default function Home(props) {
    console.log(props.updateUser.currentRole);



    
  



    // console.log("yahan home me " + role);
    return (
        <div>
          {/*  <h1>Hello {props.updateUser.currentUser}</h1>
            <h1>Hello you are {props.updateUser.currentRole}</h1>*/}


<div  style={{marginTop:""}} >
        
        <html lang="en">
    
        <body>
        <div >
        <section id="sidebar">
            
            <ul class="side-menu top" >
                
                <a>
                    <i class='bx bxs-shopping-bag-alt' ></i> 
                    <h2>{props.updateUser.currentRole}</h2> 
                 </a>
                    
                
                <li class="active">
                    <a>
                        <i class='bx bxs-shopping-bag-alt' ></i>
                        <Link Link className="nav-link" aria-current="page" to="/profile"> My Profile</Link>
                    </a>
                </li>
                <li class="active">
                    <a>
                        <i class='bx bxs-doughnut-chart' ></i>
                        <Link className="nav-link" to="/settimetable">SetOwnTimeTable</Link> 
                    </a>
                </li>
                <li class="active">
                    <a>
                        <i class='bx bxs-doughnut-chart' ></i>
                         <Link className="nav-link" to="/seetimetable">ShowMyTimeTable</Link> 
                    </a>
                </li>
                <li class="active">
                    <a>
                        <i class='bx bxs-group' ></i>
                        <Link className="nav-link" to="/allUsers">ShowAllFaculty</Link>
                    </a>
                </li>
                <li class="active">
                    <a>
                        <i class='bx bxs-group' ></i>
                        <Link Link className="nav-link" aria-current="page" to="/requestleave">LeaveRequestForm</Link>
                    </a>
                </li>
                <li class="active">
                    <a>
                        <i class='bx bxs-group' ></i>
                        {/*<Link className="nav-link" to="/boss">Accept/Reject-Requests</Link> */}
                    </a>
                </li>
                <li>
                    <a>
                        <i class='bx bxs-message-dots' ></i>
                        {(props.updateUser.currentRole == "Admin") && (<li className="nav-item">
                        <Link className="nav-link" to="/setUser">Create  User</Link> 
                        <Link className="nav-link" to="/editusers">EditUsers</Link> </li>)}
                        </a>
                    
                </li>
                <li>
                    <a>
                        <i class='bx bxs-message-dots' ></i>
                        {(props.updateUser.currentRole == "Hod") && (<li className="nav-item">
                        <Link className="nav-link" to="/allrequestforhod">Requestfor Hod</Link>
                         <Link className="nav-link" to="/setarrangement">Set Arrangement</Link>  </li>)}
                        </a>
                    
                </li>
               
            </ul>
        </section>
        
    
    
    
        
      
        
        
    
        
        </div>
    
    </body>
    
    
    </html>
     </div>




          
        </div>
    )
}

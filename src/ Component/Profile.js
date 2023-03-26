import React from 'react'
import "./Profile.css";
import "./Admin.css";

export default function Profile(props) {
    console.log(props.updateUser.currentRole);


    // console.log("yahan home me " + role);
    return (
        <div>
          {/*  <h1>Hello {props.updateUser.currentUser}</h1>
            <h1>Hello you are {props.updateUser.currentRole}</h1>*/}


<div >




            <div>
        
<html lang="en">

<body>

<div class="wrapper">
    <div class="left">
        <img src="Femailicon.avif" 
        alt="user" width="100"/>
         <h1>{props.updateUser.currentUser}</h1>
         <h1>{props.updateUser.currentRole}</h1>
    </div>
    <div class="right">
      <div class="projects">
            <h3>Details</h3>
            <div class="projects_data">

               <ul>
                <li > <b>Email:</b> abc@123</li>
                <li > <b>Contact No:</b>123456789</li>
               
               </ul>
            </div>
        </div>
      
       
    </div>
</div>

</body>
</html>

      </div>


        </div>
        </div>
    )
}

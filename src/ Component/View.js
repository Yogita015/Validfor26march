import React, { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import axios from 'axios';
import "./View.css";




  const View=()=> {

    const [user, setUser]=useState({});

    const {id}=useParams();


    useEffect(()=>{
        axios
        .get(`http://localhost:3001/api/get/${id}`)
        .then((resp)=> setUser({...resp.data[0]}));
  
     }, [id]);


    return (
      <div style={{marginTop:"10px"}}>
         <div className="card">
            <div className="card-header">

              <p>User  Details</p>

            </div>

            <div className="container">

              <strong>ID:</strong>
              <span>{id}</span>
              <br/>
              <br/>


              <strong>FaculltyName:</strong>
              <span>{user.facultyName}</span>
              <br/>
              <br/>
              

              <strong>FaculltyDepartment:</strong>
              <span>{user.facultyDepartment}</span>
              <br/>
              <br/>

              <strong>facultyemail:</strong>
              <span>{user.facultyemail}</span>
              <br/>
              <br/>
              
              <strong>FacultyContactNo:</strong>
              <span>{user.ContactNo}</span>
              <br/>
              <br/>

              

              <Link to="./">
                 <button className="btn btn-edit">Go Back</button>
              </Link>
              

            </div>

         </div>
      </div>
    )
  }


export default View

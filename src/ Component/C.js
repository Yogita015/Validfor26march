import React, { Component } from 'react'

function C () {
  
 
    const [data, setData] = useState([]);
    const loadData =async()=>{
        const response=await axios.get("http://localhost:3001/api/get");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
   },[]);




    return (
      <div>
        {/*import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
    import "./Home.css";


    import axios from "axios";*/}

    <div style={{marginTop:"10px"}}>
       <div class="row" style={{ display:'', justifyContent:'', width:"100%", height:"80%"}}>
       <div class="col-sm-3">
        <div className="card">
         <table className="styled-table">
            <thead className="card-header">
                <tr>
                    <th style={{textAlign:"center"}}>SNo.</th>
                    <th style={{textAlign:"center"}}>FacultyCollegeId</th>
                    <th style={{textAlign:"center"}}>Name</th> 
                    <th style={{textAlign:"center"}}>Department</th> 
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>ContactNo</th>
                    <th style={{textAlign:"center"}}>Gender</th>
                    <th style={{textAlign:"center"}}>Role</th>
                    <th style={{textAlign:"center"}}>Date of Joining</th>
                                 
                </tr>
            </thead>
            <tbody className="container">
                {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <th  scope="row">
                                {index+1}
                            </th>
                            
                            <td className=" mb-3 ">{item.id}</td>
                            <td className="mb-3  ">{item.facultyName}</td>
                            <td className=" mb-3 ">{item.facultyDepartment}</td>
                            <td className=" mb-3 ">{item.facultyemail}</td>
                            <td className=" mb-3 ">{item.ContactNo}</td>
                            <td className=" mb-3 ">{item.Gender}</td>
                            <td className=" mb-3 ">{item.facultyControling}</td>
                           
                           
                            
                           

                        </tr>
                    )
                })}
            </tbody>
         </table>
         </div>
         </div>
         </div>
      </div>
   




      </div>
    )
  
}

export default C

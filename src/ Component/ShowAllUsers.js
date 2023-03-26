
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";



import axios from "axios";

export default function ShowAllUsers() {
   

    const [data, setData] = useState([]);
    const loadData =async()=>{
        const response=await axios.get("http://localhost:3001/api/get");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
   },[]);

    return (
        <div className='container'>
            <h1>Details of All Faculty</h1>
            <table class="table"  style={{ alignItems:"center", height:"100px", width: "80%", backgroundColor:""}}>
                <thead class="thead-dark">
                    <tr>
                    <th >SNo.</th>
                    <th >FacultyCollegeId</th>
                    <th >Name</th> 
                    <th >Department</th> 
                    <th >Email</th>
                    <th >ContactNo</th>
                    <th >Gender</th>
                    <th >Role</th>
                    <th >Date of Joining</th>
                    </tr>
                </thead>
                
            <tbody >
                {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                            <td >
                                {index+1}
                            </td>
                            
                            <td >{item.id}</td>
                            <td >{item.facultyName}</td>
                            <td>{item.facultyDepartment}</td>
                            <td >{item.facultyemail}</td>
                            <td >{item.ContactNo}</td>
                            <td>{item.Gender}</td>
                            <td >{item.facultyControling}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

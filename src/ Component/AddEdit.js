import { useState, useEffect } from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import{toast} from "react-toastify";




const initialState={
    facultyName:"",
    facultyDepartment:"",
    facultyemail:"",
    

};


 const AddEdit=()=> {
   const[state, setState]=useState(initialState);
   const {facultyName, facultyDepartment, facultyemail}=state;

   const history=useNavigate();
   const {id} = useParams();
   
   useEffect(()=>{
      axios
      .get(`http://localhost:5000/api/get/${id}`)
      .then((resp)=> setState({...resp.data[0]}));

   }, [id]);

   const handleSubmit=(e)=>{
      e.preventDefault();
      if(!facultyName || facultyDepartment || !facultyemail){
        toast.error("Please provide value into each input field");
      }else{
        if(!id){
          axios.post("http://localhost:3001/api/post", {
            facultyName,
            facultyDepartment,
            facultyemail,
              
          })
          .then(()=>{
            setState({facultyName:"", facultyDepartment:"", facultyemail:""})
          })
          .catch((err)=>toast.error(err.response.date));
          toast.success("contact Added successfully!");
        }else{
          axios.put(`http://localhost:3001/api/update/${id}`, {
            facultyName,
            facultyDepartment,
            facultyemail,
            
          })
          .then(()=>{
            setState({facultyName:"", facultyDepartment:"", facultyemail:""})
          })
          .catch((err)=>toast.error(err.response.date));
          toast.success("contact updated  successfully!");

        }
          setTimeout(() =>{history.push("/")}, 500);
      }
   };

   const handleInputChange=(e)=>{
    const {facultyName, value}=e.target;
    setState({...state, [facultyName]:value});
   };

    return (
      <div style={{marginTop:"100px"}}>
         <form style={{
            margin:"auto",
            padding:"15px",
            maxWidth:"400px",
            alignContent:"center"
         }} 

           onSubmit={handleSubmit}
         >
            <label htmlFor="name">FacultyName</label>
            <input
            type="text"
            id="name"
            name="name"
            placeholder="your Name....."
            value={facultyName || ""}
            onChange={handleInputChange}
             />


            
            <label htmlFor="facultyDepartment">FacultyDepartment</label>
            <input
            type="text"
            id="department"
            name="department"
            placeholder="your email....."
            value={facultyDepartment || ""}
            onChange={handleInputChange}
             />


            <label htmlFor="contact">FacultyEmail</label>
            <input
            type="email"
            id="email"
            name="email"
            placeholder="your contact No....."
            value={facultyemail || ""}
            onChange={handleInputChange}
             />



          <input type="submit" value={id ? "update":"save"}/>
          <Link to="/">
          <input type="button" value="Go Back"/>
          </Link>






         </form>
      </div>
    )
  }


export default AddEdit

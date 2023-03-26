import React, { useState, useEffect } from "react";
import MyComponent from "./MyComponent";
import axios from 'axios';
 function Boss(props)  {
    console.log(props.updateUser.currentUser);
    const [data, setData] = useState([]);
    const A=props.updateUser.currentUser;
  
    useEffect(() => {
        axios.get('http://localhost:3001/api/data')
          .then(response => setData(response.data))
          .catch(error => console.error(error));
      }, []); 
    return(
    
  <div>
    {data.map((item)=>{
                if(item.empId==props.updateUser.currentUser){
                    return(
                       
                        <MyComponent  />
                        )}
                    })}

  </div>

    )
  
}

export default Boss

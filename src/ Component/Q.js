import React, { useState, useEffect } from "react";
import axios from 'axios';
 function Boss(props)  {
    console.log(props.updateUser.currentUser);
    const [data, setData] = useState([]);
    const A=props.updateUser.currentUser;
    
    useEffect(() => {
      axios.get('http://localhost:3001/data')
        .then(response => setData(response.data))
        .catch(error => console.error(error));
    }, []); 
  
    
       
    

    return (
      <div className='container'>
    
        <table class="table">
        
    <thead class="thead-dark">
        <tr>
            
            <th scope="col">FacultyId</th>
        </tr>
    </thead>
    <tbody>


       <tr><td><h1>hello</h1></td></tr>
            
    {/*  {data.map((item,index)=>{
                    return(
                        <tr key={item.id}>
                        
                        <td >hello</td>

                           <td >
                                {index+1}
                            </td>


                              <section id="content">
            
            <main>
                <div class="head-title">
                    <div class="left">
                        <h1> Welcome {props.updateUser.currentUser}</h1>
                    </div>
                    
                </div>




-------------------------------->

=======================>
/* const handleApplyClick = async () =>  {
      fetch("http://localhost:3001/getEmpId").then(response=>response.json()).then(data=>this.state({empIds:data})).
      catch(error=>console.error(error)) ;// make an API call to fetch empId
     // const {empId} = response.data.empId; // get empId from response
      await Axios.post("http://localhost:3001/sendEmpId", { empId }); // make another API call to send empId to other table
      console.log("EmpId sent successfully!");
  

       {/* Axios.post("http://localhost:3001/sendEmpId", {
           
        }).then(() => {
            alert("successfull insert");

        })

    
  };
=======================>
 app.get("/getEmpId", (req, res) => {
            // fetch empId from other table and send it in the response
           // const empId = sql; // replace with your code to fetch empId from other table
            db.query(sql,(error, result)=>{res.send({ result });})
            
          });
          //use map to insert each empId into other table using db driver or ORM
  
         app.post('/sendEmpId', async (req, res) => {
            // receive empId from frontend and send it to other table
             const empIds = [];
              

           // const empId = req.body.empId; // get empId from request body
            if (!Array.isArray(req.body)) {
                res.status(400).send('Invalid request body: empIds must be an array');
                return;
              }
              req.body.forEach((emp) => {
                empIds.push(emp.empId);
                   });
            
           // const values = empIds.map(empId => `(${empId})`).join(',');
           //use map to insert each empId into other table using db driver or ORM
            await Promise.all(empId.map(async (empId) => {
               await db.query( "INSERT IGNORE INTO request (empId) VALUES(?)", [empId]);
              }));
              res.send('EmpIds sent to other table successfully!'); 
           // const insertQuery = "INSERT IGNORE INTO request (empId) VALUES(?)";
            
          /*  db.query(insertQuery,[empIds],(error, result)=>{
                if(error){
                    console.log(error);
                }
                 // code to send empId to other table
            res.send("EmpId sent successfully!");
            })
           
          });
        

=========================>
  app.get('/api/get',(req, res)=>{
         db.query(sql, (error, results, fields) => {
           if (error) {
             console.error(error);
             return;
           }


        const data = results;
       // console.log(data);
       // res.send(data)

       results.forEach((row) => {
        const insertQuery = 'INSERT INTO request (empId) VALUES (?)';
      
        const values = [row.empId];
      
        db.query(insertQuery, values, (err, result) => {
          if (err) throw err;
      
          console.log(`Inserted ${result.affectedRows} row(s) into request.`);
        });
      });

        
       
  });


// Configure the app to use JSON parsing middleware
//const message="Accept/Reject";

// Define an endpoint to send messages to users
//app.post('/data', (req, res) => {
 // const { message, myarray } = req.body;
 //const myarray=[results];
 //const message="Accept/Reject";
  // Loop through the array of user IDs and send a message to each user
 // const data2=results;
  

  // Return a success response to the client
  //res.status(200).send('Message sent successfully');
})


                ----------------------->

              <div class="right">
      <div class="projects">
            <h3>Details</h3>
            <div class="projects_data">
                 <div class="data">
                    <h4>Recent</h4>
                    <p>Lorem ipsum dolor sit amet.</p>
                 </div>
                 <div class="data">
                   <h4>Most Viewed</h4>
                    <p>dolor sit amet.</p>
              </div>
            </div>
        </div>
                ---------------------->
    
                
            </main>
            
        </section>
                            
                            <td >{item.empId}</td>
                            <td>{props.updateUser.currentUser}</td>
                          
                            </tr>
                        )
                    })} */}

{props.empids.map(empId => (
            <EmployeeComponent key={empId} empid={empId} />
          ))}
                    
 
        
    
    </tbody>
</table>

      </div>
    )
  
}

export default Boss

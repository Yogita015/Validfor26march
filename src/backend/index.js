var db = require('./sqlCredentials')

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt')
const saltRound = 10


const mysql = require('mysql')
const app = express();

const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))



//to post the data from the form-->
app.post("/api/post", async (req,res)=>{
    const{id, facultyName,facultyDepartment, facultyemail, facultyPassword, Gender, ContactNo}=req.body;
    const sqlInsert="INSERT INTO allfaculty(id, FacultyName,facultyDepartment, facultyemail, facultyPassword, Gender, ContactNo) VALUE(?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlInsert,[id, facultyName, facultyDepartment, facultyemail, facultyPassword, Gender, ContactNo],(error, result)=>{
        if(error){
            console.log(error);
        }
    });

});



//To delete the users 

app.delete("/api/remove/:id",(req,res)=>{
    const{id}=req.params;
    const sqlRemove="DELETE FROM allfaculty WHERE  id=?";
    db.query(sqlRemove,id,(error, result)=>{
        if(error){
           
            console.log(error);
        }
       
    });
});



//to update the data of users
app.put("/api/update/:id", (req,res)=>{
    const{id} =req.params;
    const {facultyName, facultyDepartment, facultyemail, ContactNo}=req.body;
    const sqlUpdate="UPDATE allfaculty facultyName = ?, facultyDepartment, facultyemail = ?, ContactNo=?,  WHERE id = ?";
    db.query(sqlUpdate, [facultyName, facultyDepartment, facultyemail, ContactNo,  id], (error,result)=>{
        if(error){
            console.log(error);
        }
        
        res.send(result);
        
    });
 });
 


// to get the details of users in frontened
app.get("/api/get", (req,res)=>{
    const sqlGet="SELECT*FROM allfaculty";
    db.query(sqlGet,(error,result)=>{
        res.send(result);
    });
});
 
// to view the details of users
app.get("/api/get/:id", (req,res)=>{
    const{id} =req.params;
    const sqlGet="SELECT*FROM allfaculty WHERE id=?";
    db.query(sqlGet, id, (error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
    });
 });

// to get all the leave request for employee level 
app.get('/api/allRequestedLeave/:empId', (req, res) => {
    console.log(" i was executednnnn")



    const empId = req.params.empId;
    console.log("ss=" + empId);

    const sqlSelect = "select * from LeaveRequest where empId= ? ";

    db.query(sqlSelect, [empId], (err, result) => {
        if (err)
            console.log(err);
        else {

            res.send(result);
        }

    })

})
//---------------------------------------------------->




/*app.get('/data', (req, res) => {
    db.query(`SELECT empId
    FROM (
      SELECT empId, 'monday' AS source
      FROM monday
      WHERE nine = 'free'
      UNION ALL
      SELECT empId, 'tuesday' AS source
      FROM tuesday
      WHERE nine = 'free'
      UNION ALL
      SELECT empId, 'thrusday' AS source
      FROM thrusday
      WHERE nine = 'free'
    ) AS all_tables`, (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error retrieving data from database');
      } else {
        const formattedData = JSON.stringify(results);
        res.send(formattedData);
      }
    });
  }); */


  
 
  //const myarray=[results];
    
   


        const sql=`SELECT empId
        FROM (
          SELECT empId, 'monday' AS source
          FROM monday
          WHERE nine = 'free'
          UNION ALL
          SELECT empId, 'tuesday' AS source
          FROM tuesday
          WHERE nine = 'free'
          UNION ALL
          SELECT empId, 'thrusday' AS source
          FROM thrusday
          WHERE nine = 'free'
        ) AS all_tables`;

       
  //define your API endpoint
/*app.post('/sendEmpId', async (req, res) => {
          // Retrieve empId values from first table
 db.query(sql, (err, rows) => {
a    if (err) throw err;

    // Insert empId values into second table
    const empIds = rows.map(row => row.empId);
    const values = empIds.map(empId => `(${empId})`).join(',');
    const insertQuery = `INSERT INTO request (empId) VALUES ${values}`;
    db.query(insertQuery, (err) => {
      if (err) throw err;

      //console.log(`Inserted ${empIds.length} empId values into second_table`);
      //db.release();
    });
  });
});*/

        //=======>
      

// Define a route to retrieve all employee IDs from the database
/*app.get('/api/employees', async (req, res) => {
    try {
      const empId = await db.query('SELECT empId FROM request');
      res.json(empId);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });*/
  app.get("/api/data", (req,res)=>{
    const empId="SELECT empId FROM request";
    db.query(empId,(error,result)=>{
        if(error){
            console.log(error);
        }
        res.send(result);
       
    });
});



app.delete('/api/employees', (req, res) => {
    db.query('DELETE FROM request', (error, results) => {
      if (error) {
        console.error('Error deleting employees: ', error);
        res.status(500).json({ error: 'Error deleting employees' });
      } else {
        console.log('All employees deleted successfully.');
        res.status(200).json({ message: 'All employees deleted successfully.' });
      }
    });
  });
  
  
  

//---------------------------------------------------->Hod


  

// to get all the request from the table and serving to hod 
app.get('/api/AllRequestForHod', (req, res) => {
    const sqlSelectPending = "select * from LeaveRequest where status='pending' order by applicationDate desc";

    db.query(sqlSelectPending, (err, result) => {
        if (err)
            console.log(err);
        else {
            console.log("hod requesting is working")
            res.send(result);
        }

    })

})



// post request to insertLeave in the table 
app.post('/api/insertLeaveRequest', (req, res) => {

    const empId = req.body.empId;
    const department = req.body.department;
    const leaveType = req.body.leaveType;
    const applicationDate = req.body.applicationDate;
    const fromDate = req.body.fromDate;
    const toDate = req.body.toDate;
    const totalDays = req.body.totalDays;
    const reason = req.body.reason;


    // const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES ('4880', 'it', 'casual', '2022-03-03', '2022-03-03', '2022-03-03', 'huhuihigb iuhuig yhgygiyg y');";

    const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES (?,?,?,CURDATE(),?,?,?);";
    // db.query(leaveRequest, (err, result) => {
    db.query(leaveRequest, [empId, department, leaveType, fromDate, toDate, reason], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });
})


app.get('/', (req, res) => {

    res.send("This is not fair");

    console.log("i was executed");


})

app.listen(3001, () => {
    console.log("running on port 3001");
})

// to insert the time table of the given employee to the given day table name 

app.post('/api/setTimeTable', (req, res) => {

    const day = req.body.day;
    const empId = req.body.empId;
    const branch = "cse"
    const nine = req.body.nine;
    const ten = req.body.ten;
    const eleven = req.body.eleven;
    const twelve = req.body.twelve;
    const one = req.body.one;
    const two = req.body.two;
    const three = req.body.three;

    console.log(empId + " " + day + " " + branch + " " + nine + " " + ten + " " + eleven + " " + twelve + " " + one + " " + two + " " + three)

    const leaveRequest = "INSERT INTO LeaveRequest(empId, department, leaveType, applicationDate, fromDate, toDate, reason) VALUES ('4880', 'it', 'casual', '2022-03-03', '2022-03-03', '2022-03-03', 'huhuihigb iuhuig yhgygiyg y');";

    const setTimetbl = "INSERT INTO " + day + "(empId, branch,nine,ten, eleven, twelve, one,two , three) VALUES(?,?,?,?,?,?,?,?,?);";
    // db.query(leaveRequest, (err, result) => {
    db.query(setTimetbl, [empId, branch, nine, ten, eleven, twelve, one, two, three], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });
})

// to set the final verdict of hod on request in table
app.post('/api/setFinalVerdict', (req, res) => {
    const id = req.body.id;
    const cstatus = req.body.currentstatus;

    const leaveRequest = "UPDATE LeaveRequest SET status = ? WHERE (requestId = ?);"
    db.query(leaveRequest, [cstatus, id], (err, result) => {

        if (err)
            console.log(err);
        else
            res.send(result);
    });


    console.log("hello" + cstatus + id)
})

// to get the time table of employee it will be modified later with current empId

app.get('/api/seetimetable/:empId', (req, res) => {

    console.log("i was executed")

    const empId = req.params.empId;
    console.log("hello hello " + empId)

    const id = req.params.empId;
    const day = 'monday';
    const seeTimeTbl = "(select 'monday' as dday, nine, ten, eleven, twelve, one, two, three from monday where empId = ? union all select  'tuesday' as dday, nine, ten, eleven, twelve, one, two, three  from tuesday where empId = ? union all select  'wednesday' as dday, nine, ten, eleven, twelve, one, two, three  from wednesday where empId = ? union all select 'thursday' as dday, nine, ten, eleven, twelve, one, two, three  from thrusday where empId = ? union all select  'friday' as dday, nine, ten, eleven, twelve, one, two, three from friday where empId = ? union all select 'saturday' as dday, nine, ten, eleven, twelve, one, two, three from saturday where empId = ? )";
    db.query(seeTimeTbl, [id, id, id, id, id, id], (err, result) => {

        if (err)
            console.log(err);
        else {
            res.send(result);
            console.log('yyy')
        }
    });
    console.log(seeTimeTbl);
    console.log('h');
})


// Registartion section 
app.post('/api/setUser', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const role = req.body.role;

    bcrypt.hash(password, saltRound, (err, hash) => {
        if (err)
            console.log(err)



        const sqlRegister = "INSERT INTO loginPage (username,password,role) VALUES(?,?,?)";
        db.query(sqlRegister, [username, hash, role], (err, result) => {
            if (err)
                console.log(err)
            else {
                res.send(result);
                console.log(result)
            }
        })

    })

    // console.log(req.body);


})


//Login 
app.post('/api/login', (req, res) => {
    // console.log(req.body);
    const userName = req.body.username;
    const password = req.body.password;
    const status = req.body.status;

    const sqlLogin = "select * from loginPage where username = ? and role = ?"

    db.query(sqlLogin, [userName, status], (err, result) => {
        if (err) {
            // console.log("sql error")
            // console.log({ err: err });
        }

        if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
                if (response) {
                    res.send(result);
                }
                else {
                    // console.log("passoword error")
                    res.send({ message: "something went wrong" });
                }
            })
        }
        else {
            res.send({ message: "user doesn't exists" })
        }

    })

})


// to find the the current section he is teachign according to his time table 

app.post('/api/getTheSection', (req, res) => {


    const empId = req.body.empId;
    const lec = req.body.lec;
    const day = req.body.day;


    const sqlQuery = `select ${lec} from ${day} where empId=${empId}`
    // "select ? from ? where empId=?";


    db.query(sqlQuery, (err, result) => {
        if (err)
            console.log(err)
        else {
            res.send(result);
        }
    })


    console.log(req.body)
})




// get the teacher list for the arrangement 

app.post("/api/getArrangement", (req, res) => {

    const day = req.body.day;
    const lecture = req.body.lecture;
    const section = req.body.section;

    const query = `SELECT DISTINCT users.empId, users.name
    FROM monday
    INNER JOIN (
        SELECT empId FROM (
            SELECT empId, nine, ten, eleven, twelve, one, two, three FROM monday
            UNION ALL SELECT empId, nine, ten, eleven, twelve, one, two, three FROM tuesday
            UNION ALL SELECT empId, nine, ten, eleven, twelve, one, two, three FROM wednesday
            UNION ALL SELECT empId, nine, ten, eleven, twelve, one, two, three FROM thrusday
            UNION ALL SELECT empId, nine, ten, eleven, twelve, one, two, three FROM friday
            UNION ALL SELECT empId, nine, ten, eleven, twelve, one, two, three FROM saturday
        ) AS allTables
        WHERE nine = '4A' OR ten = '4A' OR eleven = '4A' OR twelve = '4A' OR one = '4A' OR two = '4A' OR three = '4A'
    ) AS matchedEmpIds
    ON monday.empId = matchedEmpIds.empId
    INNER JOIN users
    ON monday.empId = users.empId
    WHERE monday.nine = 'free';`

    db.query(query, (err, result) => {
        if (err)
            console.log(err)
        else {
            res.send(result);
        }
    })


})
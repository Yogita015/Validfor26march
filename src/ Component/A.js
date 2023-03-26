import React from 'react'

export default function A() {
    const [data, setData] = useState([]);
    
  useEffect(() => {
    axios.get('http://localhost:3001/data')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);
    return (
        <div>

<div>
<table class="table">
        
        <thead class="thead-dark">
            <tr>
                
                <th scope="col">FacultyId</th>
            </tr>
        </thead>
        <tbody>
    
    
            {data.map((val) => {
                return(
                    <tr>
                        
                       {/* <td>{val.empId}</td><p>Request come from the faculties--</p><button>Acceppt</button><button>Reject</button>*/}
                        <div>
                        <p type="text" value={message}> Accpet/ Reject</p>
                        {sendMessage}
          
                        </div>
                        
                    </tr>
                )
            })}
        </tbody>
    </table>
    
    
</div>


            <h1>This is a</h1>
            <Route exact path="/showrequest" element={<ShowRequests updateUser={props} />}></Route>
            <table class="table">
    <thead class="thead-dark">
        <tr>
            
            <th scope="col">resource</th>
        </tr>
    </thead>
    <tbody>


        {ShowRequests.map((val) => {
            return(
                <tr>
                    
                    <td>{val.empId}</td>
                    
                </tr>
            )
        })}
    </tbody>
</table>

        </div>
    )
}

function EmployeeComponent(props) {
    const [employeeData, setEmployeeData] = useState(null)
  
    useEffect(() => {
      fetch(`/api/employee/${props.empid}`)
        .then(response => response.json())
        .then(data => setEmployeeData(data))
    }, [props.empId])
  
    if (!employeeData) {
      return <div>Loading...</div>
    }
  
    return (
      <div>
        <h2>hii{employeeData.empId}</h2>
        
      </div>
    )
  }
  export default EmployeeComponent;
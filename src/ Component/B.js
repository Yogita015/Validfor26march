import React from 'react'

export default function B() {
    return (
        <div>
            <h1>this is B</h1>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link Link className="nav-link" aria-current="page" to="/requestleave">RequestLeave</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/allleaverequest">AllLeaveRequest</Link> </li>
                            
                            <li className="nav-item"> <Link className="nav-link" to="/settimetable">SetTimeTable</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="/allrequestforhod">Requested Leave (only for hod)</Link> </li>
                            <li className="nav-item"> <Link className="nav-link" to="/seetimetable">See Time Table</Link> </li>
                            
                            
                            <li className="nav-item"> <Link className="nav-link" to="/setarrangement">Set Arrangement</Link> </li>

                            {/* here condition is checked whether the current user is admin or not if the user is admin then only he or she be able to create new user */}
                            {(props.updateUser.currentRole == "Admin") && (<li className="nav-item">
                                 <Link className="nav-link" to="/setUser">Set User</Link> </li>)}


                        </ul> 

                        {/* <form class="form-inline my-2 my-lg-0"> */}

        </div>
    )
}

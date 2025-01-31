import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logincontext from '../utilities/LoginContext'



const Navigationbar = () => {
    const {user,privilage}=useContext(Logincontext);
   const navigate=useNavigate();
   const permission=privilage(user);

    

  return (
        <div className=" container-fluid  ">
            <div className="row ">
                <div className="col d-flex flex-wrap align-content-center p-0">
                    <ul >
                        <NavLink  className='btn'to='/Home'>Home</NavLink>
                        <NavLink className='btn'to='/Location'>Location</NavLink>
                        <NavLink className='btn'to='/wifi'>Home-Wifi</NavLink>
                        {permission==="developer"||permission==="admin"||permission==="member"?<NavLink className='btn'to='/notesmain'>GroceryLists</NavLink>:null}
                        {/* logic to check the privilage now stuck for privilage not assigned in userlist.js */}
                        {permission==="developer" && <NavLink className='btn'to='/dashboard'>Dashboard</NavLink>}
                        <NavLink className="text-muted">spare</NavLink>
                    </ul>
                </div>
                <div className="col-2 align-content-center d-inline">
                    <p>{user}</p>
                    <button className="btn btn-transparent" onClick={()=>navigate("/")}>Logout</button>
                </div>
            </div>
        </div>
  )
}

export default Navigationbar
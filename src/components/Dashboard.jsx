import React from 'react'
import users from '../utilities/userslist';


const Dashboard = () => {
  
  return (
    <>
      {/* {renderusers} */}
      {users.map((user)=>{
        return(
        <div>
          <h4>User: {user.name}</h4>
          <label for="access">Access Type</label>
          <input type="text" name="access" value={user.access} readOnly />
        </div>)
        })}
    </>
  )
}

export default Dashboard
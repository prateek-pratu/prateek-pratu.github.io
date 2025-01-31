import React, { useContext } from 'react'
import Logincontext from '../utilities/LoginContext'

const Wifi = () => {
  const {user,privilage}=useContext(Logincontext)
  return (
    <>
      <div className="col-6 d-flexbox justify-content-center border ">
        <h1 className='text-center'>Wifi Password</h1>
        {/* display only for developer level access */}
        {privilage(user)==="developer" && 
        <div>
          <h4>Wifi config page : 192.168.0.1</h4>
          <label for="pagepwd"> Login pwd</label>
          <input type='text' name="pagepwd" value={"act@123"}/>
        </div>}
        {/* display only for admin and developer level access */}
        {privilage(user)==="admin" || privilage(user)==="developer"?
        <div>
          <label for="5GHz">Tom</label>
          <input type="text" name="5GHz" id="5G" value={"23113119"} readOnly />
        </div>
        : null}
        {/* display for all users */}
        <div>
          <label for="2.4GHz"> Jerry</label>
          <input type="text" name="2.4GHz" id="4G" value={"aprsepdec"} readOnly />
        </div>
        
        </div>
    </>
  )
}

export default Wifi
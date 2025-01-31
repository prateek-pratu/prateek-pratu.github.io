import React, { useContext, useState } from 'react'
import Logincontext from '../utilities/LoginContext'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const {updateuser}=useContext(Logincontext);
    const [name,setName]=useState("");
    const navigate=useNavigate();
  return (
    <>
        <div className="container hig-50 align-items-center" >
            <div className="row d-flex justify-content-center hig-50">
                <div className="col-5 d-flex border border-dark rounded-4 justify-content-center align-items-center ">
                    
                    <input type="text" onChange={(event)=>{setName(event.target.value)}} placeholder='username' value={name}/>
                    <div className='d-block'>
                        <button className="btn btn-info " 
                        onClick={()=>{
                            updateuser(name)
                            navigate('/home')
                            setName("")
                            }}>
                                Login</button>
                                
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
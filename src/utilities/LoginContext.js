import { createContext, useState } from "react";
import details from './userslist.js'

const Logincontext=createContext();
function LoginProvider({children}){
    const[user,setUser]=useState("");
    const[pratu,msk,bmk,pinky]=details;

    const logincredentials={
        user,
        updateuser: (name)=>{setUser(name);},
        privilage:(name)=>{
            const permission={
                "pratu":pratu.access,
                "pinky":pinky.access,
                "bmk":bmk.access,
                "msk":msk.access
            }
            
            return permission[name]|| "guest"
        }
    }

    return(
        <Logincontext.Provider value={logincredentials}>
            {children}
        </Logincontext.Provider>
    )
}

export {LoginProvider};
export default Logincontext;
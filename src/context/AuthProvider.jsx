import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/Localstorage";

export const AuthContext=createContext()

const AuthProvider=({children})=>{
    // localStorage.clear()
    const [userData,setuserData]=useState(null)
    useEffect(()=>{
        const {employees}=getLocalStorage()
        setuserData(employees)
    },[])
    return <div>
        <AuthContext.Provider value={[userData,setuserData]}>
            {children}
        </AuthContext.Provider>
    </div>
}

export default AuthProvider
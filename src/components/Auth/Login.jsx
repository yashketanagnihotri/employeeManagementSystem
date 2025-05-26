import React, { useEffect, useState } from "react";

const Login=({handleLogin})=>{
    // alert("email:admin@me.com/e@e.com password:123")
        useEffect(() => {
        alert("email:admin@me.com/e@e.com password:123");
    }, []);
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }
    return(
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 rounded-xl p-20">
                <form onSubmit={(e)=>{submitHandler(e)}}
                 className="flex flex-col items-center justify-center">
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    required className="outline-none border-2 border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400" type="email" placeholder="Enter your email" />
                    <input 
                     value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required className="outline-none border-2 border-emerald-600 rounded-full py-3 px-5 text-xl mt-3 placeholder:text-gray-400" type="password" placeholder="enter password" />
                    <button className="mt-5 outline-none border-none bg-emerald-600 rounded-full py-3 px-5 text-x">Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
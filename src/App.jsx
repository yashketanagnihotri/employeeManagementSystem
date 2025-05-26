import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/dashboard/EmployeeDashboard';
import AdminDashboard from './components/dashboard/AdminDashboard';
import { setLocalStorage } from './utils/Localstorage';
import { AuthContext } from './context/AuthProvider';
import Header from './components/other/Header';
const App=()=>{
    // alert("email:admin@me.com/e@e.com password:123")
  

  const [user,setUser]=useState(null)
  const [loggedInUserData,setloggedInUserData]=useState(null)
  const [userData,setUserData]=useContext(AuthContext)
    useEffect(() => {
    setLocalStorage();
  }, []);
  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
    }
  },[])
  // useEffect(()=>{
  //   if (authData){
  //     const loggedInUser=localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData]);
  const handleLogin=(email,password)=>{
    if(email=="admin@me.com"&& password=="123"){
      setUser('admin')
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee=userData.find((e)=>email==e.email && e.password==password)
      if (employee){
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem("loggedInUser",JSON.stringify({role:'employee',data:employee}))
      }

    }
    else{
      alert("invalid Credential")
    }
  }



  return (
    <>
      {/* {!user && <Login handleLogin={handleLogin} />}
      {user == 'admin' && <AdminDashboard />}
      {user == 'employee' && <EmployeeDashboard />} */}
      {!user?<Login handleLogin={handleLogin}/> : ""}
      {user=='admin'?<AdminDashboard changeUser={setUser}/>:(user=='employee'?<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />: null)}
    </>
  );
}
export default App;
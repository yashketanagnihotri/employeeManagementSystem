import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask=()=>{
    const [userData,setUserData]=useContext(AuthContext)
    return(
        <div id="AllTask"className="bg-[#1c1c1c] p-5 mt-5 rounded  ">
            <div className="bg-red-600 px-4 py-2  mb-2 flex justify-between rounded">
                <h2 className="w-1/5 ">Employee Name</h2>
                <h3 className="w-1/5 ">New Task</h3>
                <h5 className="w-1/5 ">Active Task</h5>
                <h5 className="w-1/5 ">Completed Task</h5>
                <h5 className="w-1/5 ">Failed Task</h5>
            </div>
            <div className=" overflow-auto">
                {userData.map(function(elem,idx){
                
                return(
                    <div key={idx} className="bg-[#1c1c1c] border-emerald-500 border-1 px-4 py-2  mb-2 flex justify-between rounded">
                    <h2 className="w-1/5 text-white">{elem.firstName}</h2>
                    <h3 className="w-1/5 text-blue-600">{elem.taskCounts.active}</h3>
                    <h5 className="w-1/5 text-yellow-400">{elem.taskCounts.pending}</h5>
                    <h5 className="w-1/5 text-green-600">{elem.taskCounts.completed}</h5>
                    <h5 className="w-1/5 text-red-600">{elem.taskCounts.failed}</h5>
                    </div>
                )
                })}
            </div>  
        </div>
    )
}
export default AllTask;
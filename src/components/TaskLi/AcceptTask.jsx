import React from "react";

const AcceptTask=({data})=>{
    return(
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
         <div className="flex justify-between items-center">
            <h3 className="bg-red-600 px-3 py-1 rounded text-sm">{data.category}</h3>
            <h4 className="text-sm">{data.taskDate}</h4>
        </div>
            <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
            <p className="text-sm mt-2">{data.taskDesc} </p>
        <div className="flex justify-between mt-4">
            <button className="bg-green-400  rounded py-1 px-2 text-sm">Mark as Completed</button>
            <button className="bg-red-700 rounded py-1 px-2 text-sm">Mark as Failed</button>
        </div>
    </div>
    )
}

export default AcceptTask;
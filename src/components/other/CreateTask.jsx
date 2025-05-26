import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask=()=>{
    const [userData,setUserData]=useContext(AuthContext)

    const [taskTitle,setTaskTitle]=useState('')
    const [taskDescription,setTaskDescription]=useState('')
    const [taskDate,setTaskDate]=useState('')
    const [assignTo,setAssignTo]=useState('')
    const [category,setCategory]=useState('')
    const [newTask,setNewTask]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault()

        setNewTask({taskDate,taskDescription,taskTitle,category,active:false,newTask:true,failed:false,completed:false})

        const data=userData

        data.forEach(function(elem){
            if(assignTo==elem.firstName){
                elem.tasks.push(newTask)
                elem.taskCounts.active=elem.taskCounts.active+1
            }
        })
        setUserData(data)
        console.log(data)

        setAssignTo('')
        setCategory('')
        setNewTask('')
        setTaskTitle('')
        setTaskDate('')
        setTaskDescription('')
    }
//     const submitHandler = (e) => {
//     e.preventDefault();

//     // Create the new task object here
//     const task = {
//         taskDate,
//         taskDescription,
//         taskTitle,
//         category,
//         active: false,
//         newTask: true,
//         failed: false,
//         completed: false,
//     };

//     // Create a new userData array with updated tasks for the assigned employee
//     const updatedUserData = userData.map((elem) => {
//         if (assignTo === elem.firstName) {
//             return {
//                 ...elem,
//                 tasks: [...(elem.tasks || []), task],
//                 taskCounts: {
//                     ...elem.taskCounts,
//                     active: (elem.taskCounts?.active || 0) + 1,
//                 },
//             };
//         }
//         return elem;
//     });

//     setUserData(updatedUserData);
//     console.log(updatedUserData)

//     // Reset form fields
//     setAssignTo('');
//     setCategory('');
//     setTaskTitle('');
//     setTaskDate('');
//     setTaskDescription('');
// };
    return(
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded ">
                <form onSubmit={(e)=>{submitHandler(e)}} className="flex flex-wrap items-start justify-between w-full">
                    <div className="w-1/2">
                        <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 capitalize">task title</h3>
                        <input
                        value={taskTitle}
                        onChange={(e)=>{setTaskTitle(e.target.value)}}
                         type="text" placeholder="make ui design"
                        className="text-sm py1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 capitalize" />
                    </div>
                   <div> 
                        <h3 className="text-sm text-gray-300 mb-0.5 capitalize">Date</h3>
                        <input
                        value={taskDate}
                        onChange={(e)=>{setTaskDate(e.target.value)}}
                        type="date" 
                        className="text-sm py1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 capitalize"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 capitalize">assign to</h3>
                        <input
                        value={assignTo}
                        onChange={(e)=>{setAssignTo(e.target.value)}}
                        type="text" placeholder="employee name" 
                        className="text-sm py1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 capitalize"/>
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5 capitalize">category</h3>
                        <input 
                        value={category}
                        onChange={(e)=>{setCategory(e.target.value)}}
                        type="text" placeholder="design,dev,etc" 
                        className="text-sm py1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 capitalize"/>
                    </div>
                    </div>
                    <div className="w-1/2">
                        <div>
                            <h3 className="text-sm text-gray-300 mb-0.5 capitalize">description</h3>
                            <textarea value={taskDescription}
                        onChange={(e)=>{setTaskDescription(e.target.value)}} name="" id=""
                            className="text-sm py1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 capitalize"></textarea>
                        </div>
                    </div>
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">create task</button>
                </form>
            </div>
    )
}

export default CreateTask
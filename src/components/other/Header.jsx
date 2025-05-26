import React, { useState } from 'react';
import { setLocalStorage } from '../../utils/Localstorage';

const Header = (props) => {
    // const[userName,setUserName]=useState('')
    // if(!data){
    //     setUserName('Admin')
    // }else{
    //     setUserName(data.firstName)
    // }
    const logOutUser=()=>{
        localStorage.setItem("loggedInUser","")
        props.changeUser('')
        // window.location.reload()
    }
    return (
        <div className='flex justify-between items-end'>
            
            <h1 className='text-2xl font-medium'>Hello <br/><span className='text-3xl font-semibold'>firstName</span></h1>
            <button onClick={logOutUser} className='bg-red-600 text-white px-3 py-2 rounded-sm capitalize text-lg font-medium'>Log out</button>
        </div>
    );
};

export default Header;
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Protected=(props)=>{
      
      const [check,setCheck]=useState(false);
      const navigate=useNavigate()
      useEffect(()=>{
        if(sessionStorage.getItem("isLoggedIn")=="true"){
           setCheck(true)
        }else{
            navigate("/login");
        }
      },[check])
      
    return(

    <>
    {check && props.children} 
   
    </>);
}
import React,{useEffect,useContext} from 'react'
import {useNavigate} from "react-router-dom"
import {UserContext} from "../../App"
function Logout() {


    const {state,dispatch} = useContext(UserContext)


    const navigateTo = useNavigate();
    useEffect(()=>{
        fetch("/logout",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        }).then((res)=>{
            navigateTo("/login",{replace:true});

            if(!res.status === 200)
            {

                dispatch({type:"USER",payload:false})
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    })

  return (
    <h1>Logged out Successfully</h1>
  )
}

export default Logout
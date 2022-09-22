import React,{useState} from 'react'
import { useContext } from 'react';
import {NavLink,useNavigate} from "react-router-dom"
import {UserContext} from "../../App"
function Login() {

    const {state,dispatch} = useContext(UserContext)

    const navigateTo = useNavigate();
    const [userData,setUserData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) =>{
            const {name,value } =  e.target;
            setUserData(prevUserData=>{
                return{
                    ...prevUserData,
                    [name]:value
                }
            })
    }


    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {email,password} = userData;
        const res = await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })

        const responseData =   res.json();

        if(res.status === 400 || !responseData)
        {
            window.alert("Invalid Login Details");
            console.log("Invalid Login Details")
        }
        else
        {
            dispatch({type:"USER",payload:true})
            window.alert(" Login Successful");
            console.log(" Login Successful");
            navigateTo("/");
        }
    }
  return (
    <>
        <div className="container">
        <div className="row m-5 " >
            <div className="offset-md-2 col-lg-5 col-md-7 offset-lg-4 offset-md-3">
                <div className="panel border bg-white p-5" style={{borderRadius:"10px"}}>
                    <div className="panel-heading">
                        <h3 className="pt-3 font-weight-bold">Login</h3>
                    </div>
                    <div className="panel-body p-3">
                        <form  method="POST" onSubmit={handleSubmit}>
                            <div className="form-group py-2">
                                <div className="input-field d-flex align-items-center justify-content-center" >
                                    <span className="far fa-user "></span>
                                    <input type="email" id="email" className="form-control"  name="email" required placeholder='Enter your Email' onChange={handleChange} value={userData.email}/>
                                </div>
                            </div>
                            <div className="form-group py-1 pb-2">
                                <div className="input-field d-flex align-items-center justify-content-center" >
                                    <span className="fas fa-lock px-2"></span>
                                    <input type="password" id="password" className="form-control" name="password" required placeholder='Enter your Password' onChange={handleChange} value={userData.password}/>
                                </div>
                            </div>
                           
                            <button type='submit' className="btn btn-success btn-block mt-3">Login</button>
                            <div className="text-center pt-4 text-muted">Don't have an account? <NavLink to="/registration">Sign up</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="mx-3 my-2 py-2 bordert">
                        <div className="text-center py-3">
                            <NavLink to="https://wwww.facebook.com" target="_blank" className="px-3">
                                <img style={{width:"40px",height:"40px",borderRadius:"100px"}} src="https://www.dpreview.com/files/p/articles/4698742202/facebook.jpeg" alt=""/>
                            </NavLink>
                            <NavLink to="https://www.google.com" target="_blank" className="px-3">
                                <img style={{width:"40px",height:"40px",borderRadius:"100px"}} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                                    alt=""/>
                            </NavLink>

                            <NavLink to="https://www.github.com" target="_blank" className="px-3">
                                <img style={{width:"40px",height:"40px",borderRadius:"100px"}} src="https://www.freepnglogos.com/uploads/512x512-logo-png/512x512-logo-github-icon-35.png"
                                    alt=""/>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Login
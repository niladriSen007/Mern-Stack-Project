import React,{useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
// import {fas} from "react-icons/fa"
import "./Registration.css"
function Registration() {

  const navigateTo = useNavigate ();
  const [userData,setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    password:"",
    confirmPassword:""
  })

  const handleChange = (event) =>{
      const {name,value} = event.target;
      setUserData(prevUserData=>{
        return{
          ...prevUserData,
          [name]:value,
        }
      })
  }


  const handleSubmit = async(e) =>{
      e.preventDefault();

      const {name,email,phone,password,confirmPassword} = userData;
     const res = await fetch("/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
     body:JSON.stringify({
        name:name,
        email:email,
        phone:phone,
        password:password,
        confirmPassword:confirmPassword
     })
  })
  const responseData = await res.json();

 if  (res.status === 422 || !responseData)  {
    window.alert("Invalid Registration");
    console.log("Invalid Registration")
  } else
  {
    window.alert("Registration successful");
    console.log(" Registration successful")
    navigateTo("/login")
  }


}
  return (
    <>
            <section className="p-1" >
  <div className="container p-5">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-lg-12 col-xl-10 " >
        <div className="card text-black" style={{borderRadius: "25px",boxShadow:"4px 4px 10px 1px rgba(0, 0, 0, 0.2)"}}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1" >

                <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-2" style={{fontSize:"32px"}}><strong>Sign Up</strong></p>

                <form className="mx-1 mx-md-4 register-form" onSubmit={handleSubmit} method="POST" id="register-form">

                  <div className="d-flex flex-row align-items-center mbtm-4">
                    {/* <i className="fas fa-user fa-lg me- fa-fw pt-4"></i> */}
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="name"><i className="zmdi zmdi-account"></i></label>
                      <input type="text" id="name" className="form-controll"  name="name"  placeholder='Your Name' value={userData.name} onChange={handleChange}/>  
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mbtm-4">
                    {/* <i className="fas fa-envelope fa-lg me-3 fa-fw pt-4"></i> */}
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="email"><i className="zmdi zmdi-outlook"></i></label>
                      <input type="email" id="email" className="form-controll" name="email" placeholder='Your Email' value={userData.email} onChange={handleChange}/>
                   
                    </div>
                  </div>


                  <div className="d-flex flex-row align-items-center mbtm-4">
                    {/* <i className="fas fa-user fa-lg me-3 fa-fw pt-4"></i> */}
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="phone"><i className="zmdi zmdi-phone"></i></label>
                      <input type="phone" id="phone" className="form-controll" name="phone"  placeholder='Your Phone' value={userData.phone} onChange={handleChange}/>
       
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mbtm-4">
                    {/* <i className="fas fa-lock fa-lg me-3 fa-fw pt-4"></i> */}
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="password"><i className="zmdi zmdi-book"></i></label>
                      <input type="password" id="password" className="form-controll" name="password"  placeholder='Your Password' value={userData.password} onChange={handleChange}/>

                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mbtm-4">
                    {/* <i className="fas fa-key fa-lg me-3 fa-fw pt-4"></i> */}
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="confirmPassword"><i className="zmdi zmdi-accounts-list-alt"></i></label>
                      <input type="password" id="confirmPassword" className="form-controll" name="confirmPassword" placeholder='Confirm Your Password' value={userData.confirmPassword} onChange={handleChange}/>
                      
                    </div>
                  </div>

                 

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="submit" className="btn btn-success btn-lg" name="register">Register</button>
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 d-flex flex-column">

                <img src="https://img.freepik.com/free-vector/account-concept-illustration_114360-399.jpg?size=338&ext=jpg&ga=GA1.2.1414779907.1662544109"
                  className="img-fluid" alt="Sample "/>
             <p> Already Registered ?<NavLink to="/login"> Log In</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Registration
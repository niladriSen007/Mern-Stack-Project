import React,{useContext} from 'react'
// import "bootstrap/dist/css/bootstrap.css"
import "./Navbar.css"
import {NavLink} from "react-router-dom"
import {BsFillMoonFill,BsFillSunFill} from "react-icons/bs"
import {UserContext} from "../../App"


function Navbar(props) {


  const {state,dispatch} = useContext(UserContext)


  const RenderNav = () =>{
    if(state)
    {
      return(
        <>
                 <li className="nav-item ">
                      <NavLink className="nav-link"  to="/" style={{color:props.mode === "light"? "#333" : "#fff"}}>Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/about" style={{color:props.mode === "light"? "#333" : "#fff"}}>About</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/contact"  style={{color:props.mode === "light"? "#333" : "#fff"}}>Contact</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/logout" style={{color:props.mode === "light"? "#333" : "#fff"}}>Logout</NavLink>
                  </li>
        </>
      )
    }
    else
    {
      return(
        <>
                   <li className="nav-item ">
                      <NavLink className="nav-link"  to="/" style={{color:props.mode === "light"? "#333" : "#fff"}}>Home <span className="sr-only">(current)</span></NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link" to="/about" style={{color:props.mode === "light"? "#333" : "#fff"}}>About</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/contact"  style={{color:props.mode === "light"? "#333" : "#fff"}}>Contact</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/login"  style={{color:props.mode === "light"? "#333" : "#fff"}}>Login</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink className="nav-link" to="/registration" style={{color:props.mode === "light"? "#333" : "#fff"}}>Registration</NavLink>
                  </li>

                  
        </>
      )
    }
  }


  return (
    <>
<nav className="navbar navbar-expand-lg" style={{backgroundColor:props.mode==="light" ?   "#10b981" : "#333"}}>
            <NavLink className="navbar-brand" to="/" style={{color:props.mode === "light"? "#333" : "#fff",fontSize:"24px",fontWeight:"600"}}>Niladri</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav ml-auto" >
            { props.mode==="light" ?<button style={{border:"2px solid #10b981",borderRadius:"10px",backgroundColor:"#10b981",marginRight:"20px"}} onClick={props.toggle}><BsFillMoonFill /></button>
           :  <button style={{border:"2px solid #333",borderRadius:"10px",backgroundColor:props.mode==="light" ?   "#fff" : "#333",color:props.mode==="light" ?   "#444" : "#fff",marginRight:"20px"}} onClick={props.toggle}><BsFillSunFill /></button>}
                 
          <RenderNav />


          </ul>

  </div>
</nav>
    </>
  )
}

export default Navbar
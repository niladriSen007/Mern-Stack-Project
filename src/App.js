import React,{useState,createContext,useReducer} from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar'
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Registration from "./Components/Registration/Registration"
import Login from "./Components/Login/Login"
import Logout from './Components/Logout/Logout';
import Error from './Components/Error/Error'; 
import {initialstate,reducer} from "./reducer/UserEducer"


export const UserContext = createContext();
function App() {

  const [mode,setMode] = useState("light")

  const toggleNav = () =>{
    if(mode === "light")
    {
      setMode("dark")
    }
    else
    {
      setMode("light")
    }
  }

  
  const [state,dispatch] = useReducer(reducer,initialstate);
  return (
    <>
   <UserContext.Provider value={{state,dispatch}}>
              <BrowserRouter>
              <Navbar toggle={toggleNav} mode={mode}/>
              <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/registration" element={<Registration />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route path="*" element={<Error />} />
              </Routes>
              </BrowserRouter>
   </UserContext.Provider>
    </>
  )
}

export default App
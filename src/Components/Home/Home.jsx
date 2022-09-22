import React,{useEffect,useState} from 'react'
import "./Home.css"

const Home = () => {

  const [userName,setUserName] = useState("")


  const callAboutSection = async() =>{
    try
    {
        const res = await fetch("/getData",{
          method:"GET",
          headers:{
           
            "Content-Type":"application/json"
          },
          
        })
        
        const userDetails = await res.json();
        // console.log("userData "+userData)
        // console.log("Name si = "+userDetails.name)
        setUserName(userDetails.name);
        // console.log("Name is = "+userData.name)
        if(!res.status === 200)
        {
          const error =  new Error(res.error);
          throw error;
        }
    }
    catch(e)
    {
      console.log(e)
        // navigateTo("/login");
    }
  }

    useEffect(() => {
     callAboutSection();
    }, [])


  return (
    <div className=' d-flex flex-column align-items-center justify-content-center home__container'>
        <h2 style={{color:"#fff"}}><strong>WELCOME</strong></h2>
        {userName && <h1>{userName}</h1>}
       {userName ?  <h2>The Future <span style={{color:"#fff"}}><strong>MERN</strong></span> Developer</h2> : <h2>Start your <span style={{color:"#fff"}}><strong>MERN</strong></span> Journey </h2>}
    </div>
  )
}

export default Home
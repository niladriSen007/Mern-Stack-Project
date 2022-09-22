import React,{useEffect,useState} from 'react'
import "./Contact.css"
import { useNavigate } from 'react-router-dom'
import ContactCard from './compo/ContactCard'
function Contact() {


  const [userData,setUserData] = useState({
    name:"",
    email:"",
    phone:"",
    message:""
  })

  const navigateTo = useNavigate();
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
        setUserData(prevUserData=>{
          return{
            ...prevUserData,
            id:userDetails._id,
            name:userDetails.name,
            email:userDetails.email,
            phone:userDetails.phone,
          }
        });
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
    


  const contactArray = [
    {
    title:"Phone",
    text:"+91 8584071291"
    },
    {
      title:"Address",
      text:"Madhyamgram , Kolkata"
      },
      {
        title:"Email",
        text:"niladris002@gmail.com"
        }

]


const handleChange = (e) =>{
  const {name,value} = e.target;
  setUserData(prevUserData=>{
    return{
      ...prevUserData,
      [name]:value,
    }
  })
}


//sending the data to the backend
const handleSubmit = async(e) =>{
  e.preventDefault();
  const {name,email,phone,message} = userData;

  const res = await fetch("/contact",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      name:name,
      email:email,
      phone:phone,
      message:message
    })
  })

  const data = await res.json();
  if(!data)
  {
    console.log("Message not sent")
  }
  else
  {
    alert("Message submitted");
    setUserData(prevData=>{
      return{
        ...prevData,
      message:""
      }
    })
  }
}



  return (
   <>
    <div className="contact__info">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-around p-5">

           { contactArray.map((contact)=>(
                <ContactCard title={contact.title} text={contact.text}/>
            ))}

          </div>
        </div>
      </div>
    </div>


    {/* contact us form */}
    <div className="contact__form " >
      <div className="container px-5" style={{borderRadius:"10px",boxShadow:"4px 4px 10px 1px rgba(0, 0, 0, 0.2)"}}>
        <div className="row">
          <div className="col-lg-10 mx-auto">
                <div className="contact__form-container py-5">
                        <div className="contact__form-title pb-3" style={{fontSize:"48px"}}><strong>Get In Touch</strong></div>
                        <form onSubmit={handleSubmit} id="contact_form" className='flex__form mx-auto' method="POST">
                          <div className="contact__form-upper d-flex align-items-center justify-content-between">
                            <input type="text"  onChange={handleChange} value={userData.name} name="name" id="contact__form-name" className="contact__form-name" placeholder='Your Name' required="true"/>
                            <input type="email"  onChange={handleChange} value={userData.email} name="email" id="contact__form-email" className="contact__form-email" placeholder='Your Email' required="true"/>
                            <input type="phone"  onChange={handleChange} value={userData.phone} name="phone" id="contact__form-phone" className="contact__form-phone" placeholder='Your Phone' required="true"/>
                          </div>
                          <div className="contact__form-lower mx-auto">
                            <textarea name="message"   onChange={handleChange} value={userData.message} id="message" cols="100" rows="10" className="contact__form-message p-3" style={{borderRadius:"5px"}} placeholder='Enter Your Message' />
                          </div>
                          <div className="contact__form-button ">
                            <button type='submit' className='btn btn-primary'>Send Message</button>
                          </div>
                        </form>
                </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Contact
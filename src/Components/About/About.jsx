import React,{useEffect,useState} from 'react'
import "./About.css"
import {NavLink,useNavigate} from "react-router-dom"
function About() {


  const [userData,setUserData] = useState({
    id:"",
    name:"",
    email:"",
    phone:"",
    work:"Web Developer",

  })

  const navigateTo = useNavigate();
  const callAboutSection = async() =>{
    try
    {
        const res = await fetch("/about",{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
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
        navigateTo("/login");
    }
  }

    useEffect(() => {
     callAboutSection();
    }, [])
    
    // console.log(userData)


    const hClick = (e) =>{
      e.preventDefault();
    }
  return (
    <>
      <div className=" emp__profile ">
        <div className="container emp__profile__card-container">
        <form method="">
            <div className="row emp__profile-card">
              <div className="col-md-4">
                    <img style={{width:"45%",borderRadius:"5px"}} src={userData.name ==="Niladri Sen"? "https://ik.imagekit.io/ksaehdhru/selfiecamera_2022-03-11-17-31-15-131_w93mbEEnq.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1661594061721" : "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} alt="niladri" />
              </div>
              <div className="col-md-6">
                <div className="profile__heading">
                  <h5>{userData.name}</h5>
                  <h6>Web Developer</h6>
                  <p className='profile__rating'>RANKINGS: <span> 1/10</span></p>


                  <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link"  id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active"id="profile-tab" data-toggle="tab" href="#profile" role="tab" >Timeline</a>
                  </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                {/* <input type="text" name="btn-add-more" className='profile-edit-button' value="Edit Profile" /> */}
                <button onClick={hClick}  type="submit" className='profile-edit-button'>Edit Profile</button>
              </div>
            </div>

            <div className="row">
              {/* left side url */}
              <div className="col-md-4">
                <div className="profile__work p-3">
                  <p>WORK LINK</p>
                  <NavLink to="https://www.linkedin.com/in/niladri-sen" target="_blank">LinkedIn</NavLink><br/>
                  <NavLink to="https://https://github.com/niladriSen007" target="_blank">GitHub</NavLink><br/>
                  <NavLink to="https://www.youtube.com/channel/UCaAOm5A_JmAzNnY1ZK_pVnw" target="_blank">YouTube</NavLink><br/>
                  <NavLink to="https://www.facebook.com/profile.php?id=100070480083500" target="_blank">FaceBook</NavLink><br/>
                </div>
              </div>
              <div className="col-md-8 pl-5 about__info">
                    <div className="tab-content profile-tab" id='myTabContent'>
                            <div className="tab-pane   " id='home' role='tabpanel' aria-labelledby='home-tab'>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>USER ID</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>{userData.id}</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>NAME</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>{userData.name}</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>PHONE</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>{userData.phone}</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>EMAIL</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>{userData.email}</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>PROFESSION</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>{userData.work}</label>
                                      </div>
                                    </div>


                            </div>



                            <div className="tab-pane fade show active" id='profile' role='tabpanel' aria-labelledby='profile-tab'>
                                    <div className="row">
                                      <div className="col-md-6">
                                        <label>EXPERIENCE</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>Expert</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>HOURLY RATE</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>10 $/hr</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>TOTAL PROJECTS</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>45</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>ENGLISH LEVEL</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>Intermediate</label>
                                      </div>
                                    </div>

                                    <div className="row mt-1">
                                      <div className="col-md-6">
                                        <label>AVAILABILITY</label>
                                      </div>
                                      <div className="col-md-6">
                                        <label>6 months</label>
                                      </div>
                                    </div>


                            </div>
                    </div>
              </div>
            </div>
        </form>
        </div>
      </div>
    </>
  )
}

export default About
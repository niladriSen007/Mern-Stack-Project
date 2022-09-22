import React from 'react'

function ContactCard(props) {
  return (
    <>
        <div className="contact__info-item d-flex align-items-center justify-content-start">
             <i className="zmdi zmdi-tablet-android pr-3" style={{color:"blue"}}></i>
              <div className="contact__info-content">
                <div className="contact__info-title">
                  {props.title}
                </div>
                <div className="contact__info-text">
                  {props.text}
                </div>
              </div>
             </div>
    </>
  )
}

export default ContactCard
import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
   <div className="form">
    <form>
        <label>Your Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea rows="6" placeholder="type your message here"/>
        <button className="btn">submit</button>
    </form>
   </div>
  )
}

export default Form

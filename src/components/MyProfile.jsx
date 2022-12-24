import "./MyProfileStyle.css"
import React from 'react'
import pp from "../assets/myPp.jpg"
const MyProfile = () => {
  return (
    <div className="hero-img" >
        
     <div className="profileP">
        <img src={pp} alt="mypp" />
        <p>HI, I'M <span>LIPAN PADHAN.</span> An Aspiring MERN Developer.</p>
      </div>
      
    </div>
  )
}

export default MyProfile ;

import "./AboutContentStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Im a full stack developer. I create responsive secure websites for my clients</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="true"  className="img"/>
                </div>
                <div className="img-stack bottom">
                    <img src="https://www.mindinventory.com/blog/wp-content/uploads/2017/08/reactjs-768x384.jpg" alt="true"  className="img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent

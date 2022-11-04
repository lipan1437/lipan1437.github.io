import "./MyResumeStyles.css"
import React from 'react'
import resum from "../assets/Lipan_Padhan_Resume.pdf"
const MyResume = () => {
  return (
    <div className='pdf'>
       <embed src={resum} alt="resume" />
    </div>
  )
}

export default MyResume

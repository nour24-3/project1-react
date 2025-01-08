import React, { useState } from 'react'


export default function About() {


    return (
    <>
        <div className='about w-100 vh-100 text-white d-flex justify-content-center align-items-center'>
            <div className='container '>
            <h1 className='text-center fw-bold'>ABOUT COMPONENT</h1>
            <div className='text-center'>
                <img  width={250} src="./../../../images/Capture.PNG" alt="decoration" />
            </div>
        <div className='d-flex justify-content-around'>
            <p>
            Freelancer is a free bootstrap theme created by Route. The download <br /> includes the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.
            </p>
            <p>
            Freelancer is a free bootstrap theme created by Route. The download <br /> includes the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.
            </p>
        </div>
            </div>
        </div>
        
      
        </>
    
    )
}

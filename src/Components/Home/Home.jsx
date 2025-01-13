import React from 'react'
import image6 from "../../assets/avataaars.svg"
import image4 from "../../assets/Capture.png"

export default function Home() {
return (
    <>
        <div className='home text-white  '>
        <div className=' d-flex justify-content-center py-5'>
            <img width={250} src={image4} alt="" />
        </div > 
        <div className='text-center'>
        <h1>START FRAMEWORK</h1>
        <div>
        <img width={250} src={image6} alt="face" />
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
        
        </div>
    </>
)
}

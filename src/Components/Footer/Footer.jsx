import React from 'react'

export default function Footer() {
  return (
    <>
     <div className=' p-2 text-white text-center myclasss d-flex justify-content-around py-5 '>
    <div className='px-5'>
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div >
        <h3>AROUND THE WEB</h3>
        <div className=' d-flex justify-content-center '>
          <i  className="fa-brands fa-facebook icon"></i>
          <i  className="fa-brands fa-twitter icon"></i>
          <i  className="fa-brands fa-linkedin icon"></i>
          <i  className="fa-solid fa-globe icon"></i>
        </div>
      </div>
      <div>
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, <br />licensed Bootstrap theme <br />created by Route</p>
      </div>
    </div>
    <div className='text-center footer'>
        <p>Copyright © Your Website 2021</p>
      </div>
</>
  )
}

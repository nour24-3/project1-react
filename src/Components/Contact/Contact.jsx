import React from 'react'

export default function Contact() {


  
  return (
    <>
       <div className="container mt-5 py">
        <div className='text-center contact mb-3'>
        <h1 >CONTACT COMPONENT</h1>
        <div>
          <img src="./../../../images/1.PNG" alt="" />
        </div>
        </div>
    
      <form  >
        <div className="mb-5">
          <input 
            type="text"
            className="form-control w-50 m-auto "
            id="name"
            name="name"
            forof="floatingInput"
            placeholder="userName"
            required
          />
        </div>
        <div className="mb-5 ">
          <input 
            type="number"
            className="form-control w-50 m-auto "
            id="name"
            name="name"
            forof="floatingInput"
            placeholder="userAge"
            required
          />
        </div>

        <div className="mb-5">
         
          <input
            type="email"
            className="form-control w-50  m-auto"
            id="email"
            name="email"
            placeholder="userEmail"
            required
          />
        </div>

        <div className="mb-4">
        
          <input
            type="password"
            className="form-control w-50 m-auto "
            id="password"
            name="password"
           
            placeholder="userPassword"
            required
          />
          
        </div>
        <button type="submit" className="btn  ">
          Send Massege
        </button>
        
      </form>
    </div>
    
    </>
  ) 
}

import React from 'react'
import image1 from "../../assets/poert1.png"
import image2 from "../../assets/port2.png"
import image3 from "../../assets/port3.png"
import image5 from "../../assets/1.png"




export default function Protofolio() {
  return (<>
    <div className='protofolio text-center '>
      <div className='container'>
        <div>
        <h1 className='fw-bold'>PROTOFOLIO COMPONENT</h1>
        </div>
        <div>
          <img width={250} src={image5} alt="" />
        </div>
        <div className='row row-cols-md-3 hambozo g-4'>
          <div className="col item ">
              <div className=''>
                <img  src={image1} alt="house" />
              </div>
              <div className='layer d-flex align-items-center justify-content-center text-white'>
              <i class="fa-solid fa-plus fa-2xl"></i>
              </div>
          </div>
          <div className="col item ">
              <div className=''>
                <img  src={image2} alt="cake" />
              </div>
              <div className='layer d-flex align-items-center justify-content-center text-white'>
              <i class="fa-solid fa-plus fa-2xl"></i>
              </div>
          </div>
          <div className="col item ">
              <div className=''>
                <img  src={image3} alt="tent" />
              </div>
              <div className='layer d-flex align-items-center justify-content-center text-white'>
              <i class="fa-solid fa-plus fa-2xl"></i>
              </div>
          </div>
          <div className="col item ">
              <div className=''>
                <img  src={image1} alt="house" />
              </div>
              <div className='layer d-flex align-items-center justify-content-center text-white'>
              <i class="fa-solid fa-plus fa-2xl"></i>
              </div>
          </div>
          <div className="col item ">
              <div className=''>
                <img  src={image2} alt="cake" />
              </div>
              <div className='layer d-flex align-items-center justify-content-center text-white'>
              <i class="fa-solid fa-plus fa-2xl"></i>
              </div>
          </div>
          <div className="col item ">
              <div className=''>
                <img  src={image3} alt="tent" />
              </div>
              <div className='layer d-flex align-items-center justify-content-center text-white'>
              <i class="fa-solid fa-plus fa-2xl"></i>
              </div>
          </div>
        
        </div>
    </div>
    </div>
    <div className='light-container d-flex justify-content-center align-items-center d-none  '>
      <div className='box'></div>
    </div>
    </>
  )
}

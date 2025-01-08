import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
return <>
    <div className='myclass p-2 py-4 fixed-top d-flex justify-content-around align-items-center'>
        <h1 className='h2 fw-bold text-white'>START FRAMEWORK</h1>
        <p></p>
        <ul className='d-flex list-unstyled gap-3  m-0 p-0  mynav'>
            <li><NavLink className='text-decoration-none text-white fw-bold ' to="about">About</NavLink></li>
            <li><NavLink className='text-decoration-none text-white fw-bold ' to="protofolio">Protofolio</NavLink></li>
            <li><NavLink className='text-decoration-none text-white fw-bold  ' to="contact">Contact</NavLink></li>
        </ul>
    </div>
</>
}

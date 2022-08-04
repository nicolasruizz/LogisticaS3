import React from 'react'
import './NavBar.css'
import logo from '../../images/logonav.png'



export default function NavBar() {
  return (
    
        <nav class="navbar navbar-expand-lg navbar-light mt-1 mx-auto rounded navBar sticky-top  " >
        <div class="container-fluid aling-items-center d-flex justify-content-between">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand  " href="#">
                <img src={logo} alt="Logo" width={70} height={60}/><span className='h3'><strong>Logistica S3 </strong></span>
            </a>
            <div class="collapse navbar-collapse text-center" id="navbarTogglerDemo03">
            <ul class="navbar-nav text-center mb-2 mb-lg-0 ">
                <li class="nav-item ">
                <a class="nav-link uppercase h4" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link uppercase h4 " aria-current="page" href="#servicios">Servicios</a>
                </li>
                <li class="nav-item">
                <a class="nav-link uppercase h4 " aria-current="page" href="#conoceme">Conocenos</a>
                </li>
                <li class="nav-item">
                <a class="nav-link h4 " aria-current="page" href="#contacto" >Contactanos</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        )
}

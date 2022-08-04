import React from 'react'
import './Home.css'


export default function Home() {
  return (<>
    <div id="carouselExampleCaptions" class="carousel  slide w-50 mx-auto my-4 rounded" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={"https://i.postimg.cc/gJdDQhs9/Minimo.jpg "} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
      <a href="#" class="ov-btn-slide-top rounded">CONTACTANOS</a>
      </div>
    </div>
    <div class="carousel-item">
      <img src={"https://i.postimg.cc/hjrrBGZX/Mapa.jpg"} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={"https://i.postimg.cc/Cx3JCXfx/Trabaja-con-nosotros.jpg"} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</>
  )
}

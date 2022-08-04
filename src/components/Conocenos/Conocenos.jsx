import React from 'react'
import './Conocenos.css'

export default function Conocenos() {
  return (<>
    <div className='row  mx-auto my-1' id='conoceme'>
        <div className='row col-12 mx-auto d-flex flex-wrap'>
        <div className=' col-sm-10 col-lg-4 my-4     mx-auto row '>
            <div className='row col-12 mx-auto d-flex flex-wrap'>
            <div>
            <h5 className='h1 text-center mb-4'><strong> ¿Quienes somos?</strong></h5><span className='h5'>
            Somos una empresa familiar que tuvo que reinventarse para salir adelante en la pandemia. Hoy en día contamos con la experencia necesaría para hacer llegar tu paquete con la mayor garantia <strong> ¡a un muy bajo precio!</strong>.<br/> 
            Somos una familia en pleno crecimiento, y podes ser parte de ella, estamos ubicados a metros de la estación de banfield para su comodidad. 
            </span>
            </div>
            </div>
        </div>
        
        <div className=' row col-sm-8 col-lg-5 my-5 mx-auto  border1'>
            <div class="col-12 mt-1 h6"><strong>Telefono: (+549) 1162343318 </strong></div>
            <div class="col-12 h6" ><a className='link ' href="https://www.instagram.com/logisticas3/" > <strong>Instagram: www.instagram.com/logisticas3</strong></a></div>
            <div class="col-12 mb-2 h6" ><strong>   Dirección:Valentín Vergara 1557, Banfield</strong></div> 
            <div class="col-12 map-responsive">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.525879405531!2d-58.396580884171726!3d-34.742343472354285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd2a027b91be1%3A0xe042a1b57dffd7de!2sValent%C3%ADn%20Vergara%201557%2C%20B1828AAN%20Banfield%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653317212464!5m2!1ses!2sar" width={500} height={350}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>   
            </div>
        </div>
        </div>
    </div>

    <div className="servicios py-5 " >
    <div className=" d-flex justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="dark" className="bi bi-instagram " viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
        </svg>
        <a href='#' className='link text-dark'>
            <h3 className=' h3 mx-3 text-dark '> <strong>Logistica S3</strong></h3>
            <h4 className=' h5 mx-3 text-dark'><strong>SEGUINOS EN INSTAGRAM</strong></h4>
        </a>
    </div>
</div>

    </>

    
  )
}

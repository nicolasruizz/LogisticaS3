import React from 'react'
import './Servicios.css'

export default function Servicios() {
  return (
    <div className=' w-100 p-4 row' id="servicios">
        <div className='row col-12 servicios p-3 mx-auto'>
            <div className=' col-md-8 col-lg-6 col-xl-4 col-sm-12 border mx-auto text-center'>
                <h1 className=' '><strong>¿ Por que elegir LogisticaS3?</strong></h1>
                <hr className='hrS mx-auto' />
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sed repellendus delectus voluptates neque corporis autem ducimus cumque, ipsum sunt debitis recusandae. Iste reprehenderit 
                </p>
            </div>
        </div>
        <hr className='hrS mx-auto col-9' />
        <div className='row col-12 mx-auto d-flex flex-wrap'>
        <div className='col-10 col-md-4 border1 mx-auto my-3 rounded  servCard '>
            <div className='row d-flex justify-content-center flex-wrap'> 
            <img className='col-8 mx-auto imgCard ' src="https://i.postimg.cc/DzGVqm7J/envios-dia.png" alt="envios en el día" />
            <hr className='hrS mx-auto col-8' />
            <h2 className='col-8 text-center mx-auto'>
                Envios en el día
            </h2>            
            <div className='col-10 text-center mb-3'>
            Realizamos envios particulares y por Mercado Envios Flex (MERCADO LIBRE). Con un control asegurado de entrega.
            </div>
            </div>
        </div>
        <div className='col-10 col-md-4 border1 mx-auto my-3 rounded servCard '>
            <div className='row d-flex justify-content-center flex-wrap'> 
            <img className='col-8 mx-auto imgCard ' src="https://i.postimg.cc/fL76rFtM/nacional.jpg" alt="envios en el día" />
            <hr className='hrS mx-auto col-8' />
            <h2 className='col-8 text-center mx-auto'>
                Entregas a todo el pais
            </h2>           
            
            <div className='col-10 text-center mb-3'>
            Se puede realizar si tienen cuenta de Correo Argentino <strong>(pqt.Ar/Mi Correo)</strong> para su comidad le ofrecemos etiquetas personalizadas.            </div>
            </div>
        </div>
        <hr className='hrS mx-auto col-9' />
        <div className='col-10 col-md-4 border1 mx-auto my-3 rounded servCard '>
            <div className='row d-flex justify-content-center flex-wrap'> 
            <img className='col-8 mx-auto imgCard ' src="https://i.postimg.cc/hjRkMgGC/retiro-mayorista.jpg" alt="envios en el día" />
            <hr className='hrS mx-auto col-8' />
            <h2 className='col-8 text-center mx-auto'>
                Retiro mayorista
            </h2>
            <div className='col-10 text-center mb-3'>
            Ofrecemos retiros de mercaderia en comercios mayoristas con entregas inmediatas en el día.
            </div>
            </div>
        </div>
        <div className='col-10 col-md-4 border1 mx-auto my-3 rounded servCard '>
            <div className='row d-flex justify-content-center flex-wrap'> 
            <img className='col-8 mx-auto imgCard ' src="https://i.postimg.cc/D02tkgLL/pick-up.png" alt="envios en el día" />
            <hr className='hrS mx-auto col-8' />
            <h2 className='col-8 text-center mx-auto'>
                Pick-up
            </h2>
            <div className='col-10 text-center mb-3'>
            Brindamos un punto de retiro directamente por nuestro local a metros de la estación de Banfield.            </div>
            </div>
        </div>

        </div>

    </div>

  )
}

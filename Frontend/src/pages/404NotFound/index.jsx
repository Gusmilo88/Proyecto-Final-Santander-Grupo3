import { Link } from 'react-router-dom'
import'./style.css'

const NotFound = () => {
  return (
    <>
    <div className='container404'>
    <div className='containerIMG'>
      <div className='containerAstronaut'>
        <img src="/src/assets/images/astronaut.png" alt="Imagen de un astronauta" />
      </div>
      <div className='containerWorld'>
        <Link to={"/"}><img src="/src/assets/images/world.png" alt="Imagen del planeta Tierra"/></Link>
      </div>
      <div className='containerDog'>
        <img src="/src/assets/images/dog.png" alt="Imagen de un perro astronauta" />
      </div>
    </div>
    <div className='containerText'>
      <h2 className='h2404'>404 Not found</h2>
      <p className='p404'>Tocá el planeta para volver</p>
    </div>
    </div>
    </>
    
  )
}

export default NotFound


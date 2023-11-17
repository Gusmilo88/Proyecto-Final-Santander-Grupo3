import'./style.css'

const Carousel = () => {
  return (
<div>
  <div role='carousel' id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="/src/assets/images/carrusel1.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/src/assets/images/carrusel2.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/src/assets/images/carrusel3.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/src/assets/images/carrusel4.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/src/assets/images/carrusel5.jpeg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/src/assets/images/carrusel6.jpg" className="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item">
        <img src="/src/assets/images/carrusel7.jpg" className="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

  )
}

export default Carousel

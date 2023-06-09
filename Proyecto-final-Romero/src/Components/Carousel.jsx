import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import cover from '../imgs/cover.jpg';
import sony from '../imgs/sonyCover.png';
import microsoft from '../imgs/xboxCover.webp';
import nintendo from '../imgs/nintendoCover.jpg';
const CarouselComponent = () => {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={cover}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Bienvenido a Level up Store</strong></h3>
          <p>Precio y calidad, sugerida por nuestros clientes</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={sony}
          alt="Second slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Sony - PS5</strong></h3>
          <p>La mejor consola del mundo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={microsoft}
          alt="Third slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Microsoft - XBOX</strong></h3>
          <p>Sè un heroe con Halo!</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={nintendo}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Nintendo</strong></h3>
          <p>Acompaña a Mario en sus aventuras</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
}

export default CarouselComponent
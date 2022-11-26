import Carousel from 'react-bootstrap/Carousel';
import "./Carrusel.css"

function UncontrolledExample() {
  return (
    <Carousel id='home'>
      <Carousel.Item>
        <img
          className="fondito"
          src="https://img.freepik.com/foto-gratis/gradiente-gris-negro-falta-definicion-llanura-lujo-abstracta-utilizado-como-pared-estudio-fondo-exhibir-sus-productos_1258-63747.jpg?w=360"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='color'>Creá tu propia funda</h3>
          <p className='color'>Utilizá nuestras plantillas para crear</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="fondito"
          src="https://img.freepik.com/foto-gratis/gradiente-gris-negro-falta-definicion-llanura-lujo-abstracta-utilizado-como-pared-estudio-fondo-exhibir-sus-productos_1258-63747.jpg?w=360"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='color'>Elegí una funda</h3>
          <p className='color'>Podés elegir una de nuestras fundas favoritas</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="fondito"
          src="https://img.freepik.com/foto-gratis/gradiente-gris-negro-falta-definicion-llanura-lujo-abstracta-utilizado-como-pared-estudio-fondo-exhibir-sus-productos_1258-63747.jpg?w=360"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='color'>Todos los celus!</h3>
          <p className='color'>Podemos hacer el diseño para cualquier celu</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
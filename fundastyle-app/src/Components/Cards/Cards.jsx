import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "./Cards.css"

function GroupExample() {
  return (
    <CardGroup>
      <Card className='card'>
        <Card.Img variant="top" src="https://www.caseland.com.ar/1212-large_default/tokyo-by-cel-castella.jpg" />
        <Card.Body>
          <Card.Title>Japan</Card.Title>
          <Card.Text>
            $500
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/1218-large_default/astronoma-by-cel-castella.jpg" />
        <Card.Body>
          <Card.Title>Visión</Card.Title>
          <Card.Text>
            $1000
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/1209-large_default/surrealismo-by-cel-castella.jpg" />
        <Card.Body>
          <Card.Title>Viaje</Card.Title>
          <Card.Text>
            $800
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/3047-home_default/acid.webp" />
        <Card.Body>
          <Card.Title>Smile</Card.Title>
          <Card.Text>
            $600
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/3368-home_default/acelerando-la-fluodisolucion-by-marta-minujin.webp" />
        <Card.Body>
          <Card.Title>Colors</Card.Title>
          <Card.Text>
            $2000
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/574-home_default/la-gran-ola.webp" />
        <Card.Body>
          <Card.Title>Ola</Card.Title>
          <Card.Text>
            $400
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/568-home_default/la-noche-estrellada.webp" />
        <Card.Body>
          <Card.Title>Cuadro</Card.Title>
          <Card.Text>
            $3000
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/743-home_default/ska.webp" />
        <Card.Body>
          <Card.Title>RunRun</Card.Title>
          <Card.Text>
            $250
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.caseland.com.ar/3043-home_default/full-heart.webp" />
        <Card.Body>
          <Card.Title>Amopur</Card.Title>
          <Card.Text>
            $1500
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
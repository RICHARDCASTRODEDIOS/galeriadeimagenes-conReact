import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Tarjeta = ({imagen, titulo, descripcion}) => {
  return (
<div className='container'>
<div className='tarjeta'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imagen} />
    <Card.Body>
      <Card.Title>{titulo}</Card.Title>
      <Card.Text>
       {descripcion}
      </Card.Text>
      <Button variant="primary">Ver más</Button>
    </Card.Body>
  </Card>
    </div>
</div>

  )
}

export default Tarjeta
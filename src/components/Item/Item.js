import React from 'react'
import './Item.css';
import {Card,Button} from "react-bootstrap"
import { Link } from 'react-router-dom';


const Item = (props) => {
    return (
      <div className="container product Item ">
        <div className='row ' >
          <div className='col-lg-4 '>

          
  
  <Card  style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ `/img/${props.image}` } />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Link to={`/detalle/${props.id}`} ><Button variant="primary">Ver Detalle</Button></Link>
  </Card.Body>
</Card>

      </div>
      </div>
        </div>
        
    )
}

export default Item

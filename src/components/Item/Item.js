import React from "react";
import "./Item.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = (props) => {

  return (
  
     
        <div className="col-md-4">
          <Card className='Cards'>
            <Card.Img
              className={"zoom img"}
              variant="top"
              src={`/img/${props.image}`}
            />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.description}</Card.Text>
              <Link to={`/detalle/${props.id}`}>
                <Button variant="primary">Ver Detalle</Button>
              </Link>
            </Card.Body>
          </Card>
       
    </div>
  );
};

export default Item;

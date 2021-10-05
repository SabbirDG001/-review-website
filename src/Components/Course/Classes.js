import React from 'react';
import { Card,Button } from 'react-bootstrap';
import './Classes.css';

const Course = (props) => {
    const{name,views,picture,rate,price}=props.classes;
    return (
        <div>
                <Card style={{ width: '18rem',backgroundColor: 'lightgray', fontSize:'20px', fontWeight:'bold' }}>
  <Card.Img variant="top" className="image" src={picture} alt=''/>
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>Views:{views}
    </Card.Text>
    <Card.Text>Rated:{rate}
    </Card.Text>
    <Card.Text>Price:{price}$
    </Card.Text>
    <Button className="btn" variant="info">Details</Button>
  </Card.Body>
</Card>
        </div>
    );
};

export default Course;
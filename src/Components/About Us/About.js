import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <Card className="text-center" style={{backgroundColor:'lightgray'}}>
                <Card.Body>
                    <Card.Title style={{fontSize:'30px',fontWeight:'700'}}>About Us</Card.Title>
                    <Card.Text style={{fontSize:'25px',fontWeight:'600'}}>
                    We are one of the top service providers in this plot. We will ensure you high possibility to get perfect knowledges and skills. We have higher ranked teachers from all over the world. Come to us and gain skills as much as you can.
                    </Card.Text>
                    <Card.Text style={{fontSize:'25px',fontWeight:'600'}}>
                    We will provide you:<br/>
                    Unlimited opportunity to ask about anything related courses,
                    Lifetime Access,
                    Best videos to understand easily,
                    Best practices to upgrade your skills.
                    </Card.Text>
                    <Link to='/home'><Button variant="primary">Go Home</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;
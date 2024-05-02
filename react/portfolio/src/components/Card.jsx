// TeamCard.jsx
import React from 'react';
import { Col, Card } from 'react-bootstrap';

function TeamCard({ name, role, image }) {
  return (
    <Col sm={12} md={6} lg={3} style={{marginRight:"45px"}}>
      <Card style={{ width: '18rem', height: '15rem' }} className='shadow me-3'>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className='fw-bold'>{name}</Card.Title>
          <Card.Text>
            {role}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default TeamCard;

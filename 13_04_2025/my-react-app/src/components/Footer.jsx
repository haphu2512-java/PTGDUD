import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../index.css';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#0d1117', color: '#fff', padding: '50px 0' }}>
      <Container>
        <Row className="mb-5">
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p className="text-white">
              Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
            </p>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
                style={{ maxWidth: '250px' }}
              />
              <Button variant="danger" style={{ backgroundColor: '#FF69B4', border: 'none' }}>
                Send
              </Button>
            </Form>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Learn More</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Our Cooks</a></li>
              <li><a href="#" className="text-white">See Our Features</a></li>
              <li><a href="#" className="text-white">FAQ</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Recipes</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">What to Cook This Week</a></li>
              <li><a href="#" className="text-white">Pasta</a></li>
              <li><a href="#" className="text-white">Dinner</a></li>
              <li><a href="#" className="text-white">Healthy</a></li>
              <li><a href="#" className="text-white">Vegetarian</a></li>
              <li><a href="#" className="text-white">Vegan</a></li>
              <li><a href="#" className="text-white">Christmas</a></li>
            </ul>
          </Col>
        </Row>

        <hr style={{ borderColor: '#333' }} />

        <Row className="d-flex justify-content-between align-items-center">

        <Col md='6'>

        
          <Col md="auto">
            <div className="d-flex align-items-center">
              <img src="/logo.png" alt="Logo" style={{ width: '40px', marginRight: '10px' }} />
              <strong>Chefify</strong>
            </div>
          </Col>
          <Col md="auto" className="text-white">
            2023 Chefify Company &nbsp; | &nbsp;
            <a href="#" className="text-white">Terms of Service</a> &nbsp;|&nbsp;
            <a href="#" className="text-white">Privacy Policy</a>
          </Col>
        </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

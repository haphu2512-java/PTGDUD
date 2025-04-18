import React from 'react';
import { Container, Row, Col, Card, Button, Badge, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const HeroSection = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* Navbar */}
      <Navbar bg="light" expand="lg" className="px-4">
        <Navbar.Brand href="#">
          <img src="https://img.icons8.com/fluency/48/chef-hat.png" alt="logo" width="30" className="me-2" />
          <span className="fw-bold text-danger">Cheffify</span>
        </Navbar.Brand>
        <Form className="d-flex mx-4 w-50">
          <FormControl
            type="search"
            placeholder="What would you like to cook?"
            className="me-2"
          />
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">What to cook</Nav.Link>
            <Nav.Link href="#">Recipes</Nav.Link>
            <Nav.Link href="#">Ingredients</Nav.Link>
            <Nav.Link href="#">Occasions</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
          </Nav>
          <Button variant="outline-danger" className="me-2">Login</Button>
          <Button variant="danger">Subscribe</Button>
        </Navbar.Collapse>
      </Navbar>

      {/* Background Image */}
      <div style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1606787366850-de6330128bfc')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        position: 'relative'
      }}>
        <Container className="h-100 d-flex align-items-center justify-content-start">
          <Card style={{
            maxWidth: '300px',
            background: 'white',
            padding: '20px',
            borderRadius: '15px',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            marginTop: '80px'
          }}>
            <Badge bg="warning" text="dark" className="mb-2">Recipe of the day</Badge>
            <Card.Title className="text-danger fw-bold">Salad Caprese</Card.Title>
            <Card.Text style={{ fontSize: '14px' }}>
              Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil and balsamic vinegar create a refreshing dish for lunch or appetizer.
            </Card.Text>
            <div className="d-flex align-items-center mt-3">
              <img
                src="https://img.icons8.com/fluency/48/salad.png"
                alt="Salad Caprese"
                width="30"
                height="30"
                className="me-2"
              />
              <small>Salad Caprese</small>
            </div>
            <Button variant="danger" className="mt-3 w-100">View now →</Button>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default HeroSection;

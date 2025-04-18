import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const recipesSummer = [
  {
    title: 'Italian-style tomato salad',
    time: '16 minutes',
    img: 'https://images.unsplash.com/photo-1601050690590-0e4d0f044d8b'
  },
  {
    title: 'Spaghetti with vegetables and shrimp',
    time: '15 minutes',
    img: 'https://images.unsplash.com/photo-1617191518006-04de97c3b6b3'
  },
  {
    title: 'Lotus delight salad',
    time: '20 minutes',
    img: 'https://images.unsplash.com/photo-1572441710534-26c0637f0154'
  },
  {
    title: 'Snack cakes',
    time: '21 minutes',
    img: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a'
  }
];

const recipesWithVideos = [
  {
    title: 'Salad with cabbage and shrimp',
    time: '32 minutes',
    img: 'https://images.unsplash.com/photo-1573878742349-5bc3e1d76f0c'
  },
  {
    title: 'Salad of cove beans, shrimp and potatoes',
    time: '20 minutes',
    img: 'https://images.unsplash.com/photo-1603079842877-45c1a7b67fa9'
  },
  {
    title: 'Sunny-side up fried egg',
    time: '15 minutes',
    img: 'https://images.unsplash.com/photo-1572656630645-ef32f2f6f1bb'
  },
  {
    title: 'Lotus delight salad',
    time: '20 minutes',
    img: 'https://images.unsplash.com/photo-1585032226650-8d88f4b5b3f5'
  }
];

const RecipesSection = () => {
  return (
    <Container className="py-5">
      {/* This Summer Recipes */}
      <h2 className="text-center text-danger mb-3" style={{ color: '#FF69B4' }}>This Summer Recipes</h2>
      <p className="text-center text-muted mb-5">We have all your Independence Day sweets covered.</p>
      <Row className="g-4 mb-5">
        {recipesSummer.map((recipe, idx) => (
          <Col key={idx} xs={12} sm={6} md={3}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={recipe.img} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{recipe.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Badge bg="light" text="dark" className="text-pink">{recipe.time}</Badge>
                  <i className="bi bi-bookmark" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Recipes With Videos */}
      <h2 className="text-center text-danger mb-3" style={{ color: '#FF69B4' }}>Recipes With Videos</h2>
      <p className="text-center text-muted mb-5">Cooking Up Culinary Creations with Step-by-Step Videos</p>
      <Row className="g-4">
        {recipesWithVideos.map((recipe, idx) => (
          <Col key={idx} xs={12} sm={6} md={3}>
            <Card className="h-100 shadow-sm border-0">
              <Card.Img variant="top" src={recipe.img} style={{ height: '180px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{recipe.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                  <Badge bg="light" text="dark" className="text-pink">{recipe.time}</Badge>
                  <i className="bi bi-bookmark" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RecipesSection;

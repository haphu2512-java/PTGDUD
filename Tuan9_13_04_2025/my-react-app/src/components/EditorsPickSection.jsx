import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

const editorsPick = [
  {
    title: 'Stuffed sticky rice ball',
    time: '34 minutes',
    author: 'Jennifer King',
    description: 'Stuffed sticky rice balls: A delightful Asian treat with chewy, glutinous rice and a flavorful surprise filling...',
    img: 'https://images.unsplash.com/photo-1622445272749-f33e6742e9b5',
    authorImg: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    title: 'Strawberry smoothie',
    time: '40 minutes',
    author: 'Matthew Martinez',
    description: 'Savor the refreshing delight of a strawberry smoothie. Made with ripe strawberries, this creamy blend offers...',
    img: 'https://images.unsplash.com/photo-1582192435268-3b4e0ea1f55b',
    authorImg: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    title: 'Latte Art',
    time: '19 minutes',
    author: 'Sarah Hill',
    description: 'Latte art is the skillful craft of creating captivating designs on the surface of a latte...',
    img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13',
    authorImg: 'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    title: 'Butter fried noodles',
    time: '16 minutes',
    author: 'Julia Lopez',
    description: 'Butter fried noodles: Savory noodles cooked in butter for a delicious and satisfying meal...',
    img: 'https://images.unsplash.com/photo-1613145997273-8b6dc9e7ee8f',
    authorImg: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
];

const EditorsPickSection = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center text-danger mb-3" style={{ color: '#FF69B4' }}>Editor's pick</h2>
      <p className="text-center text-muted mb-5">
        Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!
      </p>
      <Row className="g-4">
        {editorsPick.map((item, idx) => (
          <Col key={idx} xs={12} md={6}>
            <Card className="h-100 shadow-sm border-0 d-flex flex-row align-items-center p-3">
              <Card.Img
                variant="left"
                src={item.img}
                style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <Card.Body>
                <div className="d-flex justify-content-between">
                  <small className="text-muted">{item.time}</small>
                  <i className="bi bi-bookmark" style={{ fontSize: '1.2rem', cursor: 'pointer' }}></i>
                </div>
                <Card.Title className="mt-2" style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>{item.title}</Card.Title>
                <div className="d-flex align-items-center mb-2">
                  <Image
                    src={item.authorImg}
                    roundedCircle
                    width={30}
                    height={30}
                    className="me-2"
                  />
                  <small>{item.author}</small>
                </div>
                <Card.Text style={{ fontSize: '0.9rem' }}>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EditorsPickSection;

import React from 'react'
import { Container, Row, Col, Card,Button } from 'react-bootstrap'

const Services2 = () => {
  return (
    <>
      <Container fluid={true} className='text-center '>
        <h4 className="serviceMaintitle">
            Our Services
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione doloribus possimus quis explicabo nobis! Modi dolore voluptatum nihil tempore? Ratione.</p>
        <Container className='service'>
            <Row className='mb-5'> 
                <Col sm={12} md={6} lg={4}>
                <Card style={{ width: '22rem' }}>
                <div className='serviceBox'>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <h4 className='serviceCardTitle'>Card Title</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      </div>
    </Card>
            
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div>
                <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
      <h4 className='serviceCardTitle'>Card Title</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div>
                <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
      <h4 className='serviceCardTitle'>Card Title</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div>
                <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
      <h4 className='serviceCardTitle'>Card Title</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div>
                <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
      <h4 className='serviceCardTitle'>Card Title</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div>
                <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
      <h4 className='serviceCardTitle'>Card Title</h4>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </div>
                </Col>
            </Row>
        </Container>
        
      </Container>
    </>
  )
}

export default Services2

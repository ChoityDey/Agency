import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Services = () => {
  return (
    <>
      <Container className='Services'>
        <div className='ServiceTitle'>
            <Row>
                <Col sm={12} md={12} lg={12}>
                <h1>Our Services</h1>
                <p>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</p>
                </Col>
            </Row>
        </div>
        <div className='ServiceContent'>
            <Row>
                
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>Business Stratagy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>Business Stratagy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>Business Stratagy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>Business Stratagy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>Business Stratagy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
                <Col sm={12} md={6} lg={4}>
                <div className='Service'>
                <h4>Business Stratagy</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis neque ipsam iure accusantium assumenda fuga.</p>
                </div>
                </Col>
            </Row>
        </div>

      </Container>
    </>
  )
}

export default Services

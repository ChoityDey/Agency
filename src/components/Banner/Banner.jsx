import React from 'react'
import {Button, Container, Row} from 'react-bootstrap';
 

const Banner = () => {
  return (
    <>
    <Container fluid={true} className="TopFixedBanner p-0">
      <div className='topBannerOverlay'>
        <Container>
          <Row>
            <col />
            <div className='bannerContent'>
            <span className='bannerTitle'>WE ARE AGENCY</span>
            <h2 className='bannerHeading'>TECHNOLOGY & INNOVATION FOR AGENCY SERVICES.</h2>
            <a className='bannerLink' href="">Contact</a>
            </div>
            <col/>
            
          </Row>
        </Container>

      </div>

    </Container>
  </>
  )
}

export default Banner

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footers = () => {
  return (
    <div className='bg-green-secondary'>
      <hr className='border-0' />
      <Container className='p-5'>
        <Row>
          <Col>
            <h6 className='w-100 text-white text-center'>RacikPc</h6>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footers;
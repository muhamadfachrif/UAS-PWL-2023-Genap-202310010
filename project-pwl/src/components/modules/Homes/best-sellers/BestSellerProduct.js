import React from 'react'
import { Card, Container, InputGroup, Row, Col } from 'react-bootstrap'
import Img1 from '../../../assets/calyx/Gtx1660.jpg'
import Img2 from '../../../assets/calyx/RTX 2060.jpg'
import Img3 from '../../../assets/calyx/psucroshair.jpg'
import Img4 from '../../../assets/calyx/psubequite.jpg'
import Img5 from '../../../assets/calyx/moboasus.jpg'
import Img6 from '../../../assets/calyx/mobogigabyte.jpg'
import Img7 from '../../../assets/calyx/ssdsata.jpg'
import Img8 from '../../../assets/calyx/ssdsamsung.png'
import { Link } from 'react-router-dom'

const BestSellerProduct = () => {
    return (
        <Container>
            <Row>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img1} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>Gtx1660</Card.Title>
                            <Link to='https://www.google.com/maps' className='custom-fs-5 fw-600 text-green-primary'>
                                 Rp.1.850.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 10</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img7} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>SSD Sata</Card.Title>
                            <Link to='https://goo.gl/maps/jCA5ukCw4V8scikN7' className='custom-fs-5 fw-600 text-green-primary'>
                                 Rp.450.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 5</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img8} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>SSD Samsung Evo</Card.Title>
                            <Link to='https://www.google.com/maps' className='custom-fs-5 fw-600 text-green-primary'>
                                Rp.1.300.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 3</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img2} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>RTX 2060</Card.Title>
                            <Link to='https://www.google.com/maps' className='custom-fs-5 fw-600 text-green-primary'>
                                 Rp.2.850.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 2</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img3} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>PSU Croshair</Card.Title>
                            <Link to='https://www.google.com/maps' className='custom-fs-5 fw-600 text-green-primary'>
                                 Rp.950.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 6</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img4} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>PSU Beqiuet</Card.Title>
                            <Link to='https://www.google.com/maps' className='custom-fs-5 fw-600 text-green-primary'>
                                 Rp.650.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 1</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img5} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>Mother Board Asus</Card.Title>
                            <Link to='https://www.google.com/maps' className='custom-fs-5 fw-600 text-green-primary'>
                                 Rp.850.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 3</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={6} md={6} lg={3} className='mb-4'>
                    <Card style={{ height: '21rem', padding: '1rem', borderRadius: '10px', border: 'none' }} className='box-best-product'>
                        <Card.Img variant="top" src={Img6} style={{ height: '11rem', backgroundSize: 'cover', borderRadius: '10px' }} />
                        <Card.Body className='px-0'>
                            <Card.Title className='custom-fs-2 text-gray'>Mother Board Gigabyte</Card.Title>
                            <Link to='https://www.google.com/maps' className='custom-fs-5 fw-600 text-green-primary'>
                                 Rp.750.000
                            </Link>
                            <div className="justify-content-between d-flex">
                                <InputGroup className="w-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" class="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg>
                                    <p className='ms-2'>4.8</p>
                                </InputGroup>
                                <p className='w-50 text-end custom-fs-1'>Tersedia 2</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default BestSellerProduct;
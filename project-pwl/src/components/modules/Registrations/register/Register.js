import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


import BackgroundImg from '../../../assets/hero-image/bgimg.png';
import FormRegister from './FormRegister';

const Register = () => {
    
    return (
        <Container fluid className='pb-5' style={{ backgroundImage: `url(${BackgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight:'100vh' }} >
            <Row>
                <Col md={{ offset: 3, span: 5 }} className="mt-4 p-5">
                    <Card className='bg-green-secondary w-75 mx-auto p-4 border-0'>
                        <Link to='/signin' className='text-end text-white fw-400 custom-fs-4 text-decoration-none'>Masuk</Link>
                        <h3 className='text-white fw-500 fs-8 my-3'>Daftar</h3>
                        <FormRegister />
                        <p className='pt-3 custom-fs-1 text-white fw-400 text-center'>Dengan mendaftar, saya menyetujui <span className='fw-600 text-green-primary'>Syarat dan Ketentuan</span> serta <span className='fw-600 text-green-primary'>Kebijakan Privasi</span></p>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;
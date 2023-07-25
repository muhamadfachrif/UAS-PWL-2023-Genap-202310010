import React from 'react'
import { Button, Container, Form, InputGroup, Navbar } from 'react-bootstrap'

export default function HeaderNavbar() {
  return (
    <Navbar expand="lg" className='bg-green-secondary py-2 shadow-5'>
      <Container className='justify-content-betwen w-100'>
        <Navbar.Brand href="#home" className='text-white fw-600 custom-fs-4'>RacikPc</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='py-3'>
        
        <InputGroup className='w-100 align-items-center justify-content-between'>
            <p className='mb-0 text-end text-white'>Akun Saya</p>
          </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

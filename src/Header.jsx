import React from 'react'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="dark" data-bs-theme="dark" expand="md" className="bg-body-tertiary">
        <Container className=''>
          <Navbar.Brand href="#home" className='classFont'>Лого</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className="me-auto classFont">
              <Nav.Link href="#home">Об СНТ Рассвет</Nav.Link>
              <Nav.Link href="#News">Новости</Nav.Link>
              <Nav.Link href="#BuySell">Купи/Продай</Nav.Link>
              <Nav.Link href="#Questions">Вопросы</Nav.Link>
              <Nav.Link href="#Contacts">Контакты</Nav.Link>
              <Nav.Link href="#About">Документы</Nav.Link>
            </Nav>
            <Nav>
              <Navbar.Text><Button variant='success'>Личный кабинет</Button></Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
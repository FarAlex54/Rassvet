import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><p className='classFont'>Главная</p></Navbar.Brand>
          <Nav className="me-auto classFont">
            <Nav.Link href="#home">Об СНТ Рассвет</Nav.Link>
            <Nav.Link href="#News">Новости</Nav.Link>
            <Nav.Link href="#BuySell">Купи/Продай</Nav.Link>
            <Nav.Link href="#Questions">Вопросы</Nav.Link>
            <Nav.Link href="#Contacts">Контакты</Nav.Link>
            <Nav.Link href="#About">Документы</Nav.Link>
            <Nav.Item><Button variant='success'><p className='classFont'>Личный кабинет</p></Button></Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
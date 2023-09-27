import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Главная</Navbar.Brand>
          <Nav className="me-auto classFont">
            <Nav.Link href="#home">Об СНТ Рассвет</Nav.Link>
            <Nav.Link href="#News">Новости</Nav.Link>
            <Nav.Link href="#BuySell">Купи/Продай</Nav.Link>
            <Nav.Link href="#About">Учредительные документы</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
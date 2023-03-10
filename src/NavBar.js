import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card'
import logo from './download.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillCartCheckFill} from 'react-icons/bs'

function NavBar(){
    const [showCart, setShowCart] = useState(false)

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                <Navbar.Brand href="#">
                    <img src={logo} alt="Logo Here" height="10%" width="30%"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#">Home</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                    <button className="d-flex m-4 p-1" onClick={() => {setShowCart(!showCart)}}>
                        <BsFillCartCheckFill height="50%" width="50%"/>
                    </button>
                </Navbar.Collapse>
                </Container>
            </Navbar>
            {
                showCart ? (
                    <Container fluid className="w-25">
                        <Card>
                            <Card.Body>
                                <Card.Title>Cart Deatils</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Container>    
                ) : ''
            }    
        </div>
    )
}

export default NavBar
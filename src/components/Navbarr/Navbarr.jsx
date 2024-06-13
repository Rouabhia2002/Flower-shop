import React, { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Stack from 'react-bootstrap/Stack';
import { SelectedItemContext } from '../../context/SelectedItemContext'; // Adjust path as necessary
import { CiCircleRemove } from "react-icons/ci";

function Navbarr() {
  const [show, setShow] = useState(false);
  const { CartItem ,calculateTotalPrice ,handleRemoveItem} = useContext(SelectedItemContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar collapseOnSelect  expand="lg"  className="custom-navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">FLOWER SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/shop">
              Shop
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link onClick={handleShow} style={{ fontSize: '24px' }}>
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {Array.isArray(CartItem) ? (
            <Stack gap={3}>
              {CartItem.map((item) => (
                <div className="p-2 d-flex flex-row" key={item.id}>
                <div> 
                <ul className="cart-item-details">
            <li>Title: {item.title}</li>
            <li>Quantity: {item.quantity}</li>
            <li>Price: ${item.price * item.quantity}</li>
                </ul>
                </div>
                <div><img src={item.img} alt={item.title} style={{ width: '150px', height: '150px' }} /></div>
                <CiCircleRemove 
  onClick={() => handleRemoveItem(item.id)}
  style={{ fontSize: '24px', cursor: 'pointer' }} // Ajustez la taille de l'icône et ajoutez le curseur de pointer
/>

                
              </div>
              ))}
            </Stack>
          ) : (
            <p>No items in the cart.</p>
          )}

          <h6>the price of your product is {calculateTotalPrice()} $</h6>

        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default Navbarr;

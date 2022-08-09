import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'semantic-ui-react';
import Modal from 'react-bootstrap/Modal';

export default function Header() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <strong style={{ color: 'white', fontSize: '18px' }} >poker planning</strong>
          <Button color='green' 
                  style={{ marginLeft: 'auto' }} 
                  onClick={handleShow} >
                    Join
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Join the board!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <strong>Name: &nbsp;&nbsp; </strong> 
                <div class="ui input"><input type="text" placeholder="Enter your name"/></div>
                <br/><br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Join
              </Button>
            </Modal.Footer>
          </Modal>

        </Container>
      </Navbar>
    </>
  );
}







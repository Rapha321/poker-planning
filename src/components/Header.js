import React, { useState, useEffect, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'semantic-ui-react';
import Modal from 'react-bootstrap/Modal';
import { BoardContext } from './BoardContext';

export default function Header() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");

  // On utilise/set les state definir dans BoardContext.js
  const [board, setBoard] = useContext(BoardContext)
  const { user, score } = board;


  useEffect(() => {
    const boards = JSON.parse(localStorage.getItem("user"));
    if (user === "" && score === 0) {
      setBoard( prev => ({...prev, ...boards}));
    }
    
  }, []);


  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(board));
  }, [user, board]);


  console.log("Board: ", board);
  

  const handleChange = () => {
    setBoard( prev => ({...prev, [name]: 0 }));
  }


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
                <div class="ui input">
                  <input type="text" name="name" value={board.name} onChange={(e) => {setName(e.target.value)}} placeholder="Enter your name"/>
                </div>

                <br/><br />
            </Modal.Body>
            <Modal.Footer>
              <Button color='green' onClick={ () => {handleClose(); handleChange(); console.log("header: ", board);} }>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

        </Container>
      </Navbar>
    </>
  );

}







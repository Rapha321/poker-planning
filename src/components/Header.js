import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'semantic-ui-react';
import Modal from 'react-bootstrap/Modal';
import { db } from '../firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';



export default function Header() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [ users, setUsers ] = useState([]);
  const usersCollectionRef = collection(db, "users");
  const [ newName, setNewName ] = useState("");
  const [ newScore, setNewScore ] = useState(0);

  let { currentSession } = useParams();



  // const handleChange = () => {
  //   setBoard( prev => ({...prev, [name]: 0 }));
  // }




  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), boardId: currentSession})));
    }

    getUsers();
  }, [])


  const createUser = async () => {
    await addDoc(usersCollectionRef, { boardId: currentSession, userName: newName, score: newScore});
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
                  <input type="text" onChange={(e) => {setNewName(e.target.value)}} placeholder="Enter your name"/>
                </div>

                <br/><br />
            </Modal.Body>
            <Modal.Footer>
              <Button color='green' onClick={ () => {handleClose(); createUser(); } }>
                Submit
              </Button>
            </Modal.Footer>
          </Modal>

        </Container>
      </Navbar>
    </>
  );

}







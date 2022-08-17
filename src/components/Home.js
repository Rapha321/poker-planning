import React, { useState, useEffect, useContext } from 'react';
import { Button, Container } from 'semantic-ui-react'
import { useNavigate, useParams } from "react-router-dom";
import Footer from './Footer';
import { db } from '../firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';

export default function Home() {

    const [ users, setUsers ] = useState([]);
    const usersCollectionRef = collection(db, "users");
    const [ newName, setNewName ] = useState("");
    const [ newScore, setNewScore ] = useState(0);

    let navigate = useNavigate();

    const uuid = () => {
      return ( ( ( 1+Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
    }

    let currentSession = `${uuid()}-${uuid()}-${uuid()}-${uuid()}`;


    const createUser = async () => {
      await addDoc(usersCollectionRef, { boardId: currentSession, userName: newName, score: newScore});
    }


    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), boardId: doc.boardId})));
      }

      getUsers();
    }, [])



    const newBoard = () => {
        navigate(`/Board/${currentSession}`)
    }


    // const handleChange = e => {
    //     setBoard({ [e.target.value]: 0 });
    // }

    

    return (
      <>
        <div  style={{ paddingTop: '15%' }}>
            <div >

                <h1>Start a Poker Planning</h1>
                <br />
                <strong>Name: &nbsp;&nbsp; </strong> 
                <div className="ui input">
                  <input type="text" onChange={ (e) => { setNewName(e.target.value) } } placeholder="Enter your name"/>
                </div>
                <br/><br />
                <Button primary size='huge' onClick={ () => { createUser(); newBoard() } } >Start</Button>
                <Footer />
            </div>
        </div>
      </>
    );

  }

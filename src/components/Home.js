import React, { useState, useEffect, useContext } from 'react';
import { Button, Container } from 'semantic-ui-react'
import { useNavigate, useParams } from "react-router-dom";
import Footer from './Footer';
import { BoardContext } from './BoardContext';
import Cookies from 'universal-cookie';

export default function Home() {

    // On utilise/set les state definir dans BoardContext.js
    const [board, setBoard] = useContext(BoardContext)
    const { user, score } = board;
    
    let navigate = useNavigate();

 
    useEffect(() => {
      const users = JSON.parse(localStorage.getItem("user"));
      if (user === "" && score === 0) {
        setBoard( prev => ({...prev, ...users}));
      }
      
    }, []);


    useEffect(() => {
      localStorage.setItem("user", JSON.stringify(board));
    }, [user, board]);

    const uuid = () => {
        return ( ( ( 1+Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
    }


    const newBoard = () => {
        let currentSession = `${uuid()}-${uuid()}-${uuid()}-${uuid()}`;
        navigate(`/Board/${currentSession}`)
        console.log("home: ", board);
    }

    const handleChange = e => {
        setBoard({ [e.target.value]: 0 });
    }

    

    return (
      <>
        <div  style={{ paddingTop: '15%' }}>
            <div >

                <h1>Start a Poker Planning</h1>
                <br />
                <strong>Name: &nbsp;&nbsp; </strong> 
                <div className="ui input">
                  <input type="text" name="name" value={board.name} onChange={handleChange} placeholder="Enter your name"/>
                </div>
                <br/><br />
                <Button primary size='huge' onClick={ newBoard } >Start</Button>
                <Footer />
            </div>
        </div>
      </>
    );

  }
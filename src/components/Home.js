import React, { useState, useEffect } from 'react';
import { Button, Container } from 'semantic-ui-react'
import { useNavigate, useParams } from "react-router-dom";
import Footer from './Footer';

export default function Home() {

    let navigate = useNavigate();
    

    const uuid = () => {
        return ( ( ( 1+Math.random() ) * 0x10000 ) | 0 ).toString( 16 ).substring( 1 );
    }


    const newBoard = () => {
        let currentSession = `${uuid()}-${uuid()}-${uuid()}-${uuid()}`;
        navigate(`/Board/${currentSession}`)
    }

    return (
      <>
        <div  style={{ paddingTop: '15%' }}>
            <div >

                <h1>Start a Poker Planning</h1>
                <br />
                <strong>Name: &nbsp;&nbsp; </strong> 
                <div class="ui input"><input type="text" placeholder="Enter your name"/></div>
                <br/><br />
                <Button primary size='huge' onClick={ newBoard } >Start</Button>
                <Footer />
            </div>
        </div>
      </>
    );
  }
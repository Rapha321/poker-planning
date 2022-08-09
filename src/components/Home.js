import React, { useState, useEffect } from 'react';
import { Button, Container } from 'semantic-ui-react'
import { useNavigate, useParams } from "react-router-dom";
import Footer from './Footer';

export default function Home() {

    let navigate = useNavigate();

    const newBoard = () => {
        navigate(`/newBoard`)
    }

    return (
      <>
        <div  style={{ paddingTop: '15%' }}>
            <div >

                <h1>Poker Planning</h1>
                <br/>
                <Button positive size='huge' onClick={ newBoard } >Start a Board</Button>
                <Footer />
            </div>
        </div>
      </>
    );
  }
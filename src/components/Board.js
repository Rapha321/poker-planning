import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react';
import Footer from './Footer';
import Header from './Header';
import Result from './Result';
import { BoardContext } from './BoardContext';


export default function Board() {

    let {currentSession} = useParams();
    let {check} = useParams();

    let [card, setCard] = useState("Card");
    let [score, setScore] = useState('-');

    // On utilise/set les state definir dans BoardContext.js
    const [board, setBoard] = useContext(BoardContext)

    const cardStyle = {
        border: '2px solid #00BFFF', 
        padding: '20px', 
        marginTop: '10px',
        marginRight: '15px',
        marginLeft: '15px', 
        height: '95px', 
        width: '80px',
        borderRadius: '5px',
        fontWeight: 'bold'
    }

    const cardScore = {
        padding: '20px', 
        margin: '20px', 
        borderRadius: '50%'
    }


    return (
      <>
        <Header />

        <Container style={{ border: '5px solid black', 
                            marginTop: '4%', 
                            paddingTop: '20px', 
                            paddingBottom: '20px', 
                            borderRadius: '130px',
                            backgroundColor: '#E0FFFF'
                        }} >
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
                <div style={{ display: 'flex', width: '350px', alignItems: 'center', justifyContent: 'center' }}>
                    <Button primary size='huge' >Result</Button>
                </div>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
                <div style={cardStyle}> {card} <span>{score}</span> </div>
            </div>

        </Container>

        <Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button inverted color='blue' style={cardScore}>1</Button>
                <Button inverted color='blue' style={cardScore}>1</Button>
                <Button inverted color='blue' style={cardScore}>1</Button>
                <Button inverted color='blue' style={cardScore}>1</Button>
                <Button inverted color='blue' style={cardScore}>1</Button>
                <Button inverted color='blue' style={cardScore}>1</Button>
                <Button inverted color='blue' style={cardScore}>1</Button>
            </div>
        </Container>

       <Footer />
      </>
    );
  }
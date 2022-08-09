import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react';
import Footer from './Footer';
import Header from './Header';
import Result from './Result';


export default function Board() {

    const [participants, setParticipants] = useState([]);
    let {currentSession} = useParams();
    let {check} = useParams();

    const cardStyle = {
        border: '2px solid #00BFFF', 
        padding: '20px', 
        margin: '10px', 
        height: '90px', 
        width: '70px',
        borderRadius: '5px'
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
                            marginTop: '5%', 
                            paddingTop: '20px', 
                            paddingBottom: '20px', 
                            borderRadius: '130px',
                            backgroundColor: '#E0FFFF'
                        }} >
            
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style= {cardStyle} >cell 1</div>
                <div style={cardStyle}>cell 1</div>
                <div style={cardStyle}>cell 1</div>
                <div style={cardStyle}>cell 1</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                <div style={cardStyle}>cell 1</div>
                <div style={{ display: 'flex', width: '310px', alignItems: 'center', justifyContent: 'center' }}>
                    <Button primary size='huge' >Result</Button>
                </div>
                <div style={cardStyle}>cell 1</div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={cardStyle}>cell 1</div>
                <div style={cardStyle}>cell 1</div>
                <div style={cardStyle}>cell 1</div>
                <div style={cardStyle}>cell 1</div>
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
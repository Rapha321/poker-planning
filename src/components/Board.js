import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Container, Button } from 'semantic-ui-react';
import Footer from './Footer';
import Header from './Header';
import Result from './Result';
import { db } from '../firebase-config';
import { addDoc, collection, getDocs } from 'firebase/firestore';


export default function Board() {

    let {currentSession} = useParams();
    let {check} = useParams();
    const [ users, setUsers ] = useState([]);
    let [card, setCard] = useState("Card");
    let [score, setScore] = useState('-');
    const usersCollectionRef = collection(db, "users");


    const cardStyle = {
        border: '2px solid #00BFFF', 
        padding: '20px', 
        marginTop: '10px',
        marginRight: '15px',
        marginLeft: '15px', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95px', 
        width: '80px',
        borderRadius: '5px',
        fontWeight: 'bold',
        backgroundColor: '#F5F5F5',
        flexDirection: 'column'
    }

    const userNameStyle = {
        display: 'flex',
        fontSize: '13px',
        color: '#8B4513',
        alignItems: 'center',
        justifyContent: 'center'
    }

    const userScoreStyle = {
        display: 'flex',
        fontSize: '28px',
        color: '#6A5ACD',
        paddingTop: '5px',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5px'
    }

    const scoreButtonStyle = {
        padding: '20px', 
        margin: '20px', 
        borderRadius: '50%'
    }


    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(), boardId: currentSession})));
        }
    
        getUsers();
      }, [])

      console.log("USERS: ", users);

      let numberOfUsers = users.length;

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
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers === 0 ? 'card' : users[0].userName}</span>
                    <span style={userScoreStyle}>{numberOfUsers === 0 ? '-' : users[0].score}</span> 
                </div>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 2 ? 'card' : users[1].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 2 ? '-' : users[1].score}</span> 
                </div>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 3 ? 'card' : users[2].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 3 ? '-' : users[2].score}</span> 
                </div>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 4 ? 'card' : users[3].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 4 ? '-' : users[3].score}</span> 
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 5 ? 'card' : users[4].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 5 ? '-' : users[4].score}</span> 
                </div>
                <div style={{ display: 'flex', width: '350px', alignItems: 'center', justifyContent: 'center' }}>
                    <Button primary size='huge' >Result</Button>
                </div>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 6 ? 'card' : users[5].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 6 ? '-' : users[5].score}</span> 
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 7 ? 'card' : users[6].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 7 ? '-' : users[6].score}</span> 
                </div>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 8 ? 'card' : users[7].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 8 ? '-' : users[7].score}</span> 
                </div>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 9 ? 'card' : users[8].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 9 ? '-' : users[8].score}</span> 
                </div>
                <div style={cardStyle}> 
                    <span style={userNameStyle}>{numberOfUsers < 10 ? 'card' : users[9].userName}</span> 
                    <span style={userScoreStyle}>{numberOfUsers < 10 ? '-' : users[9].score}</span> 
                </div>
            </div>

        </Container>

        <Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button inverted color='blue' style={scoreButtonStyle}>1</Button>
                <Button inverted color='blue' style={scoreButtonStyle}>3</Button>
                <Button inverted color='blue' style={scoreButtonStyle}>5</Button>
                <Button inverted color='blue' style={scoreButtonStyle}>8</Button>
                <Button inverted color='blue' style={scoreButtonStyle}>10</Button>
                <Button inverted color='blue' style={scoreButtonStyle}>13</Button>
                <Button inverted color='blue' style={scoreButtonStyle}>21</Button>
            </div>
        </Container>

       <Footer />
      </>
    );
  }
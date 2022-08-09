import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
      <>
       <Navbar bg="dark" variant="light" style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Container>
            <span style={{ color: "white", fontSize: 10, marginRight: "auto", marginLeft: "auto" }}>made with ❤️️ by raphael albern</span>
        </Container>
      </Navbar>
      </>
    );
  }
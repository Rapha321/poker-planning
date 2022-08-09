import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Result from './Result';


export default function Board() {
    return (
      <>
        <Header />

       <h1>BOARD</h1>
       
       <Result />
       <Footer />
      </>
    );
  }
import React, { useState, useEffect } from 'react';
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loading_page from './Loading_page/Loading_page'
import Header from './Header'
import Footer from './Footer';
import Home_page from './Home_page';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      setIsLoading(false);

      document.body.classList.add("blur-active");

    }, 5000);

  }, []);

  if (isLoading === true) {

    return <Loading_page/>

  }
  else {

    return (

      <>
  
        <Header/>
        <Home_page/>
        <Footer/>
  
      </>
  
    )

  }

}

export default App

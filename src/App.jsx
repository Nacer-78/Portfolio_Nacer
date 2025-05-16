import React, { useState, useEffect } from 'react';
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Header from './Header'
import Loading_page from './Loading_page/Loading_page'

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
  
      </>
  
    )

  }

}

export default App

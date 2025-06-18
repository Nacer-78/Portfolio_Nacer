import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Loading_page from './Loading_page/Loading_page'
import Header from './Header'
import Footer from './Footer';
import Home_page from './Home_page';
import About_us from './About_us';

function App() {
  
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {

      setIsLoading(false);

      document.body.classList.add("blur-active");

    }, 2500);

  }, []);

  if (isLoading === true) {

    return <Loading_page/>

  }
  else {

    return (

      <>
        <Header/>
          <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home_page />} />
                <Route path={"/about_us"} element={<About_us />} />
            </Routes>
          </BrowserRouter>
        <Footer/>
  
      </>
  
    )

  }

}

export default App

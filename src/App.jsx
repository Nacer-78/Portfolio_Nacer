import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading_page from './Loading_page/Loading_page'
import Header from './Header'
import Footer from './Footer';
import Home_page from './Home_page';
import About_us from './About_us';
import My_projects from './My_projects';
import Skills from './Skills';
import Contact_me from './Contact_me';
import Certification from './Certification';
import Hobbies from './Hobbies';

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

        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path={"/"} element={<Home_page />} />
                <Route path={"/about_us"} element={<About_us />} />
                <Route path={"/my_projects"} element={<My_projects />} />
                <Route path={"/skills"} element={<Skills />} />
                <Route path={"/contact_me"} element={<Contact_me />} />
                <Route path={"/certification"} element={<Certification />} />
                <Route path={"/hobbies"} element={<Hobbies />} />
            </Routes>
          <Footer/>
        </BrowserRouter>

      </>
  
    )

  }

}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'
import Header from './Header'
import Loading_page from './Loading_page/Loading_page'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

      {/* <Header/> */}
      <Loading_page/>

    </>

  )

}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Route,Routes,Navigate } from 'react-router-dom'
import Layout from './layouts/Layouts'

function App() {


  return (
    <>
      <Router>
        <Routes>

        <Route path='/' element={<Layout></Layout>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

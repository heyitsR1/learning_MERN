import React from 'react'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div>
      <Header></Header>
      <ToastContainer/>
       <Container className ='my-2'>
      <Outlet> </Outlet>
      </Container>
    </div>
  )
}

export default App

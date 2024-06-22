import { useState } from 'react'
import './App.css'
import Bmı from './components/Bmı'
import Header from './components/Header'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  return (
    <>
    <Header/>

    
    <Bmı/>
    <ToastContainer />
    </>
  )
}

export default App

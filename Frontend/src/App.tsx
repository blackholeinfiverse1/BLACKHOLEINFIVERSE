
import './App.css'
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Game from './Components/Game';
import Footer from './Components/Footer';
import Robotics from './Components/Robotics';
import Contact from './Components/Contact';

import BlockChain from './Components/BlockChain';
import SignUp from './User/SignUp';
import Login from './User/Login';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  
  return (
    <Box className='App' sx={{bgcolor: 'black'}}>
      <Navbar></Navbar>
      <ToastContainer />
      <hr></hr>
      <hr></hr>
      <hr></hr>

        <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/contact" element={<Contact/>} />

   <Route path="/about" element={<About/>} />
   <Route path="/game" element={<Game/>}/>
   <Route path="/robotics" element={<Robotics/>}/>
   <Route path="/blockchain" element={<BlockChain/>}/>
   <Route path="/signup" element={<SignUp/>}/>
   <Route path="/login" element={<Login/>}/>





   </Routes>
   <Footer></Footer>
   </Box>
  )
}

export default App

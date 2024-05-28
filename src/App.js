
import { useState } from 'react';
import React from "react";
import './App.css';
import About from './component.js/About';
import Navbar from './component.js/Navbar';
import Textform from './component.js/Textform';
import Alert from './component.js/Alert';

import {
  BrowserRouter as  Router,Routes,Route} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');//weather dark mode is enabled or not
  const [alert,setAlert]=useState('null');
 const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
    
 })
 setTimeout (()=>{
 setAlert(null);

  } ,2000);

 }





  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been Enabled","success");

      document.title="textutils-Dark mode";
      setInterval(()=>{
        document.title="textutils-Dark mode";

      },3000)
      setInterval(()=>{
        document.title=" Virurs textutils-Dark mode";

      },1500)
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled","success");
      document.title="textutils-light mode";
    }
  }
  
  return (
    <div className="App">
      <Router>
<Navbar title="TextUtil"Home="My home"mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">

<Routes>
            <Route exact path="/about" element={<About/>} >

            </Route>

            <Route exact path="/home" element={<Textform showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode}/>}>

            </Route>
          </Routes>


        </div>
         </Router>
         

  
  
     </div>
  );
}

export default App;

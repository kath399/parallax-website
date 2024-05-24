import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Landing from "./views/landing/Landing";
import Form from "./views/form/Form";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/form" element={<Form Title={'Drone Roof Check'}/>} />
      </Routes>
    </Router>
  );
}

export default App;
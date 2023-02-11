
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { APP_ROUTE } from "./routes/route";
import logo from './logo.svg';
import './App.css';
import AppContainer from "./components/AppContainer";
import NavBar from "./components/NavBar";
import FooterBar from "./components/FooterBar";
import Chatbot from "./components/chatbot";
import 'animate.css/animate.min.css'

function App() {
  return (
    <>
    <NavBar />
      <Router>
        <Routes>
            <Route path="/" element={<AppContainer />} />
        </Routes>
      </Router>
      <Chatbot />
    <FooterBar />
    </>
  );
}

export default App;

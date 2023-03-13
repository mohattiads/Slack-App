import React from "react";
import Header from "./componont/Header"
import "./App.css";
import styled from "styled-components";
import Sidebar from "./componont/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
      <div>
          <Router>
              
              <Header />  
                <AppBody>
                <Sidebar/>
                        <Routes>
                            <Route  path="/">
                              {/* CHATTTTT */}

                            </Route>
                        </Routes>
                </AppBody>


          </Router>
      
      </div>

  );
}

export default App;

const AppBody =styled.div`
display: flex;
height: 100vh;


`
import React from 'react';
import './App.css';
import { Layout, Content, Navigation } from 'react-mdl';
import Main from "./components/Main";
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <nav class="navbar">
          <div class="title">MADDIE FORD</div>
          <a href="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
          <div class="navbar-links">
            <ul>
              <Navigation>
                <li><Link to="/portfolio/about">ABOUT</Link></li>
                <li><Link to="/portfolio/resume">RESUME</Link></li>
                <li><Link to="/portfolio/projects">PROJECTS</Link></li>
                <li><Link to="/portfolio/contact">CONTACT</Link></li>
              </Navigation>
            </ul>
          </div>
        </nav>
        <Content className="content">
          <div className="page-content" />
          <Main/>
        </Content>
    </Layout>
    </div>
  );
}

export default App;

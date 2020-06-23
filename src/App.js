import React from 'react';
import './App.css';
import { Layout, Content } from 'react-mdl';
import Main from "./components/Main";

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
                <li><a href="/portfolio/about">ABOUT ME</a></li>
                <li><a href="/portfolio/resume">RESUME</a></li>
                <li><a href="/portfolio/projects">PROJECTS</a></li>
                <li><a href="/portfolio/contact">CONTACT</a></li>
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

import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from "./components/Main";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Maddie Ford" scroll>
            <Navigation>
                <Link to="/about">ABOUT ME</Link>
                <Link to="/resume">RESUME</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/contact">CONTACT</Link>
            </Navigation>
        </Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Doodle from '../doodle.svg';

class Home extends Component {
    render() {
        return (
            <div className="home-page" style={{width: '100%'}}>
                <Grid className="landing-grid" noSpacing={true} >
                    <Cell col={12}>
                        <img 
                            src={Doodle}
                            alt="doodle"
                            className="doodle-img"
                        />  
                        <div className="banner-text">
                            <h3><span>HELLO</span></h3>
                            <h1>I AM MADDIE FORD</h1>
                            <h2>COMPUTER ENGINEERING STUDENT</h2>
                            <h4>she/her</h4>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="https://linkedin.com/in/madeline-m-ford" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/maddiemford" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                       </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Home;
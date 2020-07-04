import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Hi from '../hi.svg';
import Technica from '../technica.svg';
import Quest from '../quest.svg';
import Travel from '../travel.svg';

class About extends Component {
    render() {
        return (
            <div className="about-page" style={{width: '100%'}, {textAlign: 'center'}}>
                <Grid noSpacing={true}>
                    <Cell col={12}>
                        <div className="about-intro">
                            <h1>Hi! My name is <span style={{color: '#f8efb9'}}>Maddie Ford</span>. I’m a senior at the University of Maryland, 
                                College Park pursuing a B.S. in Computer Engineering.
                            </h1>
                       </div>
                       <img 
                            src={Hi}
                            alt="hi"
                            className="hi-img"
                        /> 
                    </Cell>
                    <Cell col={12}>
                        <img 
                            src={Technica}
                            alt="technica"
                            className="technica-img"
                        /> 
                        <div className="roles-text">
                            <h1>I’m passionate about applying my technical skills to social impact. 
                                As the Brand Co-Director for Technica, the world’s largest all-women
                                 and non-binary hackathon, I co-lead a team of 7 organizers to 
                                 amplify the voices of underrepresented groups in tech and encourage 
                                 more women and non-binary people to explore technology. Outside of
                                  school and work I volunteer as a mentor with Building Inspirational 
                                  Girls, a program in the College Park community that seeks to 
                                  instill self-confidence and leadership skills in young women.
                            </h1>
                       </div>
                    </Cell>
                    <Cell col={12}>
                        <img 
                            src={Quest}
                            alt="quest"
                            className="quest-img"
                        /> 
                        <div className="quest-text">
                            <h1>I’m a student in the Quality Enhancement Systems and Teams (QUEST) 
                                Honors Program at the University of Maryland. As a QUEST student, 
                                I learn product design and process improvement through 
                                interdisciplinary, team-based projects. I have discovered a 
                                passion for customer interaction and design thinking through 
                                my QUEST coursework.
                            </h1>
                       </div>
                    </Cell>
                    <Cell col={12}>
                        <img 
                            src={Travel}
                            alt="travel"
                            className="travel-img"
                        /> 
                        <div className="funfact-text">
                            <h1>A fun fact about me is that I love to travel! It’s my goal to visit 
                                all seven continents before age 30 and work outside the United 
                                States for a few years. I also love game shows. I created a data 
                                driven plan to winning my favorite television game show, Big Brother!
                            </h1>
                       </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;
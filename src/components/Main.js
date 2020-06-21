import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Resume from "./Resume";

const Main = () => (
    <Switch>
        <Route exact path="/portfolio/" component={Home} />
        <Route path="/portfolio/about" component={About} />
        <Route path="/portfolio/contact" component={Contact} />
        <Route path="/portfolio/projects" component={Projects} />
        <Route path="/portfolio/resume" component={Resume} />
    </Switch>
)

export default Main;
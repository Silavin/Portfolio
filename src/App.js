import React, { Component } from 'react';
// import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Portfolio from './Components/Portfolio';
import PortfolioContent from './Components/PortfolioContent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {

    var portfolioContentArray = [

      {
        key: "3",
        date: "Current",
        title: "I am busy until the start of 2019, but from then on, I will be looking for another interesting pursuit.",
        decription: "If you are looking for a front-end developer for a project, you can try contacting me. I will reply within 2 working days.",
        button: ["REACT","REDUX"],
      },
      {
        key: "2",
        date: "21 April 2017",
        title: "My Second Website Created on React",
        decription: "This is the second portfolio website I made. The design was highly inspired by Jack Tomaszewski.",
        button: ["REACT","REDUX"],
      },

      {
        key: "1",
        date: "9 April 2017",
        title: "My First Website Created on React",
        decription: "The first website was a trials site for my profolio of works.",
        button: ["REACT","REDUX"],
      },

    ]

    var buttonLinksArray =[
      { 
        key: "1",
        type: "REACT",
        url:  "https://reactjs.org/"
      },
      { 
        key: "2",
        type:"REDUX",
        url: "https://redux.js.org/"
      },
    ]

    var NoMatch = ( { location } ) => (
      <div>
        <h2>Error 404. Page is not found. <code>{location.pathname}</code> is false. </h2>
      </div>
    )

    return (
      <div className="Font">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Skills" component={Skills} />
            <Route exact path="/Portfolio" render={(props) => (
              <Portfolio data={portfolioContentArray} />
            )} />
            {/* Below is for each portfolio post of content*/}
            {portfolioContentArray.map(
              (path, index) => {
                return (
                  <Route 
                  path={'/Post/' + path.title.replace(/\s+/g, '-').toLowerCase()} 
                  key={index} 
                  render={(props) => (
                    <PortfolioContent data={path} />
                  )} />
                )
              }
            )}
            {/* This is only for unfound urls. */}
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
        {/* Note: The Links are not all set up yet. Half of Home is done. The others are untouched. */}
      </div>
    );
  }
}

export default App;

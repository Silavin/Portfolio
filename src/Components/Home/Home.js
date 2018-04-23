import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react';
import ProfilePhoto from '../NavBar/Silavin.png';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>

        <div className="BodyOfHome">
          <div className="GreetingBody">
            <p className="Greetings">Greetings, I'm Sebastian.</p>
            <p className="UnderGreetings">I am an apprentice developer specialised in <span className="Bold">front-end development</span>.</p>
            <p className="UnderGreetings">Currently, I am working for Ezsofe.</p>
            <Link to="/Portfolio"><button className="ButtonStyle">Portfolio</button></Link><br />
            <Link to="/Portfolio"><button className="ButtonStyle">My Skills</button></Link>
          </div>
        </div>
        
        <Navbar collapseOnSelect  className="NarBarStyle">
        <Navbar.Header>
            <Navbar.Brand>
                <div>                    
                    <Icon className="ClickableLinks" name='mail'/>
                    <Icon className="ClickableLinks" name='facebook square'/>
                    <Icon className="ClickableLinks" name='twitter square'/>
                    <Icon className="ClickableLinks" name='github square'/>
                    <Icon className="ClickableLinks" name='linkedin square'/>
                </div>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
            <NavItem eventKey={1}>
                <Link to="/Skills" className="StyleNavBarButton">MY SKILLS</Link>    
            </NavItem>
            <NavItem eventKey={2}>
                <Link to='/Portfolio' className="StyleNavBarButton">PORTFOLIO</Link>
            </NavItem>
            <NavItem eventKey={3}>
                <Link to="/Contact" className="StyleNavBarButton">CONTACT</Link>
            </NavItem>
            <NavItem eventKey={4}>
                <Link to="/AboutMe" className="StyleNavBarButton">ABOUT ME</Link>
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

        {/* Panel After View Width Exceeds 1023px */}

        <div className="RightPanel">
            <div className="RightPanelProfile">
                <div className="ProfilePhotoShadow">
                    <img src={ProfilePhoto} alt="Silavin's Profile" className="ProfilePhoto"/>
                </div>
                <h1 className="Identity">Sebastian Sim</h1>
                <h2 className="IdentityRole">Web Developer</h2>
            </div>
                <div className="DirectionalLinksSpacing">
                    <Link to="/Skills" className="StyleNavBarButton">
                        <p className="DirectionalLinks">MY SKILLS</p>
                    </Link>
                    <Link to="/Portfolio" className="StyleNavBarButton">
                        <p className=" DirectionalLinks">PORTFOLIO</p>
                    </Link>
                    <Link to="/Contact" className="StyleNavBarButton">
                        <p className="DirectionalLinks">CONTACT</p>
                    </Link>
                    <Link to="/AboutMe" className="StyleNavBarButton">
                        <p className="DirectionalLinks">ABOUT ME</p>
                    </Link>
                </div>
                <div className="RightPanelFooter">                    
                    <p>GET IN TOUCH</p>    
                    <Icon className="ClickableLinks" name='mail' size='big' />
                    <Icon className="ClickableLinks" name='facebook square' size='big' />
                    <Icon className="ClickableLinks" name='twitter square' size='big' />
                    <Icon className="ClickableLinks" name='github square' size='big' />
                    <Icon className="ClickableLinks" name='linkedin square' size='big' />
                </div>
        </div>
      </div>
    );
  }
}

export default Home;

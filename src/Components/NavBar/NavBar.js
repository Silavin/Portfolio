import React, { Component } from 'react';
import './NavBar.css';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ProfilePhoto from './Silavin.png';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="BackgroundOfNav"></div>
        
        {/* Profile tht only appears when 767px < View Width < 1024px */}
        
        <div className="TopProfile">
            <div className="ProfilePhotoShadow">
                <img src={ProfilePhoto} alt="Silavin's Profile" className="ProfilePhoto"/>
            </div>
            <Link to='/'>
            <h1 className="Identity">Sebastian Sim</h1><br />
            <h2 className="IdentityRole">Web Developer</h2>
            </Link>
        </div>
        
        {/* Top Panel for view width under 1024px */}

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
            <NavItem eventKey={1} href="#">
                <Link to="/Skills" className="StyleNavBarButton">MY SKILLS</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
                <Link to="/Portfolio" className="StyleNavBarButton">PORTFOLIO</Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
                <Link to="/Contact" className="StyleNavBarButton">CONTACT</Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
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
                <Link to='/'>
                <h1 className="Identity">Sebastian Sim</h1>
                <h2 className="IdentityRole">Web Developer</h2>
                </Link>
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

export default NavBar;

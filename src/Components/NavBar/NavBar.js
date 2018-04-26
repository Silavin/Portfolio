import React, { Component } from 'react';
import './NavBar.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import ProfilePhoto from './Silavin.png';
import { Link, NavLink } from 'react-router-dom';

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
            <Nav className="NavTextAlign">

                <NavLink to="/Skills" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">MY SKILLS</NavLink>

                <NavLink to="/Portfolio" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">PORTFOLIO</NavLink>

                <NavLink to="/Contact" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">CONTACT</NavLink>
            
                <NavLink to="/AboutMe" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">ABOUT ME</NavLink>

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
                    <NavLink to="/Skills" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className="DirectionalLinks">MY SKILLS</p>
                    </NavLink>
                    <NavLink to="/Portfolio" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className=" DirectionalLinks">PORTFOLIO</p>
                    </NavLink>
                    <NavLink to="/Contact" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className="DirectionalLinks">CONTACT</p>
                    </NavLink>
                    <NavLink to="/AboutMe" className="StyleNavBarButton" activeClassName="ActiveStyleNavBarButton">
                        <p className="DirectionalLinks">ABOUT ME</p>
                    </NavLink>
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

import React, { Component } from 'react';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import NavBar from '../NavBar';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
        
        <div>      
        <NavBar />
        <div className="LeftFiller"></div>
        <div className="BodyContent">
        <h1 id="PortfolioHeader">PORTFOLIO</h1>
        <p id="PortfolioText">See all the work I have done so far!</p>
        <hr id='PortfolioHorizonal'/>
        {/* This is for big width devices. */}
        <div id="TimeLineForBigWidth">
            <Timeline>
                {this.props.data.map(
                    (content) => {
                        return (
                            <div id="TimeLineText">
                                <TimelineEvent 
                                    bubbleStyle = {{backgroundColor:"#000000",borderRadius:'0', height: '0px', width: '0px', border: '3px solid rgba(13,13,145,.8)', marginLeft:'14px'}}
                                    style = {{backgroundColor: "#fff", padding: "", boxShadow: "none !important", }}
                                >
                                <h2 className="ContentTitle">{content.title}</h2>
                                
                                <h3 className="ContentDescription">{content.decription}</h3>
                                
                                <button className = "ReadMoreButton">More details</button>
                                <p className="TechnologyTag">Technologies</p>
                                
                                {content.button.map(
                                    (buttonArray) => (
                                        <button className="TechListButtonStyle">{buttonArray}</button>
                                    )
                                )}

                                </TimelineEvent>
                            </div>
                        )
                    }      
                )}
            </Timeline>    
        </div>
        {/* The below is for small width devices.*/}
        <div id="TimeLineForSmallWidth">
            {this.props.data.map(
                (content) => {
                    return (
                        <div className="TimeLineText">
                            <hr id="HorizontalLineSmallWidth"/>
                            <h2 className="ContentTitle">{content.title}</h2>
                            
                            <h3 className="ContentDescription">{content.decription}</h3>
                            
                            <button className = "ReadMoreButton">More details</button>
                            <p className="TechnologyTag">Technologies</p>
                            
                            {content.button.map(
                                (buttonArray) => (
                                    <button className="TechListButtonStyle">{buttonArray}</button>
                                )
                            )}
                            
                        </div>
                    )
                }      
            )}
        </div>
        </div>
        </div>
    );
  }
}

export default Portfolio;

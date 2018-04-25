import React, { Component } from 'react';
import NavBar from '../NavBar';
import './PortfolioContent.css';

class PortfolioContent extends Component {
  render() {

    return (
      <div>
        <NavBar />
        <div> 
        <div className="LeftFiller"></div>
          <div className="BodyContent">
          <div className="ContentFiller"></div>
            <div className="FilledContent">
              <div id="PortfolioContentTextJustify">
                <h1 id="PortfolioContentHeader">{this.props.data.title}</h1>
                <hr />
                <h3>Technology utilised:</h3>
                {this.props.data.button.map(
                    (buttonArray) => (
                        <button className="TechListButtonStyle2">{buttonArray}</button>
                    )
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioContent;

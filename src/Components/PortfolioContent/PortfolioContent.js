import React, { Component } from 'react';
import NavBar from '../NavBar';
import './PortfolioContent.css';


class PortfolioContent extends Component {

  constructor(props) {
    super(props);

    // this.buttons = this.generateButton();
    this.buttons = this.generateButton()
  }
  
  generateButton = () => {
    return(
    this.props.data.button.map((button) => {
      return(
      this.props.dataLinks.map((link) => {
        if (button === link.type) {
        return (<a href={link.url}><button className="TechListButtonStyle2">{link.type}</button></a>);
        }
      })
    );})
  );}


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
                {this.buttons}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioContent;

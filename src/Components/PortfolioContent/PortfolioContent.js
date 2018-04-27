import React, { Component } from 'react';
import NavBar from '../NavBar';
import './PortfolioContent.css';

class PortfolioContent extends Component {

  constructor(props) {
    super(props);

    this.buttons = this.generateButton();
  }
  
  generateButton = () => {
    var results = [];
    this.props.data.button.map((button) => {
      this.props.dataLinks.map((link) => {
        if (button === link.type) {
          results.push(<button className="TechListButtonStyle2">{link.type} - {link.url}</button>);
        }
      });
    });

    return results;
  }

  render() {

    // var linkingOps = () => {
    //   return this.props.link;
    // };

    // function buttonPathWay(){
    //   // if(props.data.button === props.dataLinks.title){
    //   //   return{
    //   //   };
    //   // }
    //   return (
    //     console.dir(dataLinking())
    //   )
    // }


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

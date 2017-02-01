import React, { Component } from 'react';
import { Link } from 'react-router'
import './css/index.css';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

// Instructions Component with Navbar

class Instructions extends Component {
    render(){
        return (
        <div>

            <div>
              <h1 className="how-to-play">How to Play!</h1>
              <p id="gameInstructions">Geography Game will give you a question that pertains to a certain location within the United States.
              Use your advanced knowledge of our incredible country's geographical locations...(or google search if you wimp out). The answer is in the form of a marker hidden within a certain zoom level on the answer location. Good Luck!</p>
            </div>
            <div>
              <img alt="globe" id="globe" src="https://www.globalbrigades.org/media/Globe.png"/>
            </div>



          </div>

        )
    }

}
export default Instructions

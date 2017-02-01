import React, { Component } from 'react';

class Questions extends Component {
    render(){
        return (
	        <div className="question-text">
	            {this.props.question}
	        </div>
        )
    }

}
export default Questions

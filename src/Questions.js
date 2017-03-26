import React, { Component } from 'react';

class Questions extends Component {
    render(){
        var text = this.props.question;
        return (
	        <div className="question-text">
                {text}
	        </div>
        )
    }
}
export default Questions

import React, { Component } from 'react';

class MyNewComponentActual extends Component {
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                {this.props.someText}
                <h1>My name is { lastName }, { firstName}  </h1>
                <p>Age:  { age }</p>
                <p>Hair Color: { hairColor }</p>
            </div>
        );
    }
}

export default MyNewComponentActual;

import React, { Component } from 'react';
// import { render } from 'react-dom';

class MyNewComponentActual extends Component {
    render(){
        const { firstName, lastName, age, hairColor } = this.props;
        return(
            <div>
                <section>
                    {this.props.someText}
                    <h1>My name is { lastName }, { firstName}  </h1>
                    <p>Age:  { age }</p>
                    <p>Hair Color: { hairColor }</p>
                </section>
                <section>
                    <h1>
                        {this.props.header}
                    </h1>
                    {this.props.children}
                </section>
            </div>
        );
    }
}


export default MyNewComponentActual;


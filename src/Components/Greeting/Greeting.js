import React, { Component } from 'react'

export class Greeting extends Component {
 

    render(){           
    const {name , message} = this.props;

        return(
        <div>
            <h1>Hola {name}</h1>
            <p>{message}</p>
           
        </div>
        );
    }
}


export default Greeting
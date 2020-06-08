import React, { Component } from 'react';

class Snippet extends Component {
    
    componentWillUnmount = () => {
        console.log("SNIPPET HERE, GOING AWAY")
    }

    render(){
        return (
            <p>SNIPPET COMPONENT, THE TITLE IS {props.title}</p>
    )
         }
}

export default Snippet;
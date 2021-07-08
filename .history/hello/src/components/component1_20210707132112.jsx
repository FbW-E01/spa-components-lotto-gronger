import React, { Component } from 'react'

export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {num: 0};
    }
    increaseNumber = () => {
        this.setState({num: Math.random()})
        console.log("click");
    }

    render() {
        return (
            <div>
               <h1>Add Number</h1>
                <h3>{this.state.num}</h3>
                <button onClick={this.increaseNumber}>
                    increase

                </button>
            </div>
        )
    }
}



//used rcc for this
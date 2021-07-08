import React, { Component, createElement } from 'react'

export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {num: 0};
    }
    increaseNumber = () => {
        this.setState({num: Math.random()})
        console.log("click");
    }
    createRandomNumbers = () => {
        let number1 = document.createElement(p);
        let number2 = document.createElement(p);
        let number3 = document.createElement(p);
        let number4 = document.createElement(p);
        let number5 = document.createElement(p);
        let number6 = document.createElement(p);
    }

    render() {
        return (
            <div>
               <h1>Add Number</h1>
                <h3>{this.state.num}</h3>
                <button onClick={this.increaseNumber}>
                    increase Number

                </button>
            </div>
        )
    }
}



//used rcc for this
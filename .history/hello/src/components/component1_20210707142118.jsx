import React, { Component, createElement } from 'react'

export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {
            num1: "",
            num2: "",
            num3: "",
            num4: "",
            num5: "",
            num6: "",

        };
    }
    increaseNumber = () => {
        this.setState({num: Math.random()})
        console.log("click");
    }
    createRandomNumbers = () => {
        this.setState({
            num1: Math.floor(Math.random())
        })
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
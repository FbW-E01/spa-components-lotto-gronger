import React, { Component, createElement } from 'react'

export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {
            // [
            //     num1: 0,
            //     num2: 0,
            //     num3: 0,
            //     num4: 0,
            //     num5: 0,
            //     num6: 0,
            // ]
            
        };
    }
    increaseNumber = () => {
        this.setState({num: Math.random()})
        console.log("click");
    }
    createRandomNumbers = () => {
        this.setState({
            num1: Math.floor(Math.random() * 64),
            num2: Math.floor(Math.random() * 64),
            num3: Math.floor(Math.random() * 64),
            num4: Math.floor(Math.random() * 64),
            num5: Math.floor(Math.random() * 64),
            num6: Math.floor(Math.random() * 64),
        })
    }

    render() {
        return (
            <div>
               <h1>Add Number</h1>
                <h3>{this.state.num}</h3>
                <div>
                    {this.state.map(result => {
                        return (
                            <span>{result}</span>
                        )
                    })}
                </div>
                <button onClick={this.createRandomNumbers}>
                    generate num

                </button>
            </div>
        )
    }
}



//used rcc for this
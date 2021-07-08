import React, { Component, createElement } from 'react'

function getRandomNumber(min, max){
    min =Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1) + min)
}


export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {
            numbers:[]
        };
    }


    // could have also made 6 different numbers in this.state above (instead of numbers array)
    // and then had 6 diff spans below

    getLuckyNumber = () => {
        let numsCount = 6
        const numbers = []

        while (numsCount) {
            let newNumber = getRandomNumber(1, 49) 
            
        while (numbers.indexOf(newNumber) !== -1) {
             newNumber = getRandomNumber(1, 49) 
        }

        numbers.push(newNumber)
        numsCount--;

        }
        this.setState({numbers})
    }

    resetFunction = () => {
        this.setState({numbers: []})
    }
  
    render() {
        return (
            <div>
               <h1>Add Number</h1>
                <h3>{this.state.num}</h3>
                <div>
                    {this.state.numbers.map(result => {
                        return (
                            <span className="box">{result}</span>
                        )
                    })}
                </div>
                <button onClick={this.getLuckyNumber}>
                    generate num

                </button>
                <button onClick={this.resetFunction}>Reset</button>
            </div>
        )
    }
}



//used rcc for this
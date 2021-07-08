import React, { Component, createElement } from 'react'

function getRandomNumber(min,max){
    min =Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(min - max+1) + min)
}


export default class Component1 extends Component {
    constructor() {
        super();
        this.state = {
            numbers:[]
        };
    }

    getLuckyNumber(){
        let numsCount = 6
        const numbers = []

        while (numsCount) {
            let newNumber =getRandomNumber(1,49) 
            
        while (numbers.indexOf(newNumber) !== -1) {
             newNumber =getRandomNumber(1,49) 
        }

        numbers.push(newNumber)
        numsCount--;

        }
        this.setState({numbers})
    }
  
    render() {
        return (
            <div>
               <h1>Add Number</h1>
                <h3>{this.state.num}</h3>
                <div>
                    {this.state.numbers.map(result => {
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
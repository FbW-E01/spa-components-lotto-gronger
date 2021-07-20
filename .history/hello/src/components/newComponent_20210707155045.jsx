import React, { Component } from 'react'

export default class NewComponent extends Component {
    constructor() {
        super()
        this.state 
    }
}

getRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}






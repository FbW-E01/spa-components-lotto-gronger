import React, { Component } from 'react'

export default class NewComponent extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

getRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}


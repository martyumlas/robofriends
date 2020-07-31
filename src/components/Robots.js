import React, { Component } from 'react'
import Card from './Card'

export class Robots extends Component {
    render() {
        return this.props.robots.map((robot, index) => (
             <Card robot={robot} key={index}/>
        ))
    }
}

export default Robots

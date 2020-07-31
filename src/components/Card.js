import React, { Component } from 'react'

export class Card extends Component {
    render() {
        return (
            <div className='bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5'>
                <img src={'https://robohash.org/' + this.props.robot.name} alt=""/>
                <div>
                    <h2>{this.props.robot.name}</h2>
                    <p>{this.props.robot.email}</p>
                </div>
            </div>
        )
    }
}

export default Card

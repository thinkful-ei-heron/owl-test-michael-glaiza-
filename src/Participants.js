import React, { Component } from 'react'
import ParticipantList from './ParticipantList'

export class Participants extends Component {
    render() {
        return (
            <div>
                
            <ParticipantList allParticipant={this.props.participants}/>
           
            </div>
        )
    }
}

export default Participants




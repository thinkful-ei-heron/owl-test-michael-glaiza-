import React, { Component } from 'react';
import Participant from './Participant';
import './ParticipantList.css';

export class ParticipantList extends Component {

    render() {
        const participants = this.props.participants.sort((a,b) => {
            if (a.inSession === b.inSession) {
                return 0;
            }
            return a.inSession ? -1 : 1;
        });
        return (
            <div className="participant-list sidebar" id="participants">
                {participants.map(x => <Participant participant={x} key={'p' + x.id}/>)}
            </div>
        )
    }
}

export default ParticipantList

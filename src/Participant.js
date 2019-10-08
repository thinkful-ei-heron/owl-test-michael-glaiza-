import React, { Component } from 'react'
import './Participant.css'

export class Participant extends Component {


    render() {
        const participant = this.props.participant
        const statusText = participant.inSession ? (participant.onStage ? 'on stage' : 'in session') : 'left session'

        return (
            <div className="participant">
                <img className="avatar" src={participant.avatar} alt="avatar"/>

                <div className="info">
                    <span className="name">
                        {participant.name}
                    </span>
                    <div>
                        {/* <span className={"status-" + participant.inSession ? "online" : "offline"}></span> */}
                        <span className={"status " + (participant.inSession ? "online" : "offline")}>
                            {statusText}
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Participant

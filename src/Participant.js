import React, { Component } from 'react'

export class Participant extends Component {

   
    render() {
        const participant = this.props.participant
        const statusText = participant.inSession ? (participant.onStage ? 'on stage' : 'in session') : 'left session'

        return (
            <div className="container">
                <img src={participant.avatar} alt="avatar"/>

                <div className="info">
                    <span className="name">
                        {participant.name}
                    </span>
                    <div>
                        <span className={"status-" + participant.inSession ? "online" : "offline"}></span>
                        <span className="status-text">
                            {statusText}
                        </span>
                    </div>
                </div>

            </div>
        )
    }
}

export default Participant

import React, { Component } from 'react'
import ('./StageParticipant.css')

export class StageParticipant extends Component {
  render() {
    const participant = this.props.participant;
    return (
      <div className="stage-section">
        <div className="infobox">
          <span className="stage name">
            {participant.name}
          </span>
          <div className="sound">
            <span className="volume-bar"></span>
            <span className="mute" role="img" aria-label="mute control">&#128266;</span>
          </div>
        </div>
        <img src={participant.avatar} alt="avatar" />
      </div>
    )
  }
}

export default StageParticipant

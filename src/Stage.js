import React, { Component } from 'react'
import StageParticipant from './StageParticipant';


export class Stage extends Component {
  render() {
    const participants = this.props.participants;
    let onStageList = participants.filter(x => x.onStage);
    return (
      <div className="stage">
        {onStageList.map(x => <StageParticipant participant={x} key={'s' + x.id} />)}
      </div>
    )
  }
}

export default Stage

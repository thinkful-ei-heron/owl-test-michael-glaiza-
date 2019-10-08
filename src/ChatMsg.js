import React, { Component } from 'react'

// {
//   participantId: 3,
//   type: 'message',
//   message: 'Hello world',
//   time: 1548852646559,
//   timestamp: 1548852484247
// }
export class ChatMsg extends Component {
  render() {
    const msg = this.props.msg;
    const participant = this.props.participants.find(x => x.id === msg.participantId);
    console.dir(participant);
    console.log(participant.avatar);
    const timestamp = new Date(msg.timestamp);
    let hour = timestamp.getHours() % 12;
    if (hour === 0) hour = 12;
    let min = timestamp.getMinutes();
    let timeString = `${hour}:${min} ${timestamp.getHours >= 12 ? 'PM' : 'AM'}`;
    const actionType = msg.type === 'message' ? 'message' : 'action';
    let messageContent;
    switch(msg.type){
      case 'message':
        messageContent = msg.message;
        break;
      case 'thumbs-up':
        messageContent = 'gave a thumbs up 	👍';
        break;
      case 'thumbs-down':
        messageContent = 'gave a thumbs down 👎'
        break;
      case 'raise-hand':
        messageContent = 'raised their hand ✋';
        break;
      case 'clap':
        messageContent = 'clapped 👏 ';
        break;
      default:
        return null; //something went wrong;
    }

    return (
      <div className="chat-msg">
        <img src={participant.avatar} alt="avatar" />
        <span className='msg-name'>{participant.name}</span>
        <span className='timestamp'>{timeString}</span>
        <span className={actionType}>{messageContent}</span>
      </div>
    )
  }
}

export default ChatMsg

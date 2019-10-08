import React, { Component } from 'react'
import ChatMsg from './ChatMsg';

export class Chat extends Component {
  render() {
    const chatEvents = this.props.chatlog.sort((a, b) => a.timestamp - b.timestamp);

    return (
      <div className = 'sidebar chat' id='chat'>
        {chatEvents.map(x => <ChatMsg msg={x} participants={this.props.participants} key={'m' + x.participantId + x.type + x.timestamp} />)}
      </div>
    )
  }
}

export default Chat

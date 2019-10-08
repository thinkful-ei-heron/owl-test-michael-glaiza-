import React, { Component } from 'react';
import ParticipantList from './ParticipantList';
import Stage from './Stage';
import Chat from './Chat';
import STORE from './STORE';
import './App.css';

export class App extends Component {

  render() {
    let participantCount = STORE.participants.reduce((acc, cur) => cur.onStage ? ++acc : acc, 0);
    return (
        <div className="app">
          <div className="left">
            <div className="nav">
              {/* <button type="button">Chat</button>
              <button type="button">Participants ({participantCount})</button> */}
              <a className="navLink" href="#chat">Chat</a>
              <a className="navLink" href="#participants">Participants ({participantCount})</a>
            </div>
            <ParticipantList participants = {STORE.participants} />
            <Chat chatlog = {STORE.chatEvents} participants = {STORE.participants}/>
            <div className="chat dummy sidebar" id="chat">some chat here</div>
          </div>
          <Stage participants = {STORE.participants} />

        </div>
    )
  }
}

export default App

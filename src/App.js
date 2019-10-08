import React, { Component } from 'react'
import Participants from './Participants'

export class App extends Component {
  
  render() {
    console.log('for app')
    return (
      <div className="App">
        

        <Participants />

      </div>
    )
  }
}

export default App
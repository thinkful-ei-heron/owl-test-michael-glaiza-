import React, { Component } from 'react'
import Participant from './Participant'

export class App extends Component {
  
  render() {
    const testing = {
        id: 1,
        name: 'Koren Templeton',
        avatar:
            'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
        inSession: true,
        onStage: true
    }

    console.log('for app')
    return (
      <div className="App">
        

        <Participant participant = {testing} />

      </div>
    )
  }
}

export default App
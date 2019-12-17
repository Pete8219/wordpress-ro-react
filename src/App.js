import React, { Component } from 'react'
import Posts from './Posts/Posts'

export class App extends Component {
  render() {
    return (
      <div className="App">
            This is App
        <Posts>
           {this.props.children}
        </Posts>
      </div>
    )
  }
}

export default App

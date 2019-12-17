import React, { Component } from 'react'
import Posts from './Posts/Posts'
import Layout from './component/Layout/Layout'
export class App extends Component {
  render() {
    return (
      <div className="App">
            <Layout>

              <div className="main">
                  {this.props.children}

              </div>

            </Layout>
        <Posts>
           {this.props.children}
        </Posts>
      </div>
    )
  }
}

export default App

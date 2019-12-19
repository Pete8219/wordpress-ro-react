import React, { Component} from 'react'
import Layout from './component/Layout/Layout'
import Posts from './Posts/Posts'
import Ideas from './component/Ideas/Ideas'
import Polls from './component/Polls/Polls'

import PostDetail from './component/PostDetail/PostDetail'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <Layout>
      
      <Switch>
      
        <Route path='/' exact component={Posts}/> 
        <Route path='/post/:id' exact component={PostDetail}/>
        <Route path='/ideas' exact component={Ideas}/>
        <Route path='/polls' exact component={Polls}/>
        
            

          
           

      
      </Switch>
      </Layout>
    )
  }
}

export default App

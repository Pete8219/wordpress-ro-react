import React, { Component, Fragment } from 'react'
import Layout from './component/Layout/Layout'
import classes from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
import Posts from './Posts/Posts'
import PostDetail from './component/PostDetail/PostDetail'
import {BrowserRouter as Router, Route} from 'react-router-dom'
export class App extends Component {
  render() {
    return (
      <Router>
      <Fragment>
        {/* <Route path='/' exact component={Posts}/> */}
        <Route path='/post/:id' exact component={PostDetail}/>
        <Navbar/>
            <Layout>

             <div className="main">
                  {this.props.children}
                  </div>    
              
              

            </Layout>
            <Footer/>
           

      </Fragment>
      </Router>
    )
  }
}

export default App

import React, { Component } from 'react'
import Layout from './component/Layout/Layout'
import classes from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import Footer from './component/Footer/Footer'
export class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Navbar/>
            <Layout>

             <div className="main">
                  {this.props.children}
                  </div>    
              
              

            </Layout>
            <Footer/>
           

      </div>
    )
  }
}

export default App

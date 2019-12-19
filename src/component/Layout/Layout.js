import React, { Component } from 'react'
import classes from './Layout.module.css'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'


const state ={
    links: [
        {id:1, link: 'news'},
        {id:2, link: 'posts'}
    ]
}


export class Layout extends Component {

    render() {
        return (
           
            <div className={classes.Layout}>
                 <Navbar/>
                
                <main>
                    {this.props.children}
                </main>
             
                <Footer/> 
                
            </div>
              
            
        )
    }
}

export default Layout

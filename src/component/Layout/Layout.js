import React, { Component } from 'react'

import classes from './Layout.module.css'
import  Posts from '../../Posts/Posts'
import Footer from '../Footer/Footer'
import SideBar from '../../component/SideBar/SideBar'

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
                
                <Posts>
                    {this.props.children}
                </Posts>
                <SideBar>
                    {this.props.children}
                
                </SideBar>
                
                
            </div>
            
        )
    }
}

export default Layout

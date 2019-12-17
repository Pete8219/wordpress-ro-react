import React, { Component } from 'react'
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
            <div>
                <Navbar links = {state.links}/>
            </div>
        )
    }
}

export default Layout

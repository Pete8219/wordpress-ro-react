import React, { Component } from 'react'
import classes from './SideBar.module.css'

export class SideBar extends Component {
    render() {
        return (
            <div className={classes.SideBar}>
                <p>This is SideBar</p>
            </div>
        )
    }
}

export default SideBar

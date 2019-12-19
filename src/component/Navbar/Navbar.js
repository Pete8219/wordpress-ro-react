import React, { Component } from 'react'
import classes from './Navbar.module.css'
import {Link} from 'react-router-dom'


export class Navbar extends Component {

    
    render(props) {
        
        return (
            <div>
                <nav className={classes.Navbar}>


                    <div className={classes.NavbarList}>
                      <ul>
                        <li>
                          <Link to={`/`}>Главная</Link>
                        </li>
                        <li>
                          <Link to={`/`}>Новости</Link>
                        </li>
                        <li>
                          <Link to={`/ideas`}>Ваши идеи</Link>
                        </li>
                        <li>
                          <Link to={`/polls`}>Опросы</Link>
                       </li>
                        
                      
                      </ul>

                    </div>
                  </nav>
            </div>
        )
    }
}

export default Navbar

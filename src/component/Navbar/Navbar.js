import React, { Component } from 'react'
import classes from './Navbar.module.css'

export class Navbar extends Component {

    
    render(props) {
        console.log(props)
        return (
            <div>
                <nav className={classes.Navbar}>
{/*   <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  <div className={classes.NavbarList}>
    <ul>
      <li>
        <a  href="#">Главная <span className="sr-only">(current)</span></a>
      </li>
      <li>
        <a  href="#">Новости</a>
      </li>
      <li>
        <a  href="#">Ваши идеи</a>
      </li>
      <li>
        <a  href="#">Опросы</a>
      </li>
      
     
    </ul>

  </div>
</nav>
            </div>
        )
    }
}

export default Navbar

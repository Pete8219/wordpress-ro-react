import React, { Component } from 'react'

export class Navbar extends Component {

    
    render(props) {
        console.log(props)
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
{/*   <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> */}

  <div className="collapse navbar-collapse" id="navbarColor03">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Новости</a>
      </li>
     
    </ul>

  </div>
</nav>
            </div>
        )
    }
}

export default Navbar

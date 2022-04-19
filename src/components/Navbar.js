import React from "react";
import logo from "../Logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">

    <a className="navbar-brand" href="#"><img className="Logo"
     src={logo}/></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
   
      <li className="nav-item">
        <a className="nav-link" href="#">About me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">contact</a>
      </li>
    </ul>
  </div>
     </div>
</nav>
  )
}

export default Navbar
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(Props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${Props.mode} bg-${Props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{Props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        
      </ul>
        <div className={`form-check form-switch text-${Props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" type="checkbox" onClick={Props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${Props.mode==='light'?'dark':'light'} Mode`}</label>
        </div>
      </div>
      </div>
     </nav>
  )
}


Navbar.defaultProps = {
    title: 'Set title here'
};
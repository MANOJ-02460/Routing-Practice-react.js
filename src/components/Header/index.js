// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="blog-container">
    <div className="logo-heading-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <ul className="items-container">
      <li className="list-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="list-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="list-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

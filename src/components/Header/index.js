import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="card">
    <div className="header">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <h1 className="wave-heading">Wave</h1>
    </div>
    <ul className="links">
      <li>
        <Link className="item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header

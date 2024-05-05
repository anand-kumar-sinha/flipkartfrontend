import React from 'react'
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <div>logo</div>
        <div className="nav-opt">
          <ul>
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
          </ul>
        </div>
        <div>
          <input
            type="text"
            placeholder="search..."
            className="input-text"
          />
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { startLogOut } from '../../actions/authActions';


export const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {

    dispatch(startLogOut());
  }


  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/" >Home</Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/">Employees</NavLink>
            <NavLink activeClassName="active" className="nav-item nav-link" exact to="/upload" >Upload</NavLink>
          </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul className="navbar-nav ml-auto">
            <button className="nav-item nav-link btn" onClick={handleLogOut}>Logout</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
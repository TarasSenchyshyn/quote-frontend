import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Header: FC = () => (
  <nav className="navbar navbar-light bg-dark ">
    <div className="container">
      <NavLink className="navbar-brand text-white" to="/">
        <h3>Home Quote</h3>
      </NavLink>

      <NavLink className="navbar-brand text-white" to="/add-quote">
        Add an Quote
      </NavLink>
    </div>
  </nav>
);

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Shop', link: '/shop' },
    { id: 3, label: 'Contact', link: '/contact' },
  ];

  return (
    <nav>
      <div className="logo"><h1>Neverland Supply</h1></div>
      <ul>
        {navItems.map((item) => (
          <Link to={item.link}>
          <li>{item.label}</li>
          </Link>
        ))}
        <CartIcon />
      </ul>
    </nav>
  );
};

export default Navbar;

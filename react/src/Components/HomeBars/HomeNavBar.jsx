import React, { useState } from 'react';
import './HomeNavBar.css';
import { MonetizationOnRounded, AccountCircle } from '@mui/icons-material'; // Import the Send icon
import { Link, NavLink } from 'react-router-dom';

const HomeNavBar = () => {

  const [open, setOpen] = useState(false);
  const navigation = [
    { name: "Login", to: "/Login" },
  ];

  return (
    <div className="top-bar">
      <div className="logo">
        <Link to="/">
          <img src="/Assets/logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="profile-section">
        <div className="donation-button">
          <button>
            <span><MonetizationOnRounded /></span> {/* Add the Send icon beside the button text */}
            Donate
          </button>
        </div>
        <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
          <AccountCircle />
        </div>
        <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
          <ul>
            {navigation.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  activeClassName="active" // Apply active class when the NavLink is active
                  onClick={() => setOpen(false)} // Close dropdown when NavLink is clicked
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeNavBar;

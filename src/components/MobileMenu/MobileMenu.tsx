import React from 'react';
import { NavLink } from 'react-router-dom';
import { headerLink } from '../../constants/headerLink';
import './MobileMenu.scss';
import HeaderIcons from '../Header/HeaderIcons/HeaderIcons';

const MobileMenu = () => {
  return (
    <>
      <div className="mobile_menu">
        <ul className="mobile_menu-list">
          {headerLink.map(link => (
            <NavLink
              className="mobile_menu-item"
              to={link.path}
              key={link.path}
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
        <HeaderIcons className="mobile_menu-icons" />
      </div>
    </>
  );
};

export default MobileMenu;

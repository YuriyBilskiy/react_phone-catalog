import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../public/icons/Logo.svg';
import { headerLink } from '../../constants/headerLink';
import './Header.scss';
import BurgerOpenIcon from '../../../public/icons/BurgerOpenIcon';
import { useState } from 'react';
import BurgerCloseIcon from '../../../public/icons/BurgerCloseIcon';
import MobileMenu from '../MobileMenu/MobileMenu';
import HeaderIcons from './HeaderIcons/HeaderIcons';

const Header = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    <>
      <div className="header">
        <div className="header_wrapper-list">
          <img src={logo} alt="Logo" className="header_img" />
          <ul className="header_list">
            {headerLink.map(link => (
              <NavLink className="header_item" to={link.path} key={link.path}>
                {link.name}
              </NavLink>
            ))}
          </ul>
        </div>

        <div className="header_wrapper-icon">
          <HeaderIcons />
        </div>
        <div className="header_wrapper-burger">
          {openBurgerMenu ? (
            <BurgerCloseIcon onClick={() => setOpenBurgerMenu(false)} />
          ) : (
            <BurgerOpenIcon onClick={() => setOpenBurgerMenu(true)} />
          )}
          <div className="header_wrapper-burger-border"></div>
        </div>
      </div>
      <div className="header_border"></div>
      {openBurgerMenu && (
        <div>
          <MobileMenu />
        </div>
      )}
    </>
  );
};

export default Header;

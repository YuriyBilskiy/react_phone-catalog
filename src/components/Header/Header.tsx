import { Link, NavLink } from 'react-router-dom';

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
          <Link to="/">
            <img src={logo} alt="Logo" className="header_img" />
          </Link>
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
        </div>
      </div>
      <div className="header_border"></div>
      {openBurgerMenu && (
        <div>
          <MobileMenu setOpenBurgerMenu={setOpenBurgerMenu} />
        </div>
      )}
    </>
  );
};

export default Header;

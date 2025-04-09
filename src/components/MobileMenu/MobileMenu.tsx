import { NavLink } from 'react-router-dom';
import { headerLink } from '../../constants/headerLink';
import './MobileMenu.scss';
import HeaderIcons from '../Header/HeaderIcons/HeaderIcons';
type Props = {
  setOpenBurgerMenu: (value: boolean) => void;
};
const MobileMenu: React.FC<Props> = ({ setOpenBurgerMenu }) => {
  return (
    <>
      <div className="mobile_menu">
        <ul className="mobile_menu-list">
          {headerLink.map(link => (
            <NavLink
              className="mobile_menu-item"
              to={link.path}
              key={link.path}
              onClick={() => setOpenBurgerMenu(false)}
            >
              {link.name}
            </NavLink>
          ))}
          <HeaderIcons
            className="mobile_menu-icons mobile_menu-heart"
            classNameOfLink="mobile_menu-link"
          />
        </ul>
      </div>
    </>
  );
};

export default MobileMenu;

import { NavLink } from 'react-router-dom';
import { headerLink } from '../../constants/headerLink';
import HeaderIcons from '../Header/HeaderIcons/HeaderIcons';
type Props = {
  classNameOfMobileMenu?: string;
  setOpenBurgerMenu?: (value: boolean) => void;
};
export const NavLinks: React.FC<Props> = ({
  classNameOfMobileMenu,
  setOpenBurgerMenu,
}) => {
  return (
    <div className="header_wrapper-list">
      <ul className="header_list">
        {headerLink.map(link => (
          <NavLink
            className={`header_item ${classNameOfMobileMenu}`}
            to={link.path}
            key={link.path}
            onClick={() => setOpenBurgerMenu}
          >
            {link.name}
          </NavLink>
        ))}
      </ul>
      <div>
        <div className="header_wrapper-icon">
          <HeaderIcons />
        </div>
      </div>
    </div>
  );
};

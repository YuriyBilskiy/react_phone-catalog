import { Link } from 'react-router-dom';
import { CartIcon } from '../../../../public/icons/CartIcon';
import { HeartIcon } from '../../../../public/icons/HeartIcon';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

type Props = {
  className?: string;
  classNameOfLink?: string;
};

const HeaderIcons: React.FC<Props> = ({
  className = '',
  classNameOfLink = '',
}) => {
  const favourite = useSelector(
    (state: RootState) => state.favourite.favourite,
  );
  const inCart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className={`header_wrapper-icon ${className}`}>
      {/* <div className="header_wrapper-border-heart"></div> */}
      <Link
        to="/favourites"
        className={`header_wrapper-heart ${classNameOfLink}`}
      >
        {favourite.length > 0 && (
          <span className="header_wrapper-favourite">{favourite.length}</span>
        )}
        <HeartIcon />
      </Link>
      {/* <div className="header_wrapper-border-cart"></div> */}
      <Link to="/cart" className={`header_wrapper-cart ${classNameOfLink}`}>
        {inCart.length > 0 && (
          <span className="header_wrapper-inCart">{inCart.length}</span>
        )}
        <CartIcon />
      </Link>
    </div>
  );
};

export default HeaderIcons;

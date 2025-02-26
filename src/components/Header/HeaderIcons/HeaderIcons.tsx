import React from 'react';
import { Link } from 'react-router-dom';
import { CartIcon } from '../../../../public/icons/CartIcon';
import { HeartIcon } from '../../../../public/icons/HeartIcon';

const HeaderIcons = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`header_wrapper-icon ${className}`}>
      <div className="header_wrapper-border-heart"></div>
      <Link to="/favorites" className="header_wrapper-heart">
        <HeartIcon />
      </Link>
      <div className="header_wrapper-border-cart"></div>
      <Link to="/cart" className="header_wrapper-cart">
        <CartIcon />
      </Link>
    </div>
  );
};

export default HeaderIcons;

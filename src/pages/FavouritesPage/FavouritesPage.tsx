import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import './FavouritesPage.scss';
import { HomeIcon } from '../../../public/icons/HomeIcon';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { MoreSign } from '../../../public/icons/Moresign';
import { ProductCard } from '../../components/ProductCard/ProductCard';
const FavouritesPage = () => {
  const favourite = useSelector(
    (state: RootState) => state.favourite.favourite,
  );

  useEffect(() => {
    sessionStorage.setItem('favourite', JSON.stringify(favourite));
  }, [favourite]);

  const location = useLocation();

  return (
    <div className="favourite_page">
      <div className="favourite_page-title-wrap">
        <div>
          <Link to="/">
            <HomeIcon />
          </Link>{' '}
        </div>
        <div className="favourite_page-navigation">
          <MoreSign />{' '}
          {`${location.pathname === '/favourites' ? 'Favourite' : ''}`}
        </div>
      </div>
      <h1 className="favourite_page-title">Favourites</h1>
      <span className="favourite_page-span">
        {favourite.length} {favourite.length > 1 ? 'items' : 'item'}{' '}
      </span>
      <div className="favourite_page-cards">
        <div className="favourite_page-wrapper">
          {favourite.map(el => (
            <ProductCard key={el.id} phone={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;

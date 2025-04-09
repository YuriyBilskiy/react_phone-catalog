import { useDispatch, useSelector } from 'react-redux';
import { Phone } from '../../types/phonesType';
import { addToCart } from '../../features/cartSlice';
import { HeartIcon } from '../../../public/icons/HeartIcon';
import './ProductCard.scss';
import { addToFavourite } from '../../features/favouriteSlice';
import { RootState } from '../../store/store';
import { ReadHeartIcon } from '../../../public/icons/RedHeartIcon';
type Props = {
  phone: Phone;
  hotPrice?: boolean;
};

export const ProductCard: React.FC<Props> = ({ phone, hotPrice }) => {
  const dispatch = useDispatch();
  const favourite = useSelector(
    (state: RootState) => state.favourite.favourite,
  );
  const cart = useSelector((state: RootState) => state.cart.cart);

  const inCart = cart.some(el => el.id === phone.id);

  const isFavourite = favourite.some(el => el.id === phone.id);

  return (
    <div className="phone_card-wrapper">
      <img className="phone_card-img" src={phone.images[0]} alt="Phones" />
      <p className="phone_card-name">{phone.name}</p>
      <div className="phone_card-wrap-price">
        <p className="phone_card-price">${phone.priceRegular}</p>
        {hotPrice && (
          <p className="phone_card-fullPrice">${phone.priceDiscount}</p>
        )}
      </div>
      <div className="phone_card-specs">
        <div className="phone_card-spec">
          <p className="phone_card-spec-name">Screen</p>
          <p className="phone_card-spec-property">{phone.screen}</p>
        </div>
        <div className="phone_card-spec">
          <p className="phone_card-spec-name">Capacity</p>
          <p className="phone_card-spec-name-property">{phone.capacity}</p>
        </div>
        <div className="phone_card-spec">
          <p className="phone_card-spec-name">RAM</p>
          <p className="phone_card-spec-property">{phone.ram}</p>
        </div>
      </div>
      <div className="phone_card-buttons">
        <button
          className={`phone_card-cart ${inCart ? 'in-cart' : ''}`}
          onClick={() => {
            dispatch(addToCart(phone));
          }}
        >
          {!inCart ? 'Add to cart' : 'Added to cart'}
        </button>
        <div className="phone_card-wrap">
          <button
            className="phone_card-favourite"
            onClick={() => dispatch(addToFavourite(phone))}
          >
            {isFavourite ? <ReadHeartIcon /> : <HeartIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

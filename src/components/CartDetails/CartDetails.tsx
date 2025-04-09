import { useDispatch } from 'react-redux';
import { CloseCartItem } from '../../../public/icons/CloseCartItem';
import { PlusIcon } from '../../../public/icons/PlusIcon';
import { Phone } from '../../types/phonesType';
import './CartDetails.scss';
import {
  decreaseQuantity,
  deleteFromCart,
  incrementQuantity,
} from '../../features/cartSlice';

type Props = {
  item: Phone;
};

export const CartDetails: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDelete = () => {
    dispatch(deleteFromCart(item.id));
  };

  return (
    <div className="cart_details">
      <button className="cart_details-close-button" onClick={handleDelete}>
        <CloseCartItem />
      </button>
      <img className="cart_details-image" src={item.images[0]} alt="Phone" />
      <div>{item.name}</div>
      <div
        className={`${
          item.quantity > 1
            ? 'cart_details-wrap-button-active'
            : 'cart_details-wrap-button'
        }`}
      >
        <button
          onClick={e => {
            e.stopPropagation();
            handleDecrement();
          }}
          disabled={item.quantity <= 1}
          className={`${item.quantity > 1 ? 'cart_details-minus-active' : 'cart_details-minus'}`}
        >
          -
        </button>
      </div>
      <div>{item.quantity}</div>
      <div className="cart_details-plus">
        <button
          onClick={e => {
            e.stopPropagation();
            handleIncrement();
          }}
          className="cart_details-plus-button"
        >
          <PlusIcon />
        </button>
      </div>
      <p>{item.quantity * item.priceRegular}</p>
    </div>
  );
};

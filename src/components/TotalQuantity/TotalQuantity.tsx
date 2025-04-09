import { Phone } from '../../types/phonesType';
import './TotalQuantity.scss';
type Props = {
  cart: Phone[];
};
export const TotalQuantity: React.FC<Props> = ({ cart }) => {
  const totalQuantity = cart.reduce((acc, el) => acc + el.quantity, 0);

  return (
    <div className="total_quantity">
      <h2 className="total_quantity-title">
        ${cart.reduce((acc, el) => acc + el.quantity * el.priceRegular, 0)}
      </h2>
      <p className="total_quantity-subtitle">
        Total for{' '}
        {totalQuantity > 1 ? `${totalQuantity} items` : `${totalQuantity} item`}
      </p>
      <button className="total_quantity-button">Checkout</button>
    </div>
  );
};

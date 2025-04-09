import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { CartDetails } from '../../components/CartDetails/CartDetails';
import './CartPage.scss';
import { TotalQuantity } from '../../components/TotalQuantity/TotalQuantity';
import { useEffect } from 'react';
const CartPage = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cart_page">
      <div className="cart_page-wrap">
        {cart.map(item => (
          <CartDetails key={item.id} item={item} />
        ))}
      </div>
      <TotalQuantity cart={cart} />
    </div>
  );
};

export default CartPage;

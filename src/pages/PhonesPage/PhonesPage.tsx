import { ProductCard } from '../../components/ProductCard/ProductCard';
import { usePhones } from '../../hooks/usePhones';
import './PhonesPage.scss';

const PhonesPage = () => {
  const { phones } = usePhones();

  return (
    <div className="phones_page">
      {phones.map(phone => (
        <div key={phone.id}>
          <ProductCard phone={phone} />
        </div>
      ))}
    </div>
  );
};

export default PhonesPage;

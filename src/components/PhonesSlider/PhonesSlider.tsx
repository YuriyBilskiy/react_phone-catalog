import { useState } from 'react';
import './PhonesSlider.scss';
import { Phone } from '../../types/phonesType';
import { LeftArrowIcon } from '../../../public/icons/LeftArrowIcon';
import { RightArrowIcon } from '../../../public/icons/RightArrowIcon';
import { usePhones } from '../../hooks/usePhones';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  title?: string;
  hotPrice?: boolean;
};

export const PhonesSlider: React.FC<Props> = ({ title, hotPrice }) => {
  const { phones } = usePhones();

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = 4;

  const handlePrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const filtered: Phone[] = [...phones].sort(
    (a, b) => (b.priceDiscount || 0) - (a.priceDiscount || 0),
  );

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(phones.length - cardsToShow, prev + 1));
  };

  const itemsToRender = hotPrice ? filtered : phones;

  return (
    <>
      <div className="phone_slider-header-wrap">
        <h2 className="phone_slider-title">{title}</h2>
        <div className="phone_slider-wrap-button">
          <button
            className="phone_slider-header-button"
            disabled={currentIndex === 0}
            onClick={handlePrevious}
          >
            <LeftArrowIcon />
          </button>
          <button
            className="phone_slider-header-button"
            disabled={currentIndex >= phones.length - cardsToShow}
            onClick={handleNext}
          >
            <RightArrowIcon />
          </button>
        </div>
      </div>

      <div className="phone_slider-container">
        <div
          className="phone_slider-track"
          style={{
            transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)`,
          }}
        >
          {itemsToRender.map((phone: Phone) => (
            <ProductCard key={phone.id} phone={phone} hotPrice={hotPrice} />
          ))}
        </div>
      </div>
    </>
  );
};

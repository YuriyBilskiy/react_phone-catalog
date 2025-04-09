import { useEffect, useState } from 'react';
import { LeftArrowIcon } from '../../../public/icons/LeftArrowIcon';
import { RightArrowIcon } from '../../../public/icons/RightArrowIcon';
import './ProductSlider.scss';
import '../../../public/img/banner-accessories.png';
import '../../../public/img/banner-phones.png';
import '../../../public/img/banner-tablets.png';

const imagesSlider = [
  {
    id: 1,
    image: '/img/banner-accessories.png',
  },
  {
    id: 2,
    image: '/img/banner-phones.png',
  },
  {
    id: 3,
    image: '/img/banner-tablets.png',
  },
];

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImage = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === imagesSlider.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(handleChangeImage, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNextImage = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === imagesSlider.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const handlePrevImage = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return imagesSlider.length - 1;
      } else {
        return prevIndex - 1;
      }
    });
  };

  return (
    <>
      <h1 className="slider_title">Welcome to Nice Gadgets store!</h1>
      <div className="slider">
        <button
          onClick={handlePrevImage}
          className="slider_button slider_button-left"
        >
          <LeftArrowIcon />
        </button>
        <div className="slider_img-wrapper">
          <img
            className="slider_img"
            src={imagesSlider[currentIndex].image}
            alt="sliderimage"
          />
        </div>
        <button
          onClick={handleNextImage}
          className="slider_button slider_button-rigth"
        >
          <RightArrowIcon />
        </button>
      </div>
      <div className="slider_dots-wrapper">
        {imagesSlider.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`slider_dots ${index === currentIndex ? 'active' : ''}`}
          ></button>
        ))}
      </div>
    </>
  );
};

export default ProductSlider;

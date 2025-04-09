import { PhonesSlider } from '../../components/PhonesSlider/PhonesSlider';
import ProductSlider from '../../components/ProductSlider/ProductSlider';
import { ShopCategory } from '../../components/ShopCategory/ShopCategory';

const HomePage = () => {
  return (
    <>
      <ProductSlider />
      <PhonesSlider title="Brand new models" hotPrice={false} />
      <ShopCategory />
      <PhonesSlider title="Hot Prices" hotPrice={true} />
    </>
  );
};

export default HomePage;

import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import './ShopCategory.scss';
import { categoryItems } from '../../constants/categoryLinks';
import { useFetchCategories } from '../../hooks/useFetchCategories';

export const ShopCategory = () => {
  const { phones, tablets, accessories } = useFetchCategories();

  const updatedCategoryItems = useMemo(
    () =>
      categoryItems.map(el => {
        let count = 0;

        if (el.title === 'Mobile Phone') {
          count = phones?.length ?? 0;
        } else if (el.title === 'Tablets') {
          count = tablets?.length ?? 0;
        } else if (el.title === 'Accessories') {
          count = accessories?.length ?? 0;
        }

        return { ...el, subtitle: `${count} models` };
      }),
    [phones, tablets, accessories],
  );

  return (
    <div className="category">
      <h2 className="category_title">Shop Category</h2>
      <div className="category_wrap">
        {updatedCategoryItems.map(el => (
          <Link key={el.id} to={el.path} className="category_wrap-card">
            <img className="category_wrap-img" src={el.image} alt={el.image} />
            <div className="category_wrap-info">
              <h3 className="category_wrap-title">{el.title}</h3>
              <p className="category_wrap-subtitle">{el.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

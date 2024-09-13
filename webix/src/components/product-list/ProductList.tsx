import { useSelector } from 'react-redux';
import './product-list.css';
import { RootState } from '../../state/store';
import { ProductType } from '../../state/product-reducer';
import LogoItem from '../logo-item/LogoItem';
import { useState } from 'react';

enum FilterCategory {
  POPULARITY = 'popularity',
  NEW_ARRIVALS = 'new_arrivals',
  DISCOUNTS = 'discounts',
  BEST_PRICE = 'best_price',
  SEASON_TRENDS = 'season_trends',
}

const filterProducts = (
  products: ProductType[],
  category: FilterCategory
): ProductType[] => {
  switch (category) {
    case FilterCategory.POPULARITY:
      return [...products].sort((a, b) => b.downloads - a.downloads);
    case FilterCategory.NEW_ARRIVALS:
      return [...products].sort(
        (a, b) =>
          new Date(b.create_at).getTime() - new Date(a.create_at).getTime()
      );
    case FilterCategory.DISCOUNTS:
      return products.filter((product) => product.sale_percent !== null);
    case FilterCategory.BEST_PRICE:
      return [...products].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    case FilterCategory.SEASON_TRENDS:
      return products;
    default:
      return products;
  }
};

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>(
    FilterCategory.POPULARITY
  );

  const products = useSelector<RootState, ProductType[]>(
    (state) => state.products
  );

  const filteredProducts = filterProducts(products, selectedCategory);

  return (
    <div className="product-list">
      <div className="container">
        <p className="product-list-title">
          Корпоративные логотипы
          <span className="product-amount">
            {filteredProducts.length} товаров
          </span>
        </p>

        <ul className="category-navbar">
                <li>
                  <button
                    onClick={() =>
                      setSelectedCategory(FilterCategory.POPULARITY)
                    }
                  >
                    По популярности
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      setSelectedCategory(FilterCategory.NEW_ARRIVALS)
                    }
                  >
                    Новинки
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      setSelectedCategory(FilterCategory.DISCOUNTS)
                    }
                  >
                    Скидки
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      setSelectedCategory(FilterCategory.BEST_PRICE)
                    }
                  >
                    Лучшая цена
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      setSelectedCategory(FilterCategory.SEASON_TRENDS)
                    }
                  >
                    Тренды сезона
                  </button>
                </li>
        </ul>

        <div className="product-list-items">
          {filteredProducts.map((product) => (
            <LogoItem key={product.product_id} logoItem={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;

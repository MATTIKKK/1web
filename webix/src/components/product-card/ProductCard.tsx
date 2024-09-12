import { useParams } from 'react-router-dom';
import './product-card.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { ProductType } from '../../state/product-reducer';

const ProductCard = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<any>();

  const product = useSelector<RootState, ProductType | undefined>((state) =>
    state.products.find((p) => p.product_id === Number(id))
  );

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-card">
      <div className="container">
        <div className="product-card-container">
          <div className="product-card-img-list desktop">
            <img
              src={`https://novanest.webshop2.kz/api/products/previewImage/${product.photo_preview_one}`}
              alt=""
            />
            <img
              src={`https://novanest.webshop2.kz/api/products/previewImage/${product.photo_preview_two}`}
              alt=""
            />
            <img
              src={`https://novanest.webshop2.kz/api/products/previewImage/${product.photo_preview_three}`}
              alt=""
            />
          </div>
          <div className="product-card-main-img">
            <img
              src={`https://novanest.webshop2.kz/api/products/previewImage/${product.photo_preview_four}`}
              alt=""
            />
          </div>
          <div className="product-card-main">
            <div className="product-card-info">
              <div className="product-card-main-info">
                <div className="">
                  <h2>{product.title}</h2>
                  <p>{product.category}</p>
                </div>

                <p className='product-card-price'>{product.price}KZT</p>
              </div>

              <p>{product.description}</p>
            </div>
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

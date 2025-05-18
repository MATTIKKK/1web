import { useParams } from 'react-router-dom';
import './product-card.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { ProductType } from '../../state/product-reducer';
import { useEffect, useState } from 'react';

const ProductCard = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<any>();

  const product = useSelector<RootState, ProductType | undefined>((state) =>
    state.products.find((p) => p.product_id === Number(id))
  );
  const [mainImage, setMainImage] = useState<string | null>(null);
  
  const cleanDescription = (description: string) => {
    return description.replace(/^\{'|\'}$/g, '');
  };
  


  if (!product) {
    return <div>Loading...</div>;
  }

  const getImageUrl = (image: string) =>
    `https://novanest.webshop2.kz/api/products/previewImage/${image}`;

  const images = [
    product.photo_preview_one,
    product.photo_preview_two,
    product.photo_preview_three,
    product.photo_preview_four,
  ];

  const currentMainImage = mainImage || getImageUrl(product.photo_preview_four);

  const sideImages = images.filter(
    (img) => getImageUrl(img) !== currentMainImage
  );


  return (
    <div className="product-card">
      <div className="container">
        <div className="product-card-container">
          <div className="product-card-img-list desktop">
            {sideImages.map((img, index) => (
              <img
                key={index} // Unique key for each image
                src={getImageUrl(img)} // Image URL
                alt={`Side Preview ${index + 1}`} // Alt text for accessibility
                onClick={() => setMainImage(getImageUrl(img))} // Set main image on click
                className="product-card-img-thumbnail"
              />
            ))}
          </div>
          <div className="product-card-main-img">
            <img
              src={currentMainImage} // Show the current main image
              alt="Main Preview"
              className="product-card-img-main"
            />
          </div>
          <div className="product-card-main">
            <div className="product-card-info">
              <div className="product-card-main-info">
                <div className="">
                  <h2>{product.title}</h2>
                  <p>{product.category}</p>
                </div>

                <p className="product-card-price">{product.price}KZT</p>
              </div>

              <p
                dangerouslySetInnerHTML={{
                  __html: cleanDescription(product.description),
                }}
              />
              <button>Купить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

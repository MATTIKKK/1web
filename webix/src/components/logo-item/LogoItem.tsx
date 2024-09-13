import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../state/product-reducer';
import { LogoType } from '../logo-list/LogoList';
import './logo-item.css';

type LogoItemPropsType = {
  logoItem: ProductType;
};

const LogoItem = (props: LogoItemPropsType) => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate(`/product-card/${props.logoItem.product_id}`);
  };
  return (
    <div className="logo-item">
      {props.logoItem.sale_percent && (
        <div className="sale-info">
          <p>-{props.logoItem.sale_percent}%</p>
        </div>
      )}
      <img
        src={`https://novanest.webshop2.kz/api/products/previewImage/${props.logoItem.photo_preview_one}`}
        alt=""
      />
      <div className="logo-item-info">
        <p className="logo-item-name">{props.logoItem.title}</p>
        <p className="logo-item-category">{props.logoItem.category}</p>
        {props.logoItem.sale_percent ? (
          <p className="logo-item-price">
            <span>{props.logoItem.price}KZT</span> 
            {(Number(props.logoItem.price) * (1 - Number(props.logoItem.sale_percent) / 100)).toFixed(0)} KZT
          </p>
        ) : (
          <p className="logo-item-price">{props.logoItem.price} KZT</p>
        )}
      </div>
      <button onClick={handleBuyClick}>Купить</button>
    </div>
  );
};

export default LogoItem;

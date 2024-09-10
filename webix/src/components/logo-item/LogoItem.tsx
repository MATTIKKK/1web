import { LogoType } from "../logo-list/LogoList"
import "./logo-item.css"

type LogoItemPropsType = {
    logoItem: LogoType
}

const LogoItem = (props: LogoItemPropsType) => {
  return (
    <div className="logo-item">
        <img src={props.logoItem.img} alt="" />
        <div className="logo-item-info">
            <p className="logo-item-name">{props.logoItem.name}</p>
            <p className="logo-item-category">{props.logoItem.category}</p>
            <p className="logo-item-price">{props.logoItem.price}</p>
        </div>
        <button>Купить</button>
    </div>
  )
}

export default LogoItem
import "./main-banner.css"
import logo from "../../static/images/logo4.png"

const MainBanner = () => {
  return (
    <div className="main-banner">
        <div className="container">
            <div className="main-banner-list">
                <div className="main-banner-slide">
                    <p className="main-banner-title">Создай стильный бренд с логотипами для индустрии моды</p>
                    <p className="main-banner-text">Выбирай из трендовых и элегантных логотипов, созданных для того, чтобы выделить твой бренд в мире моды. Подчеркни свою уникальность с помощью изысканного дизайна</p>
                    <button>Найти свой стиль</button>
                </div>
                <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default MainBanner
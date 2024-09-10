import "./logo-list.css"
import logo1 from "../../static/images/logo1.png"
import logo2 from "../../static/images/logo2.png"
import logo3 from "../../static/images/logo3.png"
import logo4 from "../../static/images/logo4.png"
import LogoItem from "../logo-item/LogoItem"

export type LogoType = {
    img: string,
    name: string,
    category: string,
    price: string,
}

const logoList: LogoType[] = [
    {
        img: logo1,
        name: "CreativePulse",
        category: "Мода",
        price: "80 000 ₸",
    },
    {
        img: logo2,
        name: "CreativePulse",
        category: "Мода",
        price: "80 000 ₸",
    },
    {
        img: logo3,
        name: "CreativePulse",
        category: "Мода",
        price: "80 000 ₸",
    },
    {
        img: logo4,
        name: "CreativePulse",
        category: "Мода",
        price: "80 000 ₸",
    },

]

const LogoList = () => {
  return (
    <div className="logo-list-container">
        <p className="logo-list-title">Вдохновение в тренде: Логотипы для фэшн-индустрии</p>
        <div className="container">
            <div className="logo-list">
                {logoList.map((logo) => (
                    <LogoItem key={logo.name} logoItem={logo} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default LogoList
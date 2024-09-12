import CategoryList from "../../components/category-list/CategoryList"
import ClientForm from "../../components/client-form/ClientForm"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import LogoList from "../../components/logo-list/LogoList"
import MainBanner from "../../components/main-banner/MainBanner"
import "./home-page.css"

const HomePage = () => {
  return (
    <div>
      <Header />
      <MainBanner />
      <CategoryList />
      <LogoList />
      <ClientForm />
      <Footer />
    </div>
  )
}

export default HomePage
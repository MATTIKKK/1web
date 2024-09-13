import CategoryList from "../../components/category-list/CategoryList"
import ClientForm from "../../components/client-form/ClientForm"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import ProductList from "../../components/product-list/ProductList"
import "./category-page.css"

const CategoryPage = () => {
  return (
    <div className="category-page">
        <Header />
        <ProductList />
        <ClientForm />
        <Footer />
    </div>
  )
}

export default CategoryPage
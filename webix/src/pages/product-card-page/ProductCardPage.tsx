import CategoryList from '../../components/category-list/CategoryList';
import ClientForm from '../../components/client-form/ClientForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import LogoList from '../../components/logo-list/LogoList';
import ProductCard from '../../components/product-card/ProductCard';
import './product-card-page.css';

const ProductCardPage = () => {
  return (
    <div className="product-card-page">
      <Header />
      <ProductCard />
      <LogoList />
      <ClientForm />
      <Footer />
    </div>
  );
};

export default ProductCardPage;

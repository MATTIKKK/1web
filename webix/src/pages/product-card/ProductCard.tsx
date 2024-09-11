import CategoryList from '../../components/category-list/CategoryList';
import ClientForm from '../../components/client-form/ClientForm';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import LogoList from '../../components/logo-list/LogoList';
import './product-card.css';

const ProductCard = () => {
  return (
    <div className="product-card">
      <Header />
      <LogoList />
      <ClientForm />
      <Footer />
    </div>
  );
};

export default ProductCard;

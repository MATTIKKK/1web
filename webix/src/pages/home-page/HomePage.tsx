import ClientForm from "../../components/client-form/ClientForm"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./home-page.css"

const HomePage = () => {
  return (
    <div>
      <Header />
      <ClientForm />
      <Footer />
    </div>
  )
}

export default HomePage
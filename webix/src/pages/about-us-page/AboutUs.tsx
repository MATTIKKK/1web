import ClientForm from "../../components/client-form/ClientForm"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./about-us.css"

const AboutUsPage = () => {
  return (
    <div className="about-us">
        <Header />
        <ClientForm />
        <Footer />
    </div>
  )
}

export default AboutUsPage
import AboutUsText from "../../components/about-us-text/AboutUsText"
import ClientForm from "../../components/client-form/ClientForm"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import "./about-us.css"

const AboutUsPage = () => {
  return (
    <div className="about-us">
        <Header />
        <AboutUsText />
        <ClientForm />
        <Footer />
    </div>
  )
}

export default AboutUsPage
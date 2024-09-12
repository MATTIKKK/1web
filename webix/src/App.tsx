import "./app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import AboutUsPage from "./pages/about-us-page/AboutUs"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getProductsTC } from "./state/product-reducer"
import ProductCard from "./pages/product-card-page/ProductCardPage"

const App = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(getProductsTC());
  }, [])

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/product-card/:id" element={<ProductCard />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App
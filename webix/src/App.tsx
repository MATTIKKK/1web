import "./app.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import AboutUsPage from "./pages/about-us-page/AboutUs"

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />

        </Routes>
    </BrowserRouter>
  )
}

export default App
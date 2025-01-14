import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import AboutPage from "./Pages/AboutPage"
import ProductPage from "./Pages/ProductPage"
import ProductInner from "./Pages/ProductInner"
import SubProduct from "./Pages/SubProduct"
import LoginPage from "./Pages/LoginPage"
import RegistrationPage from "./Pages/RegistrationPage"


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-us" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/productinner" element={<ProductInner/>}/>
        <Route path="/subproductinner" element={<SubProduct/>}/>
        <Route path="/login-page" element={<LoginPage/>}/>
        <Route path="/registration-page" element={<RegistrationPage/>}/>
        <Route path="/Profile-page" element={<RegistrationPage/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

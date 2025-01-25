import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import AboutPage from "./Pages/AboutPage"
import ProductPage from "./Pages/ProductPage"
import ProductInner from "./Pages/ProductInner"

import AdminPanel from "./Pages/Admin/AdminPanel/AdminPanel"

import SubProduct from "./Pages/SubProduct"
import LoginPage from "./Pages/LoginPage"
import RegistrationPage from "./Pages/RegistrationPage"
import ProfilePage from "./Pages/ProfilePage"
import ContactPage from "./Pages/ContactPage"
import AdminLogin from "./Pages/Admin/Login/Login"
import ProductList from "./Pages/ProductListing/ProductListing"
import { FaWhatsapp } from "react-icons/fa";


function App() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/7558911587", "_blank");
  };

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-us" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/productinner/:id" element={<ProductInner/>}/>

        <Route path="/admin/*" element={<AdminPanel/>}/>

        <Route path="/subproductinner" element={<SubProduct/>}/>
        <Route path="/login-page" element={<LoginPage/>}/>
        <Route path="/registration-page" element={<RegistrationPage/>}/>
        <Route path="/Profile-page" element={<ProfilePage/>}/>
        <Route path="/contact-us" element={<ContactPage/>}/>
        <Route path="/contact-us" element={<ContactPage/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/productList/:categoryId" element={<ProductList/>}/>

      </Routes>
    </Router>
          {/* WhatsApp Floating Button */}
          <div className="whatsapp-button" onClick={handleWhatsAppClick}>
        <FaWhatsapp />
      </div>
      
    </>
  )
}

export default App

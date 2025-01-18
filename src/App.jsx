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



function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-us" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/productinner" element={<ProductInner/>}/>

        <Route path="/admin/*" element={<AdminPanel/>}/>

        <Route path="/subproductinner" element={<SubProduct/>}/>
        <Route path="/login-page" element={<LoginPage/>}/>
        <Route path="/registration-page" element={<RegistrationPage/>}/>
        <Route path="/Profile-page" element={<ProfilePage/>}/>
        <Route path="/contact-us" element={<ContactPage/>}/>

      </Routes>
    </Router>
      
    </>
  )
}

export default App

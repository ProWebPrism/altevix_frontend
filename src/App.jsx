import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import AboutPage from "./Pages/AboutPage"
import ProductPage from "./Pages/ProductPage"
import ProductInner from "./Pages/ProductInner"
import AdminPanel from "./Pages/Admin/AdminPanel/AdminPanel"


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
      </Routes>
    </Router>
      
    </>
  )
}

export default App

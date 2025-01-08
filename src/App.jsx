import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import AboutPage from "./Pages/AboutPage"
import ProductPage from "./Pages/ProductPage"


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about-us" element={<AboutPage/>}/>
        <Route path="/products" element={<ProductPage/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

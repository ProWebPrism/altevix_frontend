import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import Productpage from "./Pages/product-page"

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/product-page" element={<Productpage/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App

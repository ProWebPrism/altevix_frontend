import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, Link } from 'react-router-dom';
import HeroSectionUpdate from '../HeroSection/HeroSection'; 
import './AdminPanel.css'
import ElevatorSectionUpdate from '../ElevatorsSection/ElevatorSection';
import AdvantagesSectionUpdate from '../Advantages/Advantages';
import UpdateCustomMade from '../Custommade/CustomMade';
import UpdateStoreSection from '../StoreSection/StoreSection';
import ProductSectionUpdate from '../ProductSection/PoductSection';
import UpdateAboutSection from '../UpdateAboutSection/UpdateAboutSection';
import ProductPage from '../ProductPage/ProductPage'
import UpdateContactDetails from '../ContactPage/ContactPage';
import PasswordReset from '../ResetPassword/ResetPassword';
import AddProduct from '../AddProduct/AddProduct';
import ProductCard from '../ProductList/ProductList';
import EditProduct from '../EditProduct/EditProduct';

const AdminPanel = () => {
  const [isHomePageMenuOpen, setIsHomePageMenuOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('admintoken')
    if(!token) {
      navigate('/admin-login')
    }
  },[])

  const handleLogout = () => {
    localStorage.removeItem('admintoken');
    navigate('/admin-login');
  };

  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Admin Panel</h1>
        </div>
        <nav>
          <ul>
          <li>
              <button
                className="dropdown-btn"
                onClick={() => setIsHomePageMenuOpen(!isHomePageMenuOpen)}
              >
                Update Home Page
              </button>
              {isHomePageMenuOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/admin/herosection">Update Slider Section</Link>
                  </li>
                  <li>
                    <Link to="/admin/advantages">Update Advantages Section</Link>
                  </li>
                  <li>
                    <Link to="/admin/cards">Update Elevators Section</Link>
                  </li>
                  <li>
                    <Link to="/admin/custom">Update Custom made Section</Link>
                  </li>
                  <li>
                    <Link to="/admin/store">Update Store Section</Link>
                  </li>
                  <li>
                    <Link to="/admin/product-section">Update Product Section</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/admin/about">Update About Page</Link>
            </li>
            <li>
              <Link to="/admin/product">Update Product Page</Link>
            </li>
            <li>
              <Link to="/admin/contact">Update Contact Page</Link>
            </li>
            <li>
              <Link to="/admin/reset-password">Reset Password</Link>
            </li>
            <li>
              <Link to="/admin/products">Products </Link>
            </li>
            {/* Add other navigation links if needed */}
          </ul>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Logout</button>

      </aside>
      <main className="content">
        <Routes>
          <Route path="herosection" element={<HeroSectionUpdate />} />
          <Route path="cards" element={<ElevatorSectionUpdate />} />
          <Route path="advantages" element={<AdvantagesSectionUpdate />} />
          <Route path="custom" element={<UpdateCustomMade />} />
          <Route path="store" element={<UpdateStoreSection />} />
          <Route path="product-section" element={<ProductSectionUpdate />} />
          <Route path="about" element={<UpdateAboutSection />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="contact" element={<UpdateContactDetails />} />
          <Route path="reset-password" element={<PasswordReset />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<ProductCard />} />
          <Route path="editproduct/:id" element={<EditProduct />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;

import React from 'react';
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

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>Admin Panel</h1>
        </div>
        <nav>
          <ul>
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
            <li>
              <Link to="/admin/about">Update About Section</Link>
            </li>
            <li>
              <Link to="/admin/product">Update Product Page</Link>
            </li>
            {/* Add other navigation links if needed */}
          </ul>
        </nav>
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
          {/* Add other routes as needed */}
        </Routes>
      </main>
    </div>
  );
};

export default AdminPanel;

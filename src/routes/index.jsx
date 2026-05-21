import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute';
import Layout from '../components/layout/Layout';

// Pages
import Login from '../pages/Auth/Login';
import Signup from '../pages/Auth/Signup';
import Calculator from '../pages/Calculator/Calculator';
import CompareService from '../pages/CompareService/CompareService';
import Gallery from '../pages/Gallery/Gallery';
import Home from '../pages/Home/Home';
import Material from '../pages/Material/Material';
import Services from '../pages/Services/Services';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes (no layout) */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main routes with layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="compare" element={<CompareService />} />
        <Route path="material" element={<Material />} />
        <Route path="gallery" element={<Gallery />} />

        {/* Protected routes (for future use) */}
        <Route path="dashboard" element={
          <ProtectedRoute>
            <div className="py-20 px-4 text-center">
              <h1 className="text-4xl font-bold text-white">Dashboard</h1>
              <p className="text-gray-400 mt-4">Protected route - coming soon</p>
            </div>
          </ProtectedRoute>
        } />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
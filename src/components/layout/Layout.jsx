import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20"> {/* Account for fixed header */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
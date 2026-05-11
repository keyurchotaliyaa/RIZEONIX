import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="pt-20"> {/* Account for fixed header */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
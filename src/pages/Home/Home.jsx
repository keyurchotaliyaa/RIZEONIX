import { Award, Shield, Sun, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              {t.rizeonix}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {t.homeSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/calculator" className="btn-primary text-lg px-8 py-3 text-center">
                {t.getStarted}
              </Link>
              <Link to="/services" className="btn-secondary text-lg px-8 py-3 text-center">
                {t.learnMore}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-gray">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            {t.whyChoose}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105">
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{t.advancedTechnology}</h3>
              <p className="text-gray-400">
                {t.advancedTechDesc}
              </p>
            </div>
            <div className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{t.maximumEfficiency}</h3>
              <p className="text-gray-400">
                {t.maxEfficiencyDesc}
              </p>
            </div>
            <div className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">{t.reliableService}</h3>
              <p className="text-gray-400">
                {t.reliableServiceDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              {t.readyToMaximize}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              {t.freeQuotationDesc}
            </p>
            <Link to="/calculator" className="btn-primary text-lg px-8 py-3 inline-block">
              {t.getFreQuote}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
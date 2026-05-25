import { Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useLanguage } from '../../context/LanguageContext';
import { translations } from '../../context/translations';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const location = useLocation();
  const { user, logout } = useAuth();
  const { language, changeLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('light-theme', initialTheme === 'light');
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('light-theme', nextTheme === 'light');
  };

  const navLinks = [
    { name: t.home, path: '/' },
    { name: t.services, path: '/services' },
    { name: t.compareServices, path: '/compare' },
    { name: t.quotationCalculator, path: '/calculator' },
    { name: t.material, path: '/material' },
    { name: t.gallery, path: '/gallery' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">RIZEONIX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white hover:text-primary transition-colors duration-300 relative ${
                  isActive(link.path) ? 'text-primary' : ''
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden md:block relative">
            <button
              type="button"
              onClick={() => setLangOpen(!langOpen)}
              className="inline-flex items-center gap-2 btn-secondary"
            >
              <Globe className="w-4 h-4" />
              {language.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 glassmorphism rounded-lg overflow-hidden">
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                    language === 'en' ? 'bg-primary/50' : ''
                  }`}
                >
                  {t.english}
                </button>
                <button
                  onClick={() => {
                    changeLanguage('gu');
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                    language === 'gu' ? 'bg-primary/50' : ''
                  }`}
                >
                  {t.gujarati}
                </button>
                <button
                  onClick={() => {
                    changeLanguage('hi');
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                    language === 'hi' ? 'bg-primary/50' : ''
                  }`}
                >
                  {t.hindi}
                </button>
                <button
                  onClick={() => {
                    changeLanguage('mr');
                    setLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                    language === 'mr' ? 'bg-primary/50' : ''
                  }`}
                >
                  {t.marathi}
                </button>
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="hidden md:inline-flex items-center gap-2 btn-secondary"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            {theme === 'dark' ? t.light : t.dark}
          </button>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <button
                onClick={logout}
                className="btn-secondary"
              >
                {t.logout}
              </button>
            ) : (
              <>
                <Link to="/login" className="btn-secondary">
                  {t.login}
                </Link>
                <Link to="/signup" className="btn-primary">
                  {t.signup}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-white hover:text-primary transition-colors duration-300 ${
                    isActive(link.path) ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/10">
                {/* Language Selector Mobile */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setLangOpen(!langOpen)}
                    className="w-full text-left inline-flex items-center gap-2 btn-secondary"
                  >
                    <Globe className="w-4 h-4" />
                    {t.language}
                  </button>
                  {langOpen && (
                    <div className="mt-2 w-full glassmorphism rounded-lg overflow-hidden">
                      <button
                        onClick={() => {
                          changeLanguage('en');
                          setLangOpen(false);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                          language === 'en' ? 'bg-primary/50' : ''
                        }`}
                      >
                        {t.english}
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage('gu');
                          setLangOpen(false);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                          language === 'gu' ? 'bg-primary/50' : ''
                        }`}
                      >
                        {t.gujarati}
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage('hi');
                          setLangOpen(false);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                          language === 'hi' ? 'bg-primary/50' : ''
                        }`}
                      >
                        {t.hindi}
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage('mr');
                          setLangOpen(false);
                          setIsOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-white hover:bg-primary/30 transition-colors ${
                          language === 'mr' ? 'bg-primary/50' : ''
                        }`}
                      >
                        {t.marathi}
                      </button>
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    toggleTheme();
                    setIsOpen(false);
                  }}
                  className="btn-secondary text-left"
                >
                  {theme === 'dark' ? t.lightMode : t.darkMode}
                </button>
                {user ? (
                  <button
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                    className="btn-secondary text-left"
                  >
                    {t.logout}
                  </button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="btn-secondary text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.login}
                    </Link>
                    <Link
                      to="/signup"
                      className="btn-primary text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      {t.signup}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
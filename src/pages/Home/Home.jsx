import { Award, Shield, Sun, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              RIZEONIX
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Advanced Solar Cleaning Systems for Maximum Efficiency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-3">
                Get Started
              </button>
              <button className="btn-secondary text-lg px-8 py-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-dark-gray">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Why Choose RIZEONIX?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105">
              <Sun className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Advanced Technology</h3>
              <p className="text-gray-400">
                State-of-the-art cleaning systems designed for optimal solar panel performance.
              </p>
            </div>
            <div className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Maximum Efficiency</h3>
              <p className="text-gray-400">
                Increase your solar energy output by up to 30% with our professional cleaning services.
              </p>
            </div>
            <div className="glassmorphism p-6 rounded-xl hover:glow transition-all duration-300 transform hover:scale-105">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">Reliable Service</h3>
              <p className="text-gray-400">
                Trusted by thousands of customers with guaranteed satisfaction and warranty.
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
              Ready to Maximize Your Solar Investment?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a free quotation and see how much you can save with RIZEONIX.
            </p>
            <button className="btn-primary text-lg px-8 py-3">
              Get Free Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
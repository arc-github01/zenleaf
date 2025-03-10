import React from 'react';
import { Link } from 'react-router-dom';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Discover the Art of <span className="text-green-600">Green Tea</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Experience the finest organic green teas sourced directly from traditional farms in Japan and China.
              </p>
              <Link to="/shop" className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&q=80" 
                alt="Green tea ceremony" 
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { totalItems } = useCart();

  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <header className="bg-white shadow-sm fixed w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-semibold text-gray-800">Zenleaf</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/shop" className="text-gray-600 hover:text-green-600">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-green-600">About</Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-green-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Zenleaf</h3>
              <p className="text-gray-400">Premium organic green tea sourced directly from traditional farms.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@zenleaf.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">&copy; 2024 Zenleaf. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
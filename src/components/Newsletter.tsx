import React from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-green-50">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Tea Community</h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter for exclusive offers, tea brewing tips, and early access to new products.
        </p>
        <form className="flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 md:w-96"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Subscribe</span>
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
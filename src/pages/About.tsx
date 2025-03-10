import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-600 mb-6">
            At Zenleaf, we believe in the transformative power of green tea. Our journey began with a simple mission: to bring the finest organic green teas from traditional farms to tea enthusiasts worldwide.
          </p>
          
          <img 
            src="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80"
            alt="Tea plantation"
            className="w-full rounded-lg shadow-lg my-8"
          />
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We're dedicated to sourcing the highest quality green teas while supporting sustainable farming practices and traditional tea cultivation methods. Every tea in our collection is carefully selected to ensure you experience the authentic taste and benefits of premium green tea.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Sustainable Practices</h2>
          <p className="text-gray-600 mb-6">
            We work directly with small family farms in Japan and China, ensuring fair trade practices and supporting traditional tea cultivation methods that have been passed down through generations.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Quality Assurance</h2>
          <p className="text-gray-600 mb-6">
            Each batch of tea undergoes rigorous quality testing to ensure it meets our high standards. We believe in transparency and traceability, providing you with detailed information about the origin and processing of each tea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
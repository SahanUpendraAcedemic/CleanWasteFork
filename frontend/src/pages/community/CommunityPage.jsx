import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const CommunityPage = () => {

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#175E5E] to-[#134c4c] text-white">
        <div className="text-center p-6 max-w-4xl">
          <h1 className="text-6xl font-extrabold tracking-tight">
            <span className="text-yellow-400">ClearWaste</span> Community
          </h1>
          <p className="text-2xl mt-4 leading-relaxed">
            An initiative for a cleaner Community
          </p>
          
          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6 justify-center">
            <Link to="/CreateEvent">
            <button className="px-8 py-4 bg-yellow-400 text-[#175E5E] font-semibold rounded-lg shadow-lg hover:bg-yellow-300 hover:shadow-xl transition-all duration-300">
              Create a Event
            </button>
            </Link>
            <button className="px-8 py-4 bg-transparent text-white border border-white font-semibold rounded-lg hover:bg-white hover:text-[#175E5E] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

      </main>

      {/* Footer */}
      <Footer />

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <header className="w-full bg-blue-600 p-4 text-white text-center shadow-md">
        <h1 className="text-2xl font-bold">Community Page</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-4">
        <section className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">Welcome to the Community!</h2>
          <p className="text-gray-600 mb-4">
            Connect with others, share ideas, and grow together.
          </p>
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Join the Discussion
          </button>
        </section>
      </main>

      <footer className="w-full bg-gray-800 text-white text-center p-4">
        <p>© 2024 Community Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CommunityPage;

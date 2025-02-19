import React from "react";

export default function Newsletter() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="w-11/12 mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Join Our Tech Community</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Subscribe now and get exclusive tech updates, product news, and special offers.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-0"
          />
          <button className="bg-[#5a45aa] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a45aa] transition">
            Subscribe Now
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#5a45aa] hover:text-white px-4 py-2 rounded-lg hover:bg-[#5a45aa] transition"
          >
            Join Discord
          </a>
          <a
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border border-[#5a45aa] hover:text-white px-4 py-2 rounded-lg hover:bg-[#5a45aa] transition"
          >
            Join Facebook Group
          </a>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div>
      <Navbar/>

      <div className="min-h-screen w-full bg-[#0b0f17] text-gray-200 px-6 py-12 flex flex-col items-center">
      {/* Glass container */}
      <div className="glass w-full max-w-6xl rounded-2xl p-10 backdrop-blur-lg border border-white/10 bg-white/5 shadow-2xl">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#00ff99] animate-bounce">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Have a question, suggestion, or collaboration idea? Drop us a message — we’d love to hear from you.
        </p>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg"
          >
            <div>
              <label className="block text-sm mb-2 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:border-blue-400 text-gray-100 placeholder-gray-500"
                placeholder="Name"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:border-green-400 text-gray-100 placeholder-gray-500"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:border-yellow-400 text-gray-100 placeholder-gray-500"
                placeholder="What's your query about?"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-3 rounded-md bg-black/30 border border-white/10 focus:outline-none focus:border-pink-400 text-gray-100 placeholder-gray-500 resize-none"
                placeholder="Type your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#00ff99] text-black font-bold hover:scale-[1.02] transition-transform duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-between bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">Get in Touch</h2>
              <p className="text-sm text-gray-300 mb-6">
                We’re here to assist you with queries about signals, verification, or collaborations.
                Our team typically responds within 24 hours.
              </p>

              <div className="space-y-3 text-gray-300">
                <p>📍 Location: Gwalior, India</p>
                <p>📧 Email: support@cryptofuse.io</p>
                <p>🌐 Website: www.cryptofuse.io</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold mb-3 text-green-400">Follow Us</h3>
              <div className="flex gap-4 text-gray-400">
                <a href="#" className="hover:text-blue-400 transition-all duration-300">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="hover:text-pink-400 transition-all duration-300">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="hover:text-blue-600 transition-all duration-300">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="hover:text-green-400 transition-all duration-300">
                  <i className="fab fa-telegram text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 border-t border-white/10 pt-6">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} CryptoFuse. All rights reserved.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}

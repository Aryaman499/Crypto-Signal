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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0118] via-[#13052b] to-[#21073a] text-white relative overflow-hidden">
      {/* Neon grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,255,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,255,255,0.15),transparent_40%)]"></div>

      <Navbar />

      <div className="relative px-6 py-16 flex flex-col items-center z-10">
        <div className="w-full max-w-6xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.1)] rounded-3xl p-10">
          {/* Header */}
          <h1 className="text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-[#00fff0] to-[#ff00ff] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] animate-pulse">
            Contact <span className="text-white">Us</span>
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a question, suggestion, or collaboration idea? Drop us a
            message — we’d love to hear from you.
          </p>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)] transition-all"
            >
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Your name" },
                { label: "Email Address", name: "email", type: "email", placeholder: "you@example.com" },
                { label: "Subject", name: "subject", type: "text", placeholder: "What's your query about?" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block mb-2 text-sm font-medium text-cyan-300">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full p-3 rounded-md bg-black/40 text-white border border-cyan-400/30 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 transition-all"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-2 text-sm font-medium text-pink-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                  className="w-full p-3 rounded-md bg-black/40 text-white border border-pink-400/30 focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-gray-400 resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-md font-semibold text-white bg-gradient-to-r from-[#00fff0] to-[#ff00ff] hover:from-[#00cfcf] hover:to-[#ff40ff] shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,0,255,0.5)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_25px_rgba(255,0,255,0.2)] transition-all">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-cyan-300">
                  Get in Touch
                </h2>
                <p className="text-sm text-gray-300 mb-6">
                  We’re here to assist you with queries about signals,
                  verification, or collaborations. Our team typically responds
                  within 24 hours.
                </p>

                <div className="space-y-3 text-gray-300">
                  <p>📍 Gwalior, India</p>
                  <p>📧 support@cryptofuse.io</p>
                  <p>🌐 www.cryptofuse.io</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-3 text-pink-300">
                  Follow Us
                </h3>
                <div className="flex gap-5 text-gray-400">
                  {[
                    { icon: "fab fa-twitter", color: "text-cyan-400" },
                    { icon: "fab fa-instagram", color: "text-pink-400" },
                    { icon: "fab fa-linkedin", color: "text-blue-400" },
                    { icon: "fab fa-telegram", color: "text-purple-400" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className={`hover:${social.color} transition-all duration-300 text-xl`}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 border-t border-white/10 pt-6 text-gray-400 text-sm">
            © {new Date().getFullYear()} <span className="text-cyan-300">CryptoFuse</span>. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

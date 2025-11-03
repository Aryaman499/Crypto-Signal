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
    <div
      className="min-h-screen w-full bg-[#0d0d0d] text-[#e0e0e0] relative font-['JetBrains_Mono',monospace] overflow-hidden"
    >
      {/* Gridline background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10 mix-blend-overlay"></div>

      <Navbar />

      <div className="relative px-6 py-16 flex flex-col items-center z-10">
        <div className="w-full max-w-5xl border border-[#333] bg-[#111]/70 backdrop-blur-md rounded-lg p-10 shadow-[0_0_20px_rgba(0,255,0,0.1)]">
          {/* Header */}
          <h1 className="text-4xl font-bold text-center mb-4 text-[#00ff99] tracking-tight uppercase">
            {"< Contact_Us />"}
          </h1>
          <p className="text-center text-gray-400 mb-10 text-sm">
            Need assistance or collaboration? Send your encrypted packet below.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-5 border border-[#222] bg-[#0f0f0f]/70 p-6 rounded-md"
            >
              {[
                { label: "Full Name", name: "name", type: "text", placeholder: "Name" },
                { label: "Email Address", name: "email", type: "email", placeholder: "name@gmail.com" },
                { label: "Subject", name: "subject", type: "text", placeholder: "Please type the query" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block mb-2 text-xs text-[#00ff99] uppercase tracking-wider">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    placeholder={field.placeholder}
                    className="w-full p-3 bg-[#0b0b0b] text-[#e0e0e0] border border-[#333] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#00ff99] placeholder-gray-600"
                  />
                </div>
              ))}

              <div>
                <label className="block mb-2 text-xs text-[#00ff99] uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message..."
                  className="w-full p-3 bg-[#0b0b0b] text-[#e0e0e0] border border-[#333] rounded-sm focus:outline-none focus:ring-1 focus:ring-[#00ff99] placeholder-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 text-[#0d0d0d] bg-[#00ff99] font-bold uppercase tracking-wider hover:bg-[#00cc77] transition-all duration-200"
              >
                Send Message →
              </button>
            </form>

            {/* Contact Info */}
            <div className="border border-[#222] bg-[#0f0f0f]/70 p-6 rounded-md flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-3 text-[#00ff99]">
                  Contact :
                </h2>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                  Our system monitors all network queries 24/7. Expect a
                  response within 24 hours (unless the blockchain lags).
                </p>

                <div className="space-y-2 text-sm text-gray-400">
                  <p>📍 /Location: Gwalior, IN</p>
                  <p>📧 /Email: support@cryptofuse.io</p>
                  <p>🌐 /Web: www.cryptofuse.io</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm mb-3 text-[#00ff99] uppercase tracking-wider">
                  Follow Us
                </h3>
                <div className="flex gap-4 text-[#777]">
                  {[
                    { icon: "fab fa-twitter" },
                    { icon: "fab fa-instagram" },
                    { icon: "fab fa-linkedin" },
                    { icon: "fab fa-telegram" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="hover:text-[#00ff99] transition-all duration-200 text-lg"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-10 border-t border-[#222] pt-6 text-gray-600 text-xs tracking-wider">
            © {new Date().getFullYear()} CryptoFuse — Engineered in Code
          </div>
        </div>
      </div>
    </div>
  );
}

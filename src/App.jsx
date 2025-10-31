
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function App() {
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-diag text-white font-sans overflow-x-hidden min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center p-6 shadow-md bg-black/70 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <img src="/business-logo.jpg" alt="Drew's Auto Logo" className="h-16 w-auto logo-sheen" />
        </div>
        <nav className="space-x-6 text-lg font-semibold relative">
          <a href="#about" className="hover:text-green-400 transition nav-sheen relative inline-block">About</a>
          <a href="#services" className="hover:text-green-400 transition nav-sheen relative inline-block">Services</a>
          <a href="#quote" className="hover:text-green-400 transition nav-sheen relative inline-block">Request a Quote</a>
          <a href="#contact" className="hover:text-green-400 transition nav-sheen relative inline-block">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-24 bg-gradient-to-b from-green-600 to-black">
        <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} transition={{ duration: 0.8 }} className="text-5xl font-bold mb-4 text-white drop-shadow-md">
          Drew's Auto & Truck Repair LLC
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.2, duration: 0.8 }} className="text-xl text-green-200 font-medium mb-8">
          Diesel Specialist • Reliable Service • Honest Work
        </motion.p>
        <motion.a href="#contact" className="bg-green-500 hover:bg-green-400 text-black px-8 py-3 rounded-xl font-semibold transition shadow-lg inline-block">
          Schedule an Appointment
        </motion.a>
      </section>

      {/* About */}
      <section id="about" className="py-16 px-8 text-center">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-4xl font-bold text-green-400 mb-6">
          About Us
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="max-w-3xl mx-auto text-gray-300 leading-relaxed">
          At Drew's Auto & Truck Repair LLC, we take pride in delivering expert automotive and diesel services for both personal and commercial vehicles. Located in Littlestown, PA, we’re known for dependable repairs, honest pricing, and exceptional customer care.
        </motion.p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-8 bg-black border-t border-green-700/40">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-4xl font-bold text-center text-green-400 mb-12">
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            "Engine Repair",
            "Transmission Service",
            "Brake Systems",
            "Diagnostics",
            "Preventive Maintenance",
            "Diesel & Heavy-Duty Truck Repair",
          ].map((service, i) => (
            <motion.div key={service} initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ delay: i * 0.08 }} viewport={{ once: true }} className="bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-green-600/30 transition border border-zinc-800 hover:border-green-500">
              <h3 className="text-2xl font-semibold text-green-300 mb-2">{service}</h3>
              <p className="text-gray-400 text-sm">Professional {service.toLowerCase()} for all vehicle types, handled with precision and care.</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="py-20 px-8 bg-gradient-to-b from-black to-green-900/10 border-t border-green-700/30">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-4xl font-bold text-center text-green-400 mb-10">
          Request a Quote
        </motion.h2>

        {!quoteSubmitted ? (
          <motion.form onSubmit={handleQuoteSubmit} initial="hidden" whileInView="visible" variants={fadeInUp} transition={{ duration: 0.7 }} viewport={{ once: true }} className="relative max-w-3xl mx-auto form-glow p-8 rounded-2xl shadow-md border border-zinc-800">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" required className="w-full p-3 bg-black border border-green-700 rounded-lg text-white" />
              <input type="email" placeholder="Email" required className="w-full p-3 bg-black border border-green-700 rounded-lg text-white" />
              <input type="tel" placeholder="Phone Number" required className="w-full p-3 bg-black border border-green-700 rounded-lg text-white md:col-span-2" />
              <input type="text" placeholder="Vehicle Make/Model/Year" required className="w-full p-3 bg-black border border-green-700 rounded-lg text-white md:col-span-2" />
              <textarea placeholder="Describe the issue or service needed" rows="4" required className="w-full p-3 bg-black border border-green-700 rounded-lg text-white md:col-span-2"></textarea>
            </div>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} type="submit" className="mt-6 w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-lg font-semibold transition">
              Submit Request
            </motion.button>
          </motion.form>
        ) : (
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto center-box p-8">
            <div className="relative form-glow p-8 rounded-xl text-center">
              <CheckCircle size={64} className="text-green-400 mx-auto" />
              <p className="text-green-300 mt-4 font-semibold">Thank you! Your quote request has been received. We’ll review your information and get back to you soon.</p>
            </div>
          </motion.div>
        )}
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-8 bg-gradient-to-t from-green-700/20 to-black">
        <motion.h2 initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="text-4xl font-bold text-center text-green-400 mb-12">
          Contact Us
        </motion.h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start px-4">
          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="space-y-6 text-gray-300">
            <div className="flex items-center space-x-3">
              <Phone className="text-green-400" />
              <a href="tel:7172538803" className="hover:text-green-400 transition">(717) 253-8803</a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-green-400" />
              <a href="mailto:drews.repairs@yahoo.com" className="hover:text-green-400 transition">drews.repairs@yahoo.com</a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="text-green-400" />
              <p>4154 Baltimore Pike, Littlestown, PA 17340</p>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="text-green-400" />
              <p>Mon – Fri: 9 AM – 5 PM</p>
            </div>
          </motion.div>

          <motion.form initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }} className="bg-zinc-900 p-6 rounded-2xl shadow-md border border-zinc-800 form-glow">
            <input type="text" placeholder="Name" className="w-full p-3 mb-4 bg-black border border-green-700 rounded-lg text-white" />
            <input type="email" placeholder="Email" className="w-full p-3 mb-4 bg-black border border-green-700 rounded-lg text-white" />
            <textarea placeholder="Message" rows="4" className="w-full p-3 mb-4 bg-black border border-green-700 rounded-lg text-white"></textarea>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-green-500 hover:bg-green-400 text-black py-3 rounded-lg font-semibold transition">Send Message</motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 border-t border-green-700/40">
        <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Drew's Auto & Truck Repair LLC. All rights reserved.</p>
      </footer>
    </div>
  );
}

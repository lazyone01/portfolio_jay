import React, { useState } from 'react';
import emailjs from "@emailjs/browser";
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, MessageSquare } from 'lucide-react';
import SectionWrapper from '../layout/SectionWrapper';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(() => {
        alert("Failed to send message.");
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <SectionWrapper id="contact" className="relative">
      {/* Background embellishments */}
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen overflow-hidden"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-brand-500/30 text-brand-500 text-sm font-medium mb-4">
            <MessageSquare className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white">
            Let's build something <span className="text-gradient">together</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Have a project in mind or just want to say hi? I'm currently open for new opportunities
            and would love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl h-full flex flex-col justify-center space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent-blue/20 transition-colors duration-500"></div>

              <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
              <p className="text-gray-400 mb-8">Fill up the form and I will get back to you within 24 hours.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-blue group-hover/item:bg-accent-blue group-hover/item:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 font-medium mb-1">Email</h4>
                    <a href="mailto:jayjaiswal1310@gmail.com" className="text-white hover:text-accent-blue transition-colors">jayjaiswal1310@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-purple group-hover/item:bg-accent-purple group-hover/item:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 font-medium mb-1">Phone</h4>
                    <a href="tel:+919771147497" className="text-white hover:text-accent-purple transition-colors">+91 9771147497</a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group/item">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-accent-pink group-hover/item:bg-accent-pink group-hover/item:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 font-medium mb-1">Location</h4>
                    <span className="text-white">Jalandhar, Punjab, India</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-100/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-100/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark-100/50 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-blue/50 focus:border-accent-blue/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink text-white font-bold text-lg shadow-lg hover:shadow-accent-purple/50 transform transition-all duration-300 active:scale-[0.98] overflow-hidden relative group"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <div className="relative flex items-center justify-center gap-2">
                  <span>Send Message</span>
                  <motion.div animate={{ x: isHovered ? 5 : 0, y: isHovered ? -5 : 0 }}>
                    <Send className="w-5 h-5" />
                  </motion.div>
                </div>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

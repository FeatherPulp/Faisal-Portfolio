"use client";

import { useState } from 'react';
import { Mail, MapPin, Github, Send, Clock, MessageCircle, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="text-2xl cursor-pointer font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Faisal Ahmed
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <span className="text-blue-600 font-semibold">Contact</span>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get In
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {/* Email */}
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Email Me</h3>
              <p className="text-gray-600 mb-4">
                Drop me a line anytime. I usually respond within 24 hours.
              </p>
              <a 
                href="mailto:ahmadfaiz500@gmail.com" 
                className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                ahmadfaiz500@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
              <p className="text-gray-600 mb-4">
                Based in Bengaluru, Karnataka, India. Available for remote work globally.
              </p>
              <span className="text-purple-600 font-semibold">Bengaluru, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Message</h2>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                  <p className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Thank you! Your message has been sent successfully. You&apos;ll receive a confirmation email shortly.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  <p className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {errorMessage || 'Something went wrong. Please try again.'}
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Project Discussion"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Availability */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Availability
                </h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (IST)</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM (IST)</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="text-sm text-gray-500 mt-4">
                    * Emergency support available 24/7 for existing clients
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect With Me</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://github.com/yourusername" 
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-gray-700 group-hover:text-black" />
                    <span className="text-gray-700 group-hover:text-black">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
         <footer className="bg-gray-900 text-white py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            {/* Branding */}
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Faisal Ahmed
              </span>
              <span className="hidden md:inline text-gray-500 font-medium">| Full Stack Developer</span>
            </div>
            {/* Navigation */}
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-300 hover:text-blue-400 transition">Home</Link>
              <Link href="/about" className="text-gray-300 hover:text-blue-400 transition">About</Link>
              <Link href="/skills" className="text-gray-300 hover:text-blue-400 transition">Skills</Link>
              <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition">Projects</Link>
              <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition">Contact</Link>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-6 md:mt-0">
              <Link href="/contact" className="hover:text-blue-400" aria-label="Email">
                <Mail className="w-5 h-5" />
              </Link>
              <Link href="https://github.com/yourusername" className="hover:text-blue-400" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </Link>
              {/* Add more icons as needed */}
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Faisal Ahmed. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
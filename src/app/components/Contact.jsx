'use client';

import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

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
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-white dark:bg-zinc-950 py-20">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black dark:text-zinc-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-black dark:bg-zinc-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white dark:text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-black dark:text-zinc-100 font-semibold text-sm">Email</h4>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm">ravikumarmamidi27@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-zinc-900 rounded-lg p-6 border border-gray-200 dark:border-zinc-700">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-black dark:bg-zinc-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white dark:text-zinc-900" />
                </div>
                <div>
                  <h4 className="text-black dark:text-zinc-100 font-semibold text-sm">Location</h4>
                  <p className="text-gray-600 dark:text-zinc-400 text-sm">Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-lg p-8 border border-gray-200 dark:border-zinc-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-black dark:text-zinc-100 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-600 rounded-lg text-black dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-100 focus:border-transparent transition"
                      placeholder="your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-black dark:text-zinc-100 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={loading}
                      className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-600 rounded-lg text-black dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-100 focus:border-transparent transition"
                      placeholder="your gmail"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-zinc-100 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-600 rounded-lg text-black dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-100 focus:border-transparent transition"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-black dark:text-zinc-100 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={loading}
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-zinc-950 border border-gray-300 dark:border-zinc-600 rounded-lg text-black dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-100 focus:border-transparent transition resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-lg border ${
                    status.type === 'success' 
                      ? 'bg-green-50 dark:bg-green-950/40 border-green-200 dark:border-green-800 text-green-800 dark:text-green-300' 
                      : 'bg-red-50 dark:bg-red-950/40 border-red-200 dark:border-red-800 text-red-800 dark:text-red-300'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-black dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium rounded-lg hover:bg-gray-800 dark:hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-zinc-100 focus:ring-offset-2 dark:focus:ring-offset-zinc-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white dark:border-zinc-900 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useState } from 'react';

import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe, MessageSquare } from 'lucide-react';

const Contact = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      value: "yaduvanshi20mani@gmail.com",
      link: "mailto:yaduvanshi20mani@gmail.com"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      value: "+91 XXXXXXXXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location",
      value: "Uttar Pradesh, India",
      link: "https://maps.google.com"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Discord",
      value: "manish_yadav#0000",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/manishyadav-10",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/manishyadav10/",
      color: "hover:bg-blue-700"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      name: "Portfolio",
      url: "https://proftfolio-umber.vercel.app",
      color: "hover:bg-purple-700"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      name: "Email",
      url: "mailto:yaduvanshi20mani@gmail.com",
      color: "hover:bg-pink-700"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your backend endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
   

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            {...fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Have a question or want to collaborate? I'd love to hear from you. 
              Drop me a message and I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 hover:border-pink-500/40 transition group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <span className="text-white">{info.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                <p className="text-gray-300 text-sm break-all">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Social Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-purple-500/20"
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send Me a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/20 border border-green-500 text-green-300 px-4 py-3 rounded-lg mb-6"
                >
                  ✓ Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Manish Yadav"
                    className="w-full bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Your message here..."
                    className="w-full bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 transition resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-3 rounded-lg hover:from-pink-700 hover:to-purple-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending...' : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-center"
            >
              {/* Social Media Section */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-purple-500/20 mb-8">
                <h3 className="text-2xl font-bold text-white mb-8">Connect With Me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className={`bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-xl p-4 text-center hover:border-pink-500/40 transition ${social.color}`}
                    >
                      <div className="flex justify-center mb-2 text-white">
                        {social.icon}
                      </div>
                      <p className="text-white font-medium text-sm">{social.name}</p>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-gradient-to-br from-pink-900/30 to-purple-900/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-pink-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Response Time</h3>
                <p className="text-gray-300 mb-4">
                  I typically respond to messages within 24 hours. For urgent matters, please try reaching me on LinkedIn or GitHub.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Available for freelance projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Open to collaboration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-300">Ready to discuss new ideas</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Find answers to common questions</p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "What is the typical response time?",
                answer: "I respond to most inquiries within 24 hours. For urgent matters, please mention it in your message."
              },
              {
                question: "Are you available for freelance work?",
                answer: "Yes! I'm open to freelance projects and collaborations. Feel free to discuss your project details."
              },
              {
                question: "Can I use ThumbnailAI for commercial purposes?",
                answer: "ThumbnailAI is currently available for personal use. Contact me for commercial licensing inquiries."
              },
              {
                question: "Do you offer technical support for the platform?",
                answer: "Yes, I provide support for bug reports and technical issues. Please reach out with detailed information."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            {...fadeIn}
            className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl shadow-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-pink-100 mb-8">
              Whether you have a question or a project proposal, I'm just a message away!
            </p>
            <a 
              href="mailto:yaduvanshi20mani@gmail.com"
              className="inline-block bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
import { motion } from 'framer-motion';
import { Sparkles, Code, Zap, Heart, Rocket, Brain, Github, Linkedin, Mail, Globe } from 'lucide-react';

import AboutImage from '../assets/AboutImage.jpg'
import ProfilePic from '../assets/profilePic.jpg';


const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const techStack = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full Stack Development",
      description: "Built with React, TypeScript, Node.js, and Express"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Powered by Stable Diffusion XL via Hugging Face API"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast & Efficient",
      description: "MongoDB for data storage and Cloudinary for image hosting"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Focused",
      description: "Designed with creators' needs and experience in mind"
    }
  ];

  const features = [
    {
      title: "AI-Powered Generation",
      description: "Leverages advanced Stable Diffusion XL model for high-quality thumbnail creation"
    },
    {
      title: "Multiple Styles",
      description: "Choose from Bold & Graphic, Minimalist, Photorealistic, Cinematic, and more"
    },
    {
      title: "Color Customization",
      description: "Select from vibrant, pastel, monochrome, and neon color schemes"
    },
    {
      title: "Instant Preview",
      description: "See how your thumbnail looks on YouTube before downloading"
    },
    {
      title: "Save & Manage",
      description: "All your generated thumbnails stored securely in your account"
    },
    {
      title: "Easy Download",
      description: "Download thumbnails in high resolution, ready for YouTube upload"
    }
  ];

  const timeline = [
    { 
      date: "November 2025", 
      event: "Project Inception", 
      description: "Started working on ThumbnailAI to solve the thumbnail creation challenge for YouTube creators"
    },
    { 
      date: "December 2025", 
      event: "Core Development", 
      description: "Built the full-stack architecture with React, Node.js, and integrated Stable Diffusion XL"
    },
    { 
      date: "January 2026", 
      event: "Feature Enhancement", 
      description: "Added multiple styles, color schemes, aspect ratios, and YouTube preview functionality"
    },
    { 
      date: "January 2026", 
      event: "Project Completion", 
      description: "Finalized all features, testing, and deployed the production-ready application"
    }
  ];

  const stats = [
    { number: "2", label: "Months Development" },
    { number: "6+", label: "Style Options" },
    { number: "4", label: "Color Schemes" },
    { number: "3", label: "Aspect Ratios" }
  ];

  const skills = [
    "React & TypeScript",
    "Node.js & Express",
    "MongoDB",
    "AI/ML Integration",
    "REST APIs",
    "Tailwind CSS",
    "Git & GitHub",
    "Cloud Services",
    "C/C++",
    "Java",
    "JavaScript",
    "HTML & CSS",
    "DBMS",
    "Data Structures & Algorithms",
    "Problem Solving",
    "SQL & NoSQL",
    "Computer Networks",

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#2d1b4e] to-[#1a0b2e]">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            {...fadeIn}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-6">
              About ThumbnailAI
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A solo project built with passion to help YouTube creators generate professional, 
              eye-catching thumbnails using the power of artificial intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="grid md:grid-cols-5 gap-12 items-center">
              {/* Profile Picture Column */}
              <div className="md:col-span-2 flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-pink-500 shadow-2xl">
                    <img
                      src={ProfilePic}
                      alt="Manish Yadav"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-600 to-purple-600 p-4 rounded-full shadow-xl">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8">
                  <a href="https://github.com/manishyadav-10" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/manishyadav10/" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="mailto:yaduvanshi20mani@gmail.com" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                    <Mail className="w-6 h-6 text-white" />
                  </a>
                  <a href="https://proftfolio-umber.vercel.app" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition">
                    <Globe className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* About Me Content Column */}
              <div className="md:col-span-3">
                <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed mb-6">
                  <p>
                    Hi! I'm <span className="text-pink-400 font-semibold">Manish Yadav</span>, a passionate full-stack developer 
                    with expertise in modern web technologies and artificial intelligence. I'm currently pursuing my studies 
                    at Madan Mohan Malaviya University of Technology.
                  </p>
                  <p>
                    I love building innovative solutions that solve real-world problems. ThumbnailAI is a testament to my 
                    commitment to leveraging cutting-edge technology to help content creators succeed. With a strong foundation 
                    in both frontend and backend development, I enjoy creating seamless user experiences.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
                    or brainstorming the next big idea. I believe in continuous learning and staying updated with the 
                    latest trends in web development and AI.
                  </p>
                </div>

                {/* Skills Tags */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-500/30 px-4 py-2 rounded-full text-white text-sm font-medium"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-purple-500/20"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">The Story Behind ThumbnailAI</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    This project was born from my observation of how content creators struggle with 
                    thumbnail design - spending hours on what should take minutes.
                  </p>
                  <p>
                    Starting in November 2025, I set out to build a solution that combines modern 
                    web technologies with cutting-edge AI. Using React, Node.js, and Stable Diffusion XL, 
                    I created a platform that makes professional thumbnail creation accessible to everyone.
                  </p>
                  <p>
                    After two months of intensive development, testing, and refinement, ThumbnailAI 
                    is now complete - offering multiple styles, color schemes, aspect ratios, and an 
                    intuitive user experience that I'm proud to share with the creator community.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={AboutImage}
                  alt="Development workspace"
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white p-6 rounded-2xl shadow-xl">
                  <Rocket className="w-8 h-8 mb-2" />
                  <div className="text-2xl font-bold">Built with Passion</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-900/20 to-purple-900/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-gray-300 text-lg">Built with modern technologies and best practices</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 text-white hover:bg-white/10 transition border border-purple-500/20"
              >
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Development Journey</h2>
            <p className="text-gray-300 text-lg">From concept to completion in 2 months</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-500 to-purple-500 hidden md:block"></div>
            
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left`}>
                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-purple-500/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">{milestone.date}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{milestone.event}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-[#1a0b2e] shadow-lg hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            {...fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-gray-300 text-lg">Everything you need to create stunning thumbnails</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 hover:shadow-xl transition border border-purple-500/20"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
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
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Create Amazing Thumbnails?</h2>
            <p className="text-xl text-pink-100 mb-8">
              Start generating professional thumbnails with AI in seconds
            </p>
            <button 
              onClick={() => window.location.href = '/generate'}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              Start Creating Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default About;
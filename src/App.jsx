import React from "react";
import { motion } from "framer-motion";

// Modern SVG icons with better styling
const GithubIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61C4.422 17.5 3.633 17.2 3.633 17.2c-1.087-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.123-.303-.535-1.52.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.656.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.431.372.815 1.103.815 2.222 0 1.606-.015 2.896-.015 3.286 0 .321.216.694.825.576C20.565 21.795 24 17.296 24 12c0-6.63-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
    <path d="M20.447 20.452H16.9v-5.569c0-1.328-.025-3.036-1.85-3.036-1.85 0-2.132 1.445-2.132 2.94v5.665H9.371V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 1 1 0-3.961 1.98 1.98 0 0 1 0 3.961zM6.816 20.452H3.858V9h2.958v11.452z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="hover:scale-110 transition-transform">
    <path d="M12 13.065L.015 6.75A2 2 0 0 1 2 5h20a2 2 0 0 1 1.985 1.75L12 13.065zM12 15.935l12-6.315V19a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V9.62l12 6.315z"/>
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z"/>
    <path d="M5 5h6v2H7v10h10v-4h2v6H5z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export default function Portfolio() {
  const roles = ["Data Analyst", "ML Enthusiast", "SQL Developer", "Python Developer"];
  const [text, setText] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    if (index === roles.length) return;

    if (subIndex === roles[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(roles[index].substring(0, subIndex));
    }, deleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 text-white overflow-x-hidden">

      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Modern Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center px-6 lg:px-12 py-6 border-b border-white/5 sticky top-0 backdrop-blur-xl bg-black/20 z-50"
      >
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent cursor-pointer"
        >
          UC
        </motion.h1>
        <div className="hidden md:flex space-x-8 text-sm">
          {[
            { name: "Home", href: "#" },
            { name: "Projects", href: "#projects" },
            { name: "Skills", href: "#skills" },
            { name: "Certifications", href: "#certs" },
            { name: "Contact", href: "#contact" }
          ].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              whileHover={{ scale: 1.05 }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm"
              >
                <span className="text-cyan-400 text-sm font-medium mr-2">👋</span>
                <span className="text-cyan-400 text-sm font-medium">{text}</span>
                <span className="animate-pulse text-cyan-400">|</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl lg:text-7xl font-bold leading-tight"
              >
                Turning Data Into{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Smart Decisions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 leading-relaxed max-w-lg"
              >
                I build data-driven solutions using Python, SQL, and Machine Learning to transform complex datasets into actionable insights.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  View My Work
                  <ArrowRightIcon />
                </motion.a>
                <motion.a
                  href="mailto:up26445208@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white/20 rounded-2xl font-semibold text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 backdrop-blur-sm"
                >
                  Get In Touch
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-6 pt-8"
              >
                {[
                  { icon: GithubIcon, href: "https://github.com/Upendra23397", label: "GitHub" },
                  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/upendra-chauhan-9488232a5/", label: "LinkedIn" },
                  { icon: MailIcon, href: "mailto:up26445208@gmail.com", label: "Email" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm group"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Modern Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative">
                  <img
                    src="/profile.png"
                    alt="Upendra Chauhan"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400";
                    }}
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-2xl border-2 border-white/10"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">💡</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of my data science and machine learning projects that solve real-world problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Laptop Price Prediction",
                description: "Built a machine learning model to predict laptop prices based on specifications like RAM, CPU, and brand using regression algorithms.",
                tech: ["Python", "Scikit-Learn", "Pandas"],
                link: "https://github.com/Upendra23397/laptop_price_prediction",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Sentiment Analysis",
                description: "Analyzed user reviews using NLP techniques to classify sentiments as positive, negative, or neutral with high accuracy.",
                tech: ["Python", "NLTK", "TensorFlow"],
                link: "https://github.com/Upendra23397/sentimentClassification",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Next Word Prediction",
                description: "Developed a next word prediction model using LSTM networks trained on a large corpus of text data for intelligent text completion.",
                tech: ["Python", "LSTM", "TensorFlow"],
                link: "https://github.com/Upendra23397/Next_Word_Predictor-LSTM",
                gradient: "from-purple-500 to-pink-500"
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Background glow */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-2xl">
                        {project.title.includes("Laptop") ? "💻" :
                         project.title.includes("Sentiment") ? "🎭" : "🧠"}
                      </span>
                    </div>
                    <motion.a
                      href={project.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group/link"
                    >
                      <ExternalLinkIcon />
                    </motion.a>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-white/10 text-cyan-300 rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn`}
                  >
                    View Project
                    <ArrowRightIcon />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proficient in modern data science tools and technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Expert" },
              { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", level: "Advanced" },
              { name: "Machine Learning", img: "https://cdn-icons-png.flaticon.com/512/2103/2103832.png", level: "Advanced" },
              { name: "Pandas", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", level: "Expert" },
              { name: "NumPy", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", level: "Expert" },
              { name: "TensorFlow", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", level: "Intermediate" },
              { name: "Scikit-Learn", img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg", level: "Advanced" },
              { name: "EDA", img: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png", level: "Expert" }
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-10 h-10 object-contain"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </motion.div>

                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </h3>

                  <div className="flex items-center justify-center gap-2">
                    <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === "Expert" ? "100%" : skill.level === "Advanced" ? "80%" : "60%" }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full`}
                      ></motion.div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{skill.level}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certs" className="relative px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional certifications that validate my expertise in data science and technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Data Analytics",
                issuer: "Deloitte",
                link: "https://drive.google.com/file/d/1Rr3a0w0T5a3I8WPZ-lqzHXPTKk03MR8X/view",
                color: "from-emerald-400 to-teal-500",
                icon: "📊"
              },
              {
                name: "Database Programming with SQL",
                issuer: "Oracle",
                link: "https://drive.google.com/file/d/13Fct_rVRhQWVMtkE-IJPrRB2dY3zMqSS/view",
                color: "from-red-400 to-orange-500",
                icon: "🗄️"
              },
              {
                name: "Data Science & ML",
                issuer: "Code With Harry",
                link: "https://drive.google.com/file/d/1VusDoIQcAMNNCMFe5daLSYkZVrZKU4U3/view",
                color: "from-blue-400 to-indigo-500",
                icon: "🤖"
              },
              {
                name: "Deep Learning",
                issuer: "Intellipaat",
                link: "https://intellipaat.com/academy/certificate-link/?Yz00NTQwJnU9MjgyOTA3JmV4dD0x",
                color: "from-purple-400 to-pink-500",
                icon: "🧠"
              }
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 overflow-hidden"
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>

                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full transform rotate-12"></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <span className="text-3xl">{cert.icon}</span>
                    </div>
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <ExternalLinkIcon />
                    </motion.a>
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      Issued by <span className="text-cyan-400">{cert.issuer}</span>
                    </p>
                  </div>

                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${cert.color} rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 w-full justify-center group/btn`}
                  >
                    Verify Certificate
                    <ArrowRightIcon />
                  </motion.a>

                  <p className="text-sm text-gray-400 mt-3 text-center">
                    Click to verify authenticity
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have a project in mind or want to discuss data science opportunities? I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                {/* Background glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("Message sent! (demo)");
                    }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">Name</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">Message</label>
                      <textarea
                        rows="5"
                        required
                        className="w-full px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <ArrowRightIcon />
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects. Whether you have a question about my work or just want to say hello, feel free to reach out.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
                    <MailIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-300">up26445208@gmail.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <LinkedinIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-gray-300">Connect professionally</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <GithubIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-gray-300">Check out my code</p>
                  </div>
                </motion.div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-400 text-sm">
                  Response time: Usually within 24 hours
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-6 lg:px-12 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-white">UC</span>
              </div>
              <span className="text-gray-300">© 2024 Upendra Chauhan. All rights reserved.</span>
            </div>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#certs" className="hover:text-cyan-400 transition-colors">Certifications</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

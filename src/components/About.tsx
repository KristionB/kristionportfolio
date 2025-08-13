import React from 'react';
import { Code, Coffee, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: '5+ Years Experience',
      description: 'Building scalable web applications'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Leading cross-functional teams'
    },
    {
      icon: <Zap size={24} />,
      title: 'Performance Focused',
      description: 'Optimizing for speed and efficiency'
    },
    {
      icon: <Coffee size={24} />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate full stack developer with a love for creating innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="prose prose-lg">
              <p className="text-slate-600 leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in building 
                modern, responsive applications using cutting-edge technologies. My journey 
                started with a curiosity about how websites work, and has evolved into a 
                passion for creating digital experiences that solve real-world problems.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                I believe in writing clean, maintainable code and staying up-to-date with 
                the latest industry trends. When I'm not coding, you'll find me contributing 
                to open source projects, mentoring fellow developers, or exploring new 
                technologies that can improve user experiences.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Currently, I'm focused on building scalable web applications with React, 
                Node.js, and modern cloud technologies, always with a focus on performance, 
                accessibility, and user experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-200 hover:scale-105"
              >
                <div className="text-blue-600 mb-4">{highlight.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-2">{highlight.title}</h3>
                <p className="text-sm text-slate-600">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

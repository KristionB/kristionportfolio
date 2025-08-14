import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'Tools & Other',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Figma', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-700 font-medium">{skill.name}</span>
                      <span className="text-slate-600 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Always Learning</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              I believe in continuous learning and staying up-to-date with the latest technologies. 
              Currently exploring GraphQL, WebAssembly, and advanced cloud architectures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

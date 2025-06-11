
import React from 'react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      period: "2023 - 2026",
      status: "Currently Pursuing"
    },
    {
      degree: "Higher Secondary Education (HSE)",
      period: "2021 - 2023",
      status: "79.17%"
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      period: "2020 - 2021",
      status: "Completed"
    }
  ];

  const certifications = [
    {
      title: "Joy of Computing using Python",
      provider: "NPTEL",
      score: "66%"
    },
    {
      title: "Database Management System",
      provider: "NPTEL",
      score: "51%"
    },
    {
      title: "VB.NET Fundamentals",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed"
    },
    {
      title: "Python Programming",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed"
    },
    {
      title: "Fundamentals of C",
      provider: "INFOSYS SPRINGBOARD",
      score: "Completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Education & Certifications</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-card-foreground">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground">{edu.degree}</h4>
                  <p className="text-amber-600 font-medium mb-2">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.status}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center text-card-foreground">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:scale-105">
                  <h4 className="text-lg font-semibold mb-2 text-card-foreground">{cert.title}</h4>
                  <div className="flex justify-between items-center">
                    <p className="text-amber-600 font-medium">{cert.provider}</p>
                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm">
                      {cert.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;


import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Background</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently pursuing my BCA degree (2023-2026), diving deep into the world of computer applications 
                  and software development. My journey in programming started with Python and has expanded to web technologies.
                </p>
              </div>
              
              <div className="bg-card p-8 rounded-xl shadow-sm border hover:shadow-md transition-shadow duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">Interests & Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about full-stack development, particularly interested in creating user-friendly web applications. 
                  Currently exploring React ecosystem and prompt engineering to stay ahead in the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-stone-50 p-8 rounded-xl border">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-200 to-stone-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-amber-800">R</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Rahul</h3>
                <p className="text-muted-foreground">BCA Student & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

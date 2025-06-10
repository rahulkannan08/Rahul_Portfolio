
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create email content
      const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}
      `;

      // Create mailto link
      const subject = encodeURIComponent(`Portfolio Contact: Message from ${formData.name}`);
      const body = encodeURIComponent(emailContent);
      const mailtoLink = `mailto:rahul08supermacy@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      toast({
        title: "Email Client Opened! 📧",
        description: "Your default email app should open with the message pre-filled. Just hit send!",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to open email client. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      type: "Email",
      value: "rahul08supermacy@gmail.com",
      link: "mailto:rahul08supermacy@gmail.com",
      description: "Messages will be sent to this email",
      emoji: "📧"
    },
    {
      type: "GitHub",
      value: "rahulll.github",
      link: "https://github.com/rahulll",
      description: "Check out my code repositories",
      emoji: "💻"
    },
    {
      type: "LinkedIn",
      value: "rahullll",
      link: "https://linkedin.com/in/rahullll",
      description: "Let's connect professionally",
      emoji: "💼"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-background to-amber-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Wave effect at top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="rgba(245,245,244,0.3)"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
              Let's Vibe Together ✨
            </span>
          </h2>
          <p className="text-xl text-muted-foreground font-medium">slide into my DMs fr 📱</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-card-foreground flex items-center space-x-2">
              <span>Connect With Me</span>
              <span className="text-2xl">🤝</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              no cap, I'm always down to chat about new opportunities, collab on fire projects, 
              or just vibe with fellow devs! hit me up bestie! 💯
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-border/50 hover:shadow-2xl hover:shadow-purple-400/20 transition-all duration-300 hover:scale-105 card-hover">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                      {contact.emoji}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-2 text-card-foreground text-lg">{contact.type}</h4>
                      <a 
                        href={contact.link}
                        className="text-purple-600 hover:text-pink-500 transition-colors block mb-1 font-medium text-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {contact.value}
                      </a>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Form submission info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50/80 to-pink-50/80 border border-purple-200/50 rounded-2xl backdrop-blur-sm">
              <p className="text-purple-800 font-medium">
                <strong className="flex items-center space-x-2 mb-2">
                  <span>📧</span>
                  <span>Where do messages go?</span>
                </strong>
                Messages sent through the contact form will open your email client and be sent directly to: 
                <span className="font-bold text-purple-600"> rahul08supermacy@gmail.com</span>
                <br />
                I typically respond within 24-48 hours! ⚡
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-card-foreground flex items-center space-x-2">
              <span>Send a Message</span>
              <span className="text-2xl">💌</span>
            </h3>
            <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border/50 card-hover space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-3 text-card-foreground flex items-center space-x-2">
                  <span>👤</span>
                  <span>Your Name</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-border/50 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 bg-background/50 backdrop-blur-sm font-medium"
                  placeholder="What should I call you? ✨"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-3 text-card-foreground flex items-center space-x-2">
                  <span>📧</span>
                  <span>Your Email</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 border-2 border-border/50 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 bg-background/50 backdrop-blur-sm font-medium"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-3 text-card-foreground flex items-center space-x-2">
                  <span>💭</span>
                  <span>Your Message</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-6 py-4 border-2 border-border/50 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-400 transition-all duration-300 bg-background/50 backdrop-blur-sm font-medium resize-none"
                  placeholder="Spill the tea... what's on your mind? ☕✨"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-white rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-400/50 disabled:opacity-50 disabled:cursor-not-allowed font-bold text-lg flex items-center justify-center space-x-2 group"
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                  {isSubmitting ? '⏳' : '🚀'}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

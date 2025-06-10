
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

    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      console.log('Form submitted:', formData);
      
      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your message. I'll get back to you soon at your provided email address.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      type: "Email",
      value: "rahul1@gmail.com",
      link: "mailto:rahul1@gmail.com",
      description: "Messages will be sent to this email"
    },
    {
      type: "GitHub",
      value: "rahulll.github",
      link: "https://github.com/rahulll",
      description: "Check out my code repositories"
    },
    {
      type: "LinkedIn",
      value: "rahullll",
      link: "https://linkedin.com/in/rahullll",
      description: "Let's connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-background to-amber-50/20 relative">
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
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-card-foreground">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, collaborating on projects, 
              or simply connecting with fellow developers. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 hover:scale-105 card-hover">
                  <h4 className="font-semibold mb-2 text-card-foreground">{contact.type}</h4>
                  <a 
                    href={contact.link}
                    className="text-amber-600 hover:text-amber-700 transition-colors block mb-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.value}
                  </a>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </div>
              ))}
            </div>

            {/* Form submission info */}
            <div className="mt-8 p-4 bg-amber-50/50 border border-amber-200 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>📧 Where do messages go?</strong><br />
                Messages sent through the contact form will be delivered directly to my email: rahul1@gmail.com
                I typically respond within 24-48 hours.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-card-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-xl shadow-sm border card-hover">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your Name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-stone-600 text-white rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setShowPopup(true);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className="Header-Contact-Form">Send Me A Message</div>
      <div className="Contact-Form caret-pink-600">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 border border-black rounded-[8px] mb-3 p-1 w-[270px] text-[16px]
                          sm:w-[550px] sm:text-[18px]"
          >
            <label htmlFor="name">Your name *: </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-sizing-fixed w-64 sm:w-[540px] p-1"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col gap-2 border border-black rounded-[8px] mb-3 p-1 w-[270px] text-[16px] 
                          sm:w-[550px] sm:text-[18px]"
          > 
            <label htmlFor="email">Your email *: </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-sizing-fixed w-64 sm:w-[540px] p-1"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex flex-col gap-2 border border-black rounded-[8px] mb-0 p-1 w-[270px] text-[16px] 
                          sm:w-[550px] sm:text-[18px]"
          > 
            <label htmlFor="message">Your message *: </label>
            <textarea
              id="message"
              name="message"
              className="field-sizing-fixed w-64 sm:w-[540px] p-1"
              rows={3}
              placeholder="Enter your needs"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          
          <div className="Send-Email-Button">
            <button type="submit" className="cursor-pointer">Send Message</button>
          </div>
        </form>
        
        <div className="relative ml-36 bottom-6 pl-1 animate-bounce cursor-wait"> 
          <img src="send-mail.webp" alt="send message logo" />
        </div>
      </div>
      
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4">
            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
            <p className="mb-6">Please get in touch with me directly at my email address. I'll get back to you soon.</p>
            <button 
              onClick={closePopup}
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
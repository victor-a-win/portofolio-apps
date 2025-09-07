'use client'

import { useState } from 'react';

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation could be added here
    setShowPopup(true);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
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
              className="field-sizing-fixed w-64 sm:w-[540px] p-1 outline-none"
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
              className="field-sizing-fixed w-64 sm:w-[540px] p-1 outline-none"
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
              className="field-sizing-fixed w-64 sm:w-[540px] p-1 outline-none"
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4 relative">
            <button 
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4 text-gray-900">Thank You!</h2>
            <p className="mb-6 text-gray-700">
              Please contact me directly at my email address or my WA. 
              I'll get back to you soon.
            </p>
            <div className="flex justify-between items-center">
              <button 
                onClick={closePopup}
                className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition-colors"
              >
                Close
              </button>
              <a 
                href="https://wa.me/6285711423395?text=Hi%2C%0D%0AI+would+like+to+know+more+about+your+portfolio.%0D%0APlease+contact+me%21"
                className="Chat-on-WhatsApp flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Chat on WhatsApp</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
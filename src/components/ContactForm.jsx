// // src/components/ContactForm.js
// import React from 'react';

// const ContactForm = () => {
//   return (
//     <section className="bg-blue-100 py-16">
//       <div className="container mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-8">Contact Us and Get Your Personalized Offer</h2>
//         <div className="bg-white p-8 rounded-lg shadow-lg inline-block">
//           <form className="space-y-4">
//             <div>
//               <label htmlFor="email" className="block text-lg">Email</label>
//               <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg" required />
//             </div>
//             <div>
//               <label htmlFor="request" className="block text-lg">Your Request</label>
//               <textarea id="request" className="w-full px-4 py-2 border rounded-lg" rows="4" required></textarea>
//             </div>
//             <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg">Contact us</button>
//           </form>
//         </div>
//         <div className="mt-8">
//           <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-6 py-3 rounded-lg inline-block">
//             Telegram
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
// src/components/ContactForm.js
// src/components/ContactForm.js
import React from 'react';
import arrow from '../assets/arrow.svg';
import telegram_logo from '../assets/telegram_logo.svg';

const ContactForm = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Contact Us and Get Your{' '}
          <span className="text-blue-600">Personalized Offer</span>
        </h2>
        <div className="bg-blue-600 p-8 rounded-lg grid grid-cols-12 gap-4">
          {/* Left Section - Title */}
          <div className="col-start-1 col-end-5">
            <h3 className="text-white text-2xl font-bold">
              Ready to get started?
            </h3>
          </div>

          {/* Left Section - Paragraph */}
          <div className="col-start-1 col-end-5">
            <p className="text-white mt-4">
              Inquire for additional info from LOvd and get your personalized
              solution.
            </p>
          </div>

          {/* Arrow */}
          <div className="col-start-5 col-end-6 flex justify-center items-center">
            <span className="text-white text-4xl">
              <img src={arrow} alt="arrow" />
            </span>
          </div>

          {/* Right Section - Email and Request */}
          <div className="col-start-8 col-end-11 flex flex-col justify-center space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your request"
                className="w-full px-4 py-2 rounded-lg"
                rows="4"
                required
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="col-start-8 col-end-10 flex flex-col space-y-4 items-start ">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg"
            >
              Contact us
            </button>
            <a
              href="https://t.me/your_telegram"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center"
            >
              Telegram
              <img src={telegram_logo} alt="telegramlogo" className="h-6 " />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

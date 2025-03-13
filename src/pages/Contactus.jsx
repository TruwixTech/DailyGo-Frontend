import React, { useEffect } from 'react'
// import Bgimage from '../assets/Bgimage4.png'
import ring from '../assets/ring.png'
import Navbar from '../Component/Navbar'
import { useState } from "react";
import mailicon from "../assets/mailicon.svg";
import phone from "../assets/phone.svg";
import image from '../assets/contactimage.png'
import Footer from '../Component/Footer'
import starw from '../assets/starwhite.png'
import righth from '../assets/line.svg'
import rightv from '../assets/left2.png'
import shadow from '../assets/shadow.png'

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manual Validation
  const validateForm = () => {
    const { name, email, phone, subject, message } = formData;

    // Name validation
    if (!name.trim()) {
      toast.error("Name is required.");
      return false;
    } else if (name.length < 3) {
      toast.error("Name must be at least 3 characters.");
      return false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.trim()) {
      toast.error("Email is required.");
      return false;
    } else if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    // Phone validation (10-digit number)
    const phonePattern = /^[0-9]{10}$/;
    if (!phone.trim()) {
      toast.error("Phone number is required.");
      return false;
    } else if (!phonePattern.test(phone)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    // Subject validation
    if (!subject.trim()) {
      toast.error("Subject is required.");
      return false;
    } else if (subject.length < 3) {
      toast.error("Subject must be at least 3 characters.");
      return false;
    }

    // Message validation
    if (!message.trim()) {
      toast.error("Message is required.");
      return false;
    } else if (message.length < 10) {
      toast.error("Message must be at least 10 characters.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.dismiss();

    // Validate form before submitting
    if (!validateForm()) return;

    setLoading(true);

    try {
      await axios.post("", formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
      console.error("Error sending message:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className='w-full h-auto bg-white p-4 md:p-8 overflow-x-hidden'>
        <div className='w-full md:h-[300px] h-auto bg-[#004439] rounded-3xl  relative pb-4 py-2'>
          <Navbar />
          
          <div className='h-[0.5px] w-[90%] mx-auto bg-[#4a7069] mt-4 ' />
          <h1 className='text-center font-semibold text-[30px] md:text-[60px] lg:text-7xl pt-7 text-white'>Contact us</h1>
          <div className='flex gap-2 items-center justify-center text-white pt-4'>
            <span >Home</span><span>-</span><span>Contact us</span>
          </div>
          <img
            src={ring}
            className={`absolute w-full h-full top-0 transition-transform duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          />
          <img
            src={shadow}
            className={`absolute top-0 left-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <img
            src={starw}
            className={` absolute top-32 right-5 sm:right-24 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          />
          <img src={righth} className='hidden md:block absolute top-40 -right-25 ' />
          <img src={rightv} className='hidden md:block absolute top-40 right-27' />
        </div>
        {/* form */}
        <div className="grid md:grid-cols-2 gap-8 pt-10 md:px-10 px-2  py-10">
          {/* Left Section - Contact Details */}
          <div className="space-y-6 mt-8">
            <h3 className="text-6xl font-bold text-[#374836] leading-15">
              Contact us For <br /> Support
            </h3>

            <div>
              <h4 className="font-semibold text-2xl text-[#373f43] mb-4">Emails</h4>
              <p className="text-[#8c959f] flex gap-4 items-center">
                <span><img src={mailicon} alt="" /></span> dailygoindia@gmail.com
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-2xl text-[#373f43] mb-4">Reach out to us at</h4>
              <p className="text-[#8c959f] flex gap-4 items-center">
                <span><img src={phone} alt="" /></span> +91-9066384407
              </p>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Name */}
              <div>
                <label className="block text-lg font-bold mb-2 text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-[#F0EEEE] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-lg font-bold mb-2 text-gray-700">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-[#F0EEEE] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone */}
              <div>
                <label className="block text-lg font-bold mb-2 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-[#F0EEEE] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your Phone Number"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-lg font-bold mb-2 text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full py-4 px-4 bg-[#F0EEEE] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                  placeholder="Your subject"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-lg font-bold mb-2 text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full py-4 px-4 resize-none bg-[#F0EEEE] rounded-[25px] focus:outline-none focus:ring-2 focus:ring-green-600"
                placeholder="Write message"
                rows="5"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-[#01210f] p-3 px-10 rounded-2xl  text-white bg-[#366059]cursor-pointer disabled:bg-gray-400"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className='flex flex-col justify-center items-center py-10'>
          <img src={image} />
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Contactus

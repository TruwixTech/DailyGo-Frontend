import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import ring from "../assets/ring.png";
import shadow from '../assets/shadow.png';
import starw from '../assets/starwhite.png';
import righth from '../assets/line.svg';
import rightv from '../assets/left2.png';
import { toast } from "react-toastify";

const backend = import.meta.env.VITE_BACKEND

function RegistrationForm() {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company_name: "",
    designation: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    job_type: "",
  });

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.city || !formData.state || !formData.pincode) {
      toast.error("Please fill all required fields.");
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address.");
      return false;
    }

    // Validate phone (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    // Validate pincode (6 digits)
    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(formData.pincode)) {
      toast.error("Invalid pincode.");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post(`${backend}/lead/register`, formData);
      toast.success("Registration Successful!");

      // Reset form after success
      setFormData({
        name: "",
        company_name: "",
        designation: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
        job_type: "",
      });
    } catch (error) {
      console.error("Error Submitting Form:", error);
      toast.error(error.response?.data?.message || "Error submitting form.");
    }
  };


  return (
    <>
      <div className="w-full h-auto bg-white p-4 md:p-8 overflow-hidden">
        {/* Header Section */}
        <div className="w-full md:h-[300px] h-auto bg-[#004439] rounded-3xl relative pb-6 py-2">
          <Navbar />
          <div className="h-[0.5px] w-[90%] mx-auto bg-[#4a7069]" />
          <h1 className="text-center font-semibold text-[30px] md:text-[60px] lg:text-7xl pt-7 text-white">
            Register as Employer
          </h1>
          <div className="flex gap-2 items-center justify-center text-white pt-4">
            <span>Home</span> <span>-</span> <span>Register as Employer</span>
          </div>
          <img
            src={ring}
            className={`absolute w-full h-full top-0 transition-transform duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          />
          <img src={shadow} className="absolute top-0 left-0" />
          <img src={starw} className="absolute hidden md:block top-30 right-24" />
          <img src={righth} className="hidden md:block absolute top-40 -right-25" />
          <img src={rightv} className="hidden md:block absolute top-40 right-27" />
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="w-full py-7 mx-auto bg-white shadow-lg p-6 rounded-2xl mt-6 relative z-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name & Company Name */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Name <span className="text-red-500">**</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
                required
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Company Name</label>
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
              />
            </div>

            {/* Designation & Phone */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Designation</label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                placeholder="Your Designation"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">**</span></label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Phone Number"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
                required
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-gray-700">Address <span className="text-red-500">**</span></label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
              />
            </div>

            {/* Email & City */}
            <div>
              <label className="text-sm font-semibold text-gray-700">Email <span className="text-red-500">**</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">City <span className="text-red-500">**</span></label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Your City"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
              />
            </div>

            {/* State & Pincode */}
            <div>
              <label className="text-sm font-semibold text-gray-700">State <span className="text-red-500">**</span></label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Your State"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700">Pincode <span className="text-red-500">**</span></label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Your Pincode"
                className="p-3 w-full border border-gray-300 rounded-lg bg-gray-100 mt-2"
              />
            </div>
          </div>

          {/* Job Type */}
          <div className="mt-4">
            <label className="text-sm font-semibold text-gray-700">Type of Job <span className="text-red-500">**</span></label>
            <textarea
              name="job_type"
              value={formData.job_type}
              onChange={handleChange}
              rows="3"
              placeholder="Describe the type of job"
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 resize-none mt-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-green-900 text-white rounded-lg text-lg hover:bg-green-700 transition-all"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default RegistrationForm;

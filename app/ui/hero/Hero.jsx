"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "animate.css";
import { Typewriter } from "react-simple-typewriter";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const QuoteRequestModal = ({ 
    isOpen, 
    onClose, 
    services = [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "Digital Marketing",
      "Cloud Solutions"
    ], // Default services - can be customized via props
    onSubmit 
  }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      clientType: 'individual',
      companyName: '',
      selectedService: '',
      description: '',
      timestamp: new Date().toISOString()
    });
  
    const [errors, setErrors] = useState({});
  
    const validateForm = () => {
      const newErrors = {};
      
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      }
      if (formData.clientType === 'company' && !formData.companyName.trim()) {
        newErrors.companyName = 'Company name is required';
      }
      if (!formData.selectedService) newErrors.selectedService = 'Please select a service';
      if (!formData.description.trim()) newErrors.description = 'Description is required';
      
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      if (validateForm()) {
        // Update timestamp before submission
        const submissionData = {
          ...formData,
          timestamp: new Date().toISOString()
        };
        onSubmit(submissionData);
        onClose();
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };
  
    if (!isOpen) return null;

    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={onClose}
        role="dialog"
        tabIndex="-1"
      >
        <div 
          className="relative w-full max-w-lg mx-auto bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700 bg-white dark:bg-black">
            <h3 className="font-bold text-gray-800 dark:text-white">
              Request a Quote
            </h3>
            <button 
              type="button" 
              className="size-8 inline-flex justify-center items-center rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-600"
              onClick={onClose}
              aria-label="Close"
            >
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="p-4 space-y-6 flex flex-col h-[70vh] overflow-y-auto">
            <div className="flex-grow space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Personal Information</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-3 py-2`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Contact Information</h4>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-1 block w-full rounded-md border ${errors.phone ? 'border-red-500' : 'border-gray-300'} px-3 py-2`}
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
                </div>
              </div>

              {/* Client Type */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Client Type</h4>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="clientType"
                      value="individual"
                      checked={formData.clientType === 'individual'}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Individual</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="clientType"
                      value="company"
                      checked={formData.clientType === 'company'}
                      onChange={handleChange}
                      className="form-radio"
                    />
                    <span className="ml-2">Company</span>
                  </label>
                </div>
                
                {formData.clientType === 'company' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Company Name *</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} px-3 py-2`}
                    />
                    {errors.companyName && <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>}
                  </div>
                )}
              </div>

              {/* Service Selection */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Service Required *</h4>
                <select
                  name="selectedService"
                  value={formData.selectedService}
                  onChange={handleChange}
                  className={`block w-full rounded-md border ${errors.selectedService ? 'border-red-500' : 'border-gray-300'} px-3 py-2`}
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
                {errors.selectedService && <p className="mt-1 text-sm text-red-500">{errors.selectedService}</p>}
              </div>

              {/* Project Description */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-white">Project Description *</h4>
                <div>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    maxLength={500}
                    rows={4}
                    className={`mt-1 block w-full rounded-md border ${errors.description ? 'border-red-500' : 'border-gray-300'} px-3 py-2`}
                    placeholder="Please describe your project requirements (max 500 words)"
                  />
                  {errors.description && <p className="mt-1 text-sm text-red-500">{errors.description}</p>}
                  <p className="mt-1 text-sm text-gray-500">{formData.description.length}/500 characters</p>
                </div>
              </div>
              <div className="pb-20"></div>
            </div>

            {/* Form Actions */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center gap-x-2 py-4 border-t dark:border-neutral-700 bg-white dark:bg-black">
              <button 
                type="button" 
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-neutral-800 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700"
              >
                Cancel
              </button>
              <button 
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-700 border border-transparent rounded-md hover:bg-blue-700"
              >
                Submit Request
              </button>
          </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center py-12 w-full scroll-mt-20 scroll-smooth min-h-[90vh] "
    >
      <div className="container flex flex-col md:flex-row justify-between items-center px-4 xl:max-w-6xl mx-auto ">
        {/* Left Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center animate__animated animate__fadeInRight animate__delay-1s z-10 ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center md:text-left">
            Welcome to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              Kodetrix
            </span>
          </h1>
          <h2 className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold mt-4 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700 whitespace-nowrap">
            We empower industries with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700">
              <Typewriter
                words={["AI", "Data Analytics", "IoT solutions"]}
                loop={false}
                cursor
                cursorStyle="||"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base text-center md:text-left">
            At Kodetrix, we specialize in delivering innovative technology
            solutions powered by data analytics, artificial intelligence,
            machine learning, and IoT. Our focus is on driving real-world impact
            for industries like Finance, Agriculture, and Health. Whether you are
            an individual client or a corporate entity, we are here to help you
            thrive in the digital age.
          </p>
          <div className="mt-6 md:mt-8 flex justify-center md:justify-start">
            <Button
              variant="outline"
              className="mt-8 w-1/2 h-12 group relative cursor-pointer overflow-hidden rounded-md border-2 border-primary px-5 py-3 font-mono font-semibold"
              onClick={openModal}
            >
              <span className="ease absolute top-1/2 h-0 w-64 origin-center -translate-x-20 rotate-45 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-300 group-hover:h-64 group-hover:-translate-y-32"></span>
              <span className="ease relative text-primary transition duration-300 group-hover:text-background">
                Request a Quote
              </span>
            </Button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="mt-4 md:mt-auto flex w-full justify-center items-center md:items-start md:w-1/2 animate__animated animate__fadeInDown animate__delay-2s">
          <Image
            src="/Bg.png"
            alt="hero-image"
            width={530}
            height={530}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      <QuoteRequestModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSubmit={(data) => console.log(data)} 
      />
    </section>
  );
}
"use client";

import Footer from '@/components/Footer';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    // Handle form submission here
  };

  const inputClasses = "text-black w-full p-3 rounded-lg bg-bgcolour border border-gray-300 focus:outline-none focus:border-textcolour placeholder-black";
  const labelClasses = "block text-sm font-semibold mb-2";

  return (
    <div className="bg-bgcolour pt-8">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-textcolour font-heading text-sm md:text-base">Contact Us</span>
          <h1 className="text-3xl md:text-4xl font-body leading-tight mt-3">
            Get in Touch With Us
          </h1>
          <p className="text-gray-600 mt-4">
            We&apos;d love to hear from you. Please fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-cardcolour rounded-3xl shadow-sm p-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form Section */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className={labelClasses}>Name</label>
                <input
                  {...register("name", { required: true })}
                  className={inputClasses}
                  placeholder="Your full name"
                />
                {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
              </div>

              <div>
                <label className={labelClasses}>Email</label>
                <input
                  {...register("email", { 
                    required: true,
                    pattern: /^\S+@\S+$/i
                  })}
                  type="email"
                  className={inputClasses}
                  placeholder="your@email.com"
                />
                {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
              </div>

              <div>
                <label className={labelClasses}>Phone Number</label>
                <input
                  {...register("phone", { required: true })}
                  type="tel"
                  className={inputClasses}
                  placeholder="Your phone number"
                />
                {errors.phone && <span className="text-red-500 text-sm">Phone number is required</span>}
              </div>

              <div>
                <label className={labelClasses}>Message</label>
                <textarea
                  {...register("message", { required: true })}
                  className={`${inputClasses} h-32`}
                  placeholder="How can we help you?"
                />
                {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-cardcolour text-black rounded-full hover:bg-accentcolour transition-colors border border-textcolour"
              >
                Send Message
              </button>
            </form>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-body font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Phone:</span>
                    <a href="tel:0478355242" className="hover:text-gray-600">0478 355 242</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Email:</span>
                    <a href="mailto:info@lumehealth.com.au" className="hover:text-gray-600">info@lumehealth.com.au</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="font-semibold">Address:</span>
                    <span>305 Warrigal Road, Burwood 3125</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-body font-semibold mb-4">Operating Hours</h3>
                <div className="space-y-2">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Closed On Weekends</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

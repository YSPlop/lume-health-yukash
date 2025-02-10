"use client";

import Footer from '@/components/Footer';
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { useRef, useState, useEffect } from 'react';
import styles from '@/styles/contact.module.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// New type definitions and components
interface FormField {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  placeholder: string;
  validation?: object;
}


const FormInput = ({ field, register, errors }: {
  field: FormField;
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}) => (
  <div className={styles.inputContainer}>
    {field.type === 'textarea' ? (
      <div className="relative">
        <textarea
          id={field.name}
          {...register(field.name, field.validation)}
          className={styles.textarea}
          placeholder=" "
        />
        <label 
          htmlFor={field.name} 
          className={`${styles.textareaLabel} ${errors[field.name] ? 'text-red-500' : ''}`}
        >
          {field.label}
        </label>
      </div>
    ) : (
      <div className="relative">
        <input
          id={field.name}
          {...register(field.name, field.validation)}
          type={field.type || 'text'}
          className={styles.input}
          placeholder=" "
        />
        <label 
          htmlFor={field.name} 
          className={`${styles.label} ${errors[field.name] ? 'text-red-500' : ''}`}
        >
          {field.label}
        </label>
      </div>
    )}
    {errors[field.name] && (
      <span className={styles.errorMessage} role="alert">
        {errors[field.name]?.message || `${field.label} is required`}
      </span>
    )}
  </div>
);

const ContactInfo = ({ title, items }: { 
  title: string; 
  items: { label: string; value: string; href?: string; }[] 
}) => (
  <div>
    <h3 className="text-xl font-heading font-semibold mb-4">{title}</h3>
    <div className="space-y-4">
      {items.map((item, index) => (
        <p key={index} className="flex items-center gap-3">
          <span className="font-semibold">{item.label}:</span>
          {item.href ? (
            <a href={item.href} className="hover:text-gray-600">{item.value}</a>
          ) : (
            <span>{item.value}</span>
          )}
        </p>
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [currentBgColor, setCurrentBgColor] = useState<string>('bg-[#FFE7DF]');

  const sectionBackgrounds: { [key: number]: string } = {
    0: 'bg-[#FFCBA9]',    // Form section
    1: 'bg-[#FFB9A3]',    // Footer
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sectionRefs.current.findIndex(ref => ref === entry.target);
            setCurrentBgColor(sectionBackgrounds[sectionIndex]);
          }
        });
      },
      {
        threshold: 1,
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    // Handle form submission here
  };

  const formFields: FormField[] = [
    {
      label: "Name",
      name: "name",
      placeholder: "Your full name",
      validation: { required: "Name is required" }
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      validation: { 
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Please enter a valid email address"
        }
      }
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "Your phone number",
      validation: { required: true }
    },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      placeholder: "How can we help you?",
      validation: { required: true }
    }
  ];

  const contactInfo = [
    { label: "Phone", value: "0478 355 242", href: "tel:0478355242" },
    { label: "Email", value: "info@lumehealth.com.au", href: "mailto:info@lumehealth.com.au" },
    { label: "Address", value: "305 Warrigal Road, Burwood 3125" }
  ];

  const operatingHours = [
    { label: "Hours", value: "Monday - Friday: 8:00 AM - 6:00 PM" },
    { label: "Weekend", value: "Closed On Weekends" }
  ];

  return (
    <main className={`w-full min-h-screen transition-colors duration-700 ${currentBgColor}`}>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[0] = el;
        }}
      >
        <div className="max-w-4xl mx-auto p-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-heading leading-tight mt-3">
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
                {formFields.map((field) => (
                  <FormInput
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                  />
                ))}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-cardcolour text-black rounded-full hover:bg-accentcolour transition-colors border border-textcolour"
                >
                  Send Message
                </button>
              </form>

              {/* Contact Information */}
              <div className="space-y-8">
                <ContactInfo title="Contact Information" items={contactInfo} />
                <ContactInfo title="Operating Hours" items={operatingHours} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[1] = el;
        }}
      >
        <Footer />
      </section>
    </main>
  );
};

export default ContactPage;

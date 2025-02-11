'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import WhyChooseUs from '@/components/WhyChooseUs';
import { ServiceContent } from './types';

type Props = {
  content: ServiceContent;
};

const ServicePageClient = ({ content }: Props) => {
  return (
    <div className="bg-[#FDCFB4] pt-6">
      <section className="py-8 px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-heading leading-tight mt-3 text-center">
            {content.title}
          </h1>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-2xl font-body font-semibold mb-4 text-center">{content.intro}</h2>
          <div className="p-6 rounded-3xl bg-cardcolour">
            <p className="leading-relaxed text-center text-black">{content.description}</p>
          </div>
        </div>

        {/* Main Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full aspect-[21/9] relative mb-16 rounded-2xl overflow-hidden"
        >
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-body font-semibold mb-8 text-center">How We Can Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-6 rounded-3xl bg-cardcolour"
              >
                <h3 className="text-xl font-body text-center font-semibold mb-4">{benefit.title}</h3>
                <p className="text-black text-sm">{benefit.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conditions Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-body font-semibold mb-8 text-center">Conditions We Treat</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {content.conditions.map((condition, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-xl bg-cardcolour text-center"
              >
                <span className="text-sm font-body">{condition}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <WhyChooseUs /> */}

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-body font-semibold mb-4">Get Started Today</h2>
          <p className="text-black mb-8">Contact us to speak directly with our physiotherapist about how we can help.</p>
          <Link 
            href="/contact"
            className="px-8 py-3 bg-cardcolour text-black rounded-full hover:bg-accentcolour hover:text-black transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicePageClient; 
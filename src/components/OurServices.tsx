"use client"
import Image from "next/image"

const OurServices: React.FC = () => {

    // keep the same names pelase, for components and headings!
    const physioDescription = "We believe quality physiotherapy should be accessible to everyone. That's why we offer home-based, mobile physiotherapy across Melbourne, bringing expert care and equipment to you. Whether you have mobility challenges or prefer treatment at home, we make it easy to get moving and feeling your best.";
    const otDescription = "We provide mobile paediatric occupational therapy across Melbourne, supporting children's development in the comfort of their home. With a personalised approach, we help improve motor skills, sensory processing, and self-care in a fun and engaging way, allowing children to build skills at their own pace.";
    const services = [
        {
            title: "Mobile Physiotherapy",
            description: physioDescription,
            imageSrc: "/images/physio.png",
            imageAlt: "Physiotherapy",
            imagePosition: "translate-y-8 md:translate-x-0 translate-x-4"
        },
        {
            title: "Mobile Occupational Therapy", 
            description: otDescription,
            imageSrc: "/images/ot.png",
            imageAlt: "Occupational Therapy",
            imagePosition: "translate-y-16 md:translate-x-8 translate-x-4"
        }
    ];

    const ServiceCard: React.FC<typeof services[0]> = ({ title, description, imageSrc, imageAlt, imagePosition }) => (
        <div className="relative rounded-3xl bg-cardcolour hover:bg-[#FFB9A3] duration-300 ease-in-out cursor-pointer group border border-gray-400">
            <div className="h-full flex flex-col">
                <div className="w-full aspect-[4/3] relative rounded-t-2xl overflow-hidden">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className={`object-cover ${imagePosition}`}
                    />
                </div>
                <div className="p-4 group-hover:opacity-0 transition-opacity duration-200">
                    <h3 className="text-xl md:text-[2rem] font-semibold text-center md:-translate-y-12">{title}</h3>
                </div>
                {/* Hover view */}
                <div className="absolute inset-0 bg-cardcolour rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-4 md:p-6 flex flex-col justify-center items-center">
                    <h3 className="text-xl font-heading font-semibold text-center mb-4">{title}</h3>
                    <p className="text-black text-base lg:text-lg text-center">{description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-8 md:py-16 px-4 md:px-4 max-w-7xl md:max-w-[70vw] mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-[3.5rem] font-section leading-tight mt-3">Our Services</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[100px]">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    )
}

export default OurServices
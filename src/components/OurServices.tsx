"use client"
import Image from "next/image"

const OurServices: React.FC = () => {

    // keep the same names pelase, for components and headings!
    const physioDescription = "We strive to get you moving and feeling the way you want.  We believe that quality physiotherapy should be accessible to everyone. That’s why we provide home-based, mobile physiotherapy services to our clients across Melbourne. We understand the difficulty of travelling to a clinic, especially for those with mobility issues, which is why we bring all the necessary equipment and tools to you.  Get all the benefits of physiotherapy in the comfort of your own home.";
    const otDescription = "We are passionate about supporting children’s development and well-being through occupational therapy. Understanding that every child’s needs are unique, we provide mobile paediatric occupational therapy services across Melbourne, bringing the therapy to your doorstep. Whether it's improving motor skills, sensory processing, or self-care skills, we create a supportive and engaging environment in your child’s own home. Our approach is designed to make therapy both fun and effective, allowing children to build skills at their own pace.";
    const services = [
        {
            title: "Mobile Physiotherapy",
            description: physioDescription,
            imageSrc: "/images/physio.png",
            imageAlt: "Physiotherapy"
        },
        {
            title: "Mobile Occupational Therapy", 
            description: otDescription,
            imageSrc: "/images/ot.png",
            imageAlt: "Occupational Therapy"
        }
    ];

    const ServiceCard: React.FC<typeof services[0]> = ({ title, description, imageSrc, imageAlt }) => (
        <div className="p-6 rounded-3xl bg-cardcolour border border-cardcolour hover:bg-bgcolour duration-300 ease-in-out">
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-body font-semibold mb-2 mb-6">{title}</h3>
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <div className="relative w-[150%] h-full">
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            className="object-cover -translate-x-10"
                        />
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-600 text-base">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
        
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-body leading-tight mt-3">Our Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 md:gap-[100px] gap-[50px] mx-10">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    )
}

export default OurServices
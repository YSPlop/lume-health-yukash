"use client"
import Image from "next/image"

const OurServices: React.FC = () => {
    const physioDescription = "We make quality physiotherapy accessible to everyone by offering home-based mobile services across Melbourne. We Understand the challenges of clinic visits, especially for those with mobility issues, we bring all the equipment needed to provide effective care in the comfort of your home.";
    const otDescription = "We provide mobile occupational therapy services across Melbourne. Our therapists are trained to provide effective care in the comfort of your home.";

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
        <div className="p-6 rounded-3xl bg-cardcolour hover:bg-bgcolour hover:border hover:border-cardcolour duration-300 ease-in-out">
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
                <span className="text-textcolour font-heading text-sm md:text-base ">Our Services</span>
                <h2 className="text-3xl md:text-4xl font-body leading-tight mt-3">What We Offer To Our Clients</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-[100px] mx-10">
                {services.map((service, index) => (
                    <ServiceCard key={index} {...service} />
                ))}
            </div>
        </section>
    )
}

export default OurServices
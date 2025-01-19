"use client"
import Image from "next/image"

const OurServices: React.FC = () => {
    const physioDescription = "We make quality physiotherapy accessible to everyone by offering home-based mobile services across Melbourne. We Understand the challenges of clinic visits, especially for those with mobility issues, we bring all the equipment needed to provide effective care in the comfort of your home."
    return (
      <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
        
        <div className="text-center mb-8">
          <span className="text-purple-600 font-heading text-sm md:text-base ">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-body leading-tight mt-3">What We Offer To Our Clients</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-[100px] mx-10">
          {/* Mobile Physiotherapy Card */}
          <div className="bg-bgcolour p-6 rounded-3xl hover:bg-cardcolour duration-300 hover:-translate-y-5 ease-in-out">
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-body font-semibold mb-2 mb-6">Mobile Physiotherapy</h3>
                <div className = "w-32 h-32 rounded-full overflow-hidden">
                    <div className = "relative w-[150%] h-full">
                        <Image
                            src="/images/physio.png" 
                            alt="Physiotherapy" 
                            fill
                            className="object-cover -translate-x-10" 
                        />
                    </div>
                </div>
                <div className = "text-center mt-8 text-gray-600 text-base">
                    <p>
                        {physioDescription}
                    </p>
                </div>
            </div>
          </div>

          {/* Mobile Occupational Therapy Card */}
          <div className="bg-bgcolour p-6 rounded-3xl  hover:bg-cardcolour duration-300 hover:-translate-y-5 ease-in-out">
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-body font-semibold mb-2 mb-6">Mobile Occupational Therapy</h3>
                <div className="w-32 h-32 rounded-full overflow-hidden">
                    <div className = "relative w-[150%] h-full">
                        <Image
                            src="/images/ot.png" 
                            alt="Physiotherapy" 
                            fill
                            className="object-cover -translate-x-10" 
                        />
                    </div>
                </div>
            </div>
            <div className = "text-center mt-8 text-gray-600 text-base">
                <p>
                    {physioDescription}
                </p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default OurServices
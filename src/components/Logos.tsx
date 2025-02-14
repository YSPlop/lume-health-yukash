import Image from "next/image"

const Logos: React.FC = () => {
    const logos = [
        {
            src: "/logos/ahpra-logo.png",
            alt: "AHPR"
        },
        {
            src: "/logos/occupational-therapy-logo.png",
            alt: "OT"
        },
        {
            src: "/logos/physiotherapy-logo.png",
            alt: "PT"
        },
    ]
    return (
        <section>
            <div className="border-t border-gray-400 my-4 "/>
                <div className = "flex items-center flex-col md:py-10 py-6">
                    <div className = "lg:w-[1100px] md:w-[800px] w-full items-center">
                        <div className = "grid md:grid-cols-3 md:gap-20 grid-cols-1 gap-1">
                            {logos.map((logo) => {
                                return (
                                    <div key={logo.src} className="flex items-center justify-center">
                                        <div className="md:w-[250px] w-[150px] relative aspect-square">
                                            <Image
                                                src={logo.src}
                                                alt={logo.alt}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Logos
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
            <div className="border-t border-gray-300 my-4 "/>
                <div className = "flex items-center flex-col md:py-10 py-6">
                    <div className = "lg:w-[1100px] md:w-[800px] w-full items-center">
                        <div className = "grid md:grid-cols-3 md:gap-5 grid-cols-2 gap-1">
                            {logos.map((logo) => {
                                return (
                                    <div key={logo.src} className = "flex items-center justify-center">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            <div className="border-t border-gray-300 my-4"/>
        </section>
    )
}

export default Logos
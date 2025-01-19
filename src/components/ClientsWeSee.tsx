import Image from "next/image";

const ClientsWeSee: React.FC = () => {
    
    return(
        <section className = "py-8 px-4 mx-auto">
            <div className = "bg-cardcolour max-w-7xl mx-auto rounded-[2.5rem] px-20 py-11">
                <div className = "text-left">
                    <span className = "text-purple-600 font-heading text-sm md:text-base">Clients We See</span>
                    <h2 className = "text-3xl md:text-4xl font-body leading-tight mt-3">Supporting A Diverse Range of Ages and Disabilities</h2>
                </div>
                <div className = "grid grid-rows-2 gap-6">
                    <div className = "grid grid-cols-3 gap-12">
                        <div className="flex flex-col items-center p-6 bg-bgcolour rounded-2xl">
                            <div className="w-24 h-24 relative mb-4">
                                <Image
                                    src="/images/elderly.png"
                                    alt="Elderly care icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-body font-semibold text-center">Elderly Care</h3>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-bgcolour rounded-2xl">
                            <div className="w-24 h-24 relative mb-4">
                                <Image
                                    src="/images/disability.png"
                                    alt="Disability support icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-body font-semibold text-center">Disability Support</h3>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-bgcolour rounded-2xl">
                            <div className="w-24 h-24 relative mb-4">
                                <Image
                                    src="/images/pediatric.png"
                                    alt="Pediatric care icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-body font-semibold text-center">Pediatric Care</h3>
                        </div>
                    </div>
                    <div className = "grid grid-cols-3 gap-12">
                        <div className="flex flex-col items-center p-6 bg-bgcolour rounded-2xl">
                            <div className="w-24 h-24 relative mb-4">
                                <Image
                                    src="/images/elderly.png"
                                    alt="Elderly care icon"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ClientsWeSee;
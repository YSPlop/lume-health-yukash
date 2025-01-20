import Image from "next/image"

const Footer: React.FC = () => {
    return (
        <footer className="text-gray-500 w-full">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 md:px-8 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-center py-8 md:py-12 gap-8">
                    {/* Logo */}
                    <div className="w-full md:w-auto flex justify-center md:pr-10">
                        <Image 
                            src="/images/logo.png"
                            alt="Logo"
                            width={150}
                            height={150}
                            className="w-32 md:w-40"
                        />
                    </div>

                    {/* Info Grid */}
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-x-24">
                        {/* Contact */}
                        <div className="grid grid-cols-[1fr_2fr] gap-y-2">
                            <span>Call Us:</span>
                            <a className="underline underline-offset-4 hover:text-gray-700" href="tel:(04)78355242">0478 355 242</a>
                            <span>Email Us:</span>
                            <a className="underline underline-offset-4 hover:text-gray-700 break-all" href="mailto:info@lumehealth.com.au">info@lumehealth.com.au</a>
                        </div>

                        {/* Location */}
                        <div className="grid grid-cols-[1fr_2fr]">
                            <span>Location:</span>
                            <a className="hover:text-gray-700" href="">305 Warrigal Road, Burwood 3125</a>
                        </div>

                        {/* Operating Hours */}
                        <div className="grid grid-cols-[1fr_2fr]">
                            <span>Open:</span>
                            <div>
                                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                                <p>Closed On Weekends</p>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="grid grid-cols-[1fr_2fr]">
                            <span>Socials:</span>
                            <div className="grid grid-cols-2 gap-2">
                                <a className="underline underline-offset-4 hover:text-gray-700" href="https://www.facebook.com/search/people/?q=growing%20seeds%20therapy">Facebook</a>
                                <a className="underline underline-offset-4 hover:text-gray-700" href="https://www.instagram.com/growingseeds/">Instagram</a>
                                <a className="underline underline-offset-4 hover:text-gray-700" href="https://www.linkedin.com/company/growing-seeds-therapy/">LinkedIn</a>
                                <a className="underline underline-offset-4 hover:text-gray-700" href="https://www.youtube.com/channel/UC8888888888888888888">Youtube</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 mx-4 md:mx-10"/>
            <div className="container mx-auto px-4 md:px-10">
                <div className="flex flex-col sm:flex-row justify-between items-center py-4 text-sm gap-4">
                    <div>
                        <a className="underline underline-offset-4 hover:text-gray-700" href="/privacy-policy">Privacy Policy</a>
                    </div>
                    <div>
                        Designed by John Doe
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
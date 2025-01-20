import Image from "next/image"

const Footer: React.FC = () => {
    return (
        <footer className = "text-gray-500">
            {/* Main Footer Content */ }
            <div className = "w-full flex flex-row items-center justify-center py-12 px-12">
                <div id = "logo" className = "flex items-center justify-center pr-10">
                    <Image 
                        src = "/images/logo.png"
                        alt = "Logo"
                        width = {150}
                        height = {150}
                    />
                </div>
                <div className = "grid md:grid-rows-2 md:grid-cols-2 lg:gap-x-24 gap-x-12 gap-y-6 grid-cols-1">
                    {/* Contact */ }
                    <div id = "Contact" className = "grid lg:grid-cols-[1fr_3fr] grid-cols-[2fr_5fr] gap-y-2">
                        <span>Call Us:</span>
                        <a className = "underline underline-offset-4" href = "tel:(04)78355242">0478 355 242</a>
                        <span>Email Us:</span>
                        <a className = "underline underline-offset-4" href="mailto:info@lumehealth.com.au">info@lumehealth.com.au</a>
                    </div>
                    {/*Location*/}
                    <div id = "location" className = "grid lg:grid-cols-[1fr_3fr] grid-cols-[2fr_5fr]">
                        <span>Location:</span>
                        <a className = "k" href = "">305 Warrigal Road, Burwood 3125</a>
                    </div>
                    {/* Operating Hours */}
                    <div className = "grid lg:grid-cols-[1fr_3fr] grid-cols-[2fr_5fr]">
                        <span>Open:</span>
                        <p>Monday - Friday: 8:00 AM - 6:00 PM<br/>Closed On Weekends</p>
                    </div>
                    {/* Socials */}
                    <div className = "grid lg:grid-cols-[1fr_3fr] grid-cols-[2fr_5fr]">
                        <span>Socials:</span>
                        <div className = "grid grid-cols-2 grid-rows-2">
                            <a className = "underline underline-offset-4" href = "https://www.facebook.com/search/people/?q=growing%20seeds%20therapy">Facebook</a>
                            <a className = "underline underline-offset-4" href = "https://www.instagram.com/growingseeds/">Instagram</a>
                            <a className = "underline underline-offset-4" href = "https://www.linkedin.com/company/growing-seeds-therapy/">LinkedIn</a>
                            <a className = "underline underline-offset-4" href = "https://www.youtube.com/channel/UC8888888888888888888">Youtube</a>
                        </div>
                    </div>
                </div>
            </div> 
            <div className="border-t border-gray-300 my-4 mx-10"/> 
            <div className="flex justify-between items-center px-10 py-4 text-gray-500 text-sm">
                <div>
                    <a className = "underline underline-offset-4 hover:text-gray-700" href="/privacy-policy">Privacy Policy</a>
                </div>
                <div>
                    Designed by John Doe
                </div>
            </div>
        </footer>
        
    )
}

export default Footer;
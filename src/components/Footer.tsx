import Image from "next/image"
import Link from "next/link"
import { FaLinkedin, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa"
// Footer configuration for easy updates
const footerConfig = {
  quickLinks: {
    title: "Quick links",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Referral form", href: "/referral-form" },
      { label: "Contact", href: "/contact" }
    ]
  },
  clinic: {
    name: "Lume Health",
    phone: "(04) 7835 5242",
    address: "info@lumehealth.com.au",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/lume-healthau/",
    instagram: "https://www.instagram.com/lumehealthau/"
  }
}

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="border-t border-gray-400 my-4 "/>
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Logo and Name */}
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="/images/logo-black.png"
              alt="Logo"
              width={150}
              height={50}
              className="w-32"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{footerConfig.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerConfig.quickLinks.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinic Information */}
          <div>
            <h3 className="font-semibold mb-4">{footerConfig.clinic.name}</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-start gap-2 text-lg">
                <FaPhone size={20} style={{ transform: 'scaleX(-1)' }} />
                <a href={`tel:${footerConfig.clinic.phone}`} className="hover:underline">
                  {footerConfig.clinic.phone}
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2 text-lg hover:underline">
                <FaEnvelope size={20} />
                {footerConfig.clinic.address}
              </p>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-row items-center justify-center md:items-start md:pt-10  gap-4">
            <a 
              href={footerConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#0966c2] hover:text-black transition-colors duration-300"
            >
              <FaLinkedin size={58} />
            </a>
            <a 
              href={footerConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-red-500 hover:text-black transition-colors duration-300"
            >
              <FaInstagram size={58} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
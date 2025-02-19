
import Image from "next/image";
import { motion } from "framer-motion";


interface ClientCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ title, description, imageSrc }) => {
  return (
    <motion.div 
      className="relative group h-[300px] rounded-lg overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover transition-opacity duration-300 group-hover:opacity-20"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 transition-opacity duration-300 group-hover:opacity-0">
        <h3 className="text-white text-xl font-semibold">{title}</h3>
      </div>
      <div className="absolute inset-0 bg-cardcolour/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-auto">
        <div className="p-6 h-full flex flex-col justify-center overflow-auto">
          <h3 className="text-black text-xl font-semibold mb-3">{title}</h3>
          <p className="text-black text-sm max-h-32 overflow-auto">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ClientsWeSee: React.FC = () => {
  const physioClients = [
    {
      title: "NDIS Physiotherapy",
      description: "Living with a disability is difficult enough as it is. We aim to make access to healthcare as easy as possible so our physiotherapists come to you. We provide a range of services including report writing, hydrotherapy, pain management, strengthening, AT prescription and paediatric physiotherapy.",
      imageSrc: "/images/dog.jpg"
    },
    {
      title: "Homecare Package",
      description: "Getting older does not mean have to you slow down, stop moving and stop doing the things you love. At Lume Health, we will work with you to get you moving and feeling the way you want to.",
      imageSrc: "/images/dog.jpg"
    },
    {
      title: "Paediatric Physiotherapy",
      description: "Paediatric physiotherapy services that provides expert treatments that are designed to support children with a variety of physical challenges, ensuring therapy is both effective and engaging in a comfortable, familiar environment.",
      imageSrc: "/images/dog.jpg"
    }
  ];

  const occupationalClients = [
    {
      title: "NDIS Occupational Therapy",
      description: "Our occupational therapists specialize in helping individuals with disabilities achieve independence through personalised assessments, home modifications, and adaptive equipment recommendations.",
      imageSrc: "/images/dog.jpg"
    },
    {
      title: "Sensory Processing",
      description: "We provide comprehensive sensory integration therapy and strategies for children and adults who experience difficulties processing and responding to sensory information in their daily lives.",
      imageSrc: "/images/dog.jpg"
    },
    {
      title: "Aged Care Support",
      description: "Our OT services help seniors maintain independence and quality of life through home assessments, equipment prescription, and practical strategies for daily living activities.",
      imageSrc: "/images/dog.jpg"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Clients We See
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Physiotherapy Section - One top, two bottom */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              Physiotherapy
            </h3>
            <div className="grid grid-cols-1 gap-6 mb-6">
              {physioClients.slice(0, 1).map((client, index) => (
                <ClientCard key={index} {...client} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-6">
              {physioClients.slice(1, 3).map((client, index) => (
                <ClientCard key={index} {...client} />
              ))}
            </div>
          </div>

          {/* Occupational Therapy Section - Two top, one bottom */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6 text-center">
              Occupational Therapy
            </h3>
            <div className="grid grid-cols-2 gap-6 mb-6">
              {occupationalClients.slice(0, 2).map((client, index) => (
                <ClientCard key={index} {...client} />
              ))}
            </div>
            <div className="grid grid-cols-1 gap-6">
              {occupationalClients.slice(2, 3).map((client, index) => (
                <ClientCard key={index} {...client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsWeSee;
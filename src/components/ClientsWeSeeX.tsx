import Image from "next/image";
import "@/styles/ClientCard/styles.css";

interface ClientCardXProps {
  name: string;
  description: string;
  imageSrc: string;
}

const ClientCardX: React.FC<ClientCardXProps> = ({ name, description, imageSrc }) => {
  return (
    <div 
      className="card">
        <figure className="card__figure">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
        </figure>
        <div className="card__info">
            <h1>{name}</h1>
        </div>
        <div className = "card__hover">
            <span className = "relative">{description}</span>
        </div>
    </div>
  );
};

const ClientsWeSeeX: React.FC = () => {
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
          description: "Our occupational therapists specialize in helping individuals with disabilities achieve independence through personalized assessments, home modifications, and adaptive equipment recommendations.",
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
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
            <span className="text-textcolour font-heading text-sm md:text-base ">Clients We See</span>
            <h2 className="text-3xl md:text-4xl font-body leading-tight mt-3">We Offer Services To A Wide Range Of Clients</h2>
        </div>
        <div className = "w-full flex items-center justify-center lg:flex-col md:flex-row flex-col gap-[80px]">
            <div className = "w-full flex items-center justify-center flex-col">
                <header className = "text-2xl font-bold">Physiotherapy</header>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-4">
                {physioClients.map((client, index) => (
                    <div className = "flex justify-center items-center" key = {index}>
                        <ClientCardX
                        key={index}
                        name={client.title}
                        description={client.description}
                        imageSrc={client.imageSrc}
                        />
                    </div>
                ))}
                </div>
            </div>
            <div className = "w-full flex items-center justify-center flex-col">
                <header className = "text-2xl font-bold">Occupational Therapy</header>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 p-4">
                {occupationalClients.map((client, index) => (
                    <div className = "flex justify-center items-center" key = {index}>
                        <ClientCardX
                        key={index}
                        name={client.title}
                        description={client.description}
                        imageSrc={client.imageSrc}
                        />
                    </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default ClientsWeSeeX;
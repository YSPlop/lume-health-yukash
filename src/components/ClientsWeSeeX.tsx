"use client"
import Image from "next/image";
import "@/styles/ClientCard/styles.css";

interface ClientCardXProps {
  name: string;
  description: string;
  imageSrc: string;
}

const ClientCardX: React.FC<ClientCardXProps> = ({ name, description, imageSrc }) => {
  return (
    <div className="card">
        <figure className="card__figure">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
        </figure>
        <div className = "flex-1 w-full flex justify-center items-center">
          <h1 className = "font-semibold text-xl">{name}</h1>
        </div>
        {/* <div className="card__info">
            <h1>{name}</h1>
        </div> */}
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
          description: "We aim to make access to healthcare as easy as possible so our physiotherapists come to you. We provide a range of services including report writing, hydrotherapy, pain management, strengthening, AT prescription and paediatric physiotherapy.",
          imageSrc: "/images/dog.jpg"
        },
        {
          title: "Homecare Package",
          description: "We focus on improving mobility, strength, and overall physical function. Our team addresses your unique needs to support better movement and pain management. We design treatment plans that help clients regain independence and improve quality of life, all from the comfort of home.",
          imageSrc: "/images/dog.jpg"
        },
        {
          title: "Paediatric Physiotherapy",
          description: "We focus on supporting children’s physical development, including improving mobility, strength, and coordination. Our team designs individualised treatment plans to address specific challenges, helping children reach their full physical potential. We aim to create a positive and engaging environment that promotes motor skill development and overall physical well-being.",
          imageSrc: "/images/dog.jpg"
        }
      ];
    
      const occupationalClients = [
        {
          title: "NDIS Occupational Therapy",
          description: "We aim to complete comprehensive assessments and tailored interventions to support each child's individual needs. Our therapists work closely with families to support daily living skills, fine motor abilities, and social participation. Through evidence-based strategies, we aim to improve overall function and independence, helping children achieve their goals in a nurturing and supportive environment.",
          imageSrc: "/images/dog.jpg"
        },
        {
          title: "School Based Support",
          description: "We aim to help children succeed in their learning environment. Our therapists conduct detailed assessments and develop targeted interventions to address areas such as fine motor skills, sensory processing, attention, and social interaction. By collaborating with teachers and parents, we create strategies to support children’s academic performance and overall well-being to support them to thrive in school.",
          imageSrc: "/images/dog.jpg"
        },
        {
          title: "Aged Care Support",
          description: "Our therapists work with parents to identify strategies that enhance daily functioning, promote independence, and address specific developmental needs. By focusing on practical techniques for setting up routines, we empower parents to foster consistency, manage behaviour, and enhance the overall well-being of their children. This collaborative approach helps families feel confident in supporting their child’s growth and development at home.",
          imageSrc: "/images/dog.jpg"
        }
      ];

  return (
    <section className="py-8 md:py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading leading-tight mt-3">Clients We See</h2>
        </div>
        <div className = "w-full flex items-center justify-center lg:flex-col md:flex-row flex-col gap-[80px]">
            <div className = "w-full flex items-start justify-center flex-col">
                <header className = "text-2xl font-heading md:text-left ml-5">Physiotherapy</header>
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
            <div className = "w-full flex items-start justify-center flex-col">
                <header className = "text-2xl font-heading md:text-left ml-5">Occupational Therapy</header>
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
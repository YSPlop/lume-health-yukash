import Image from 'next/image';

interface ReasonCardProps {
  icon: string;
  title: string;
  description: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-cardcolour hover:bg-[#FFB9A3] transition-colors duration-300">
    <div className="relative w-24 h-24 mb-4">
      <Image
        src={icon}
        alt={title}
        fill
        className="object-contain"
      />
    </div>
    <h3 className="text-xl font-body font-semibold mb-4">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: "/icons/personalized-care.svg",
      title: "Personalized and Direct Care",
      description: "As a sole trader and experienced physiotherapist, I offer a unique advantage of providing personalized and direct care to all clients. This means that clients receive consistent treatment from the same therapist, fostering a deeper understanding of their conditions."
    },
    {
      icon: "/icons/experience.svg",
      title: "Experienced and trusted provider",
      description: "With extensive experience in physiotherapy and a robust background in the disability field, I am well-equipped to handle a wide range of physical impairments and conditions. My expertise allows me to develop tailored treatment plans that are specifically designed to meet individual needs."
    },
    {
      icon: "/icons/home-service.svg",
      title: "Convenience of Home-Based Service",
      description: "My service eliminates the need for clients to travel to clinics, which can be particularly beneficial for those with mobility restrictions. Home-based therapy ensures that clients are treated in the comfort of their own environment, where they feel most at ease."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-textcolour font-heading text-sm md:text-base">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-body leading-tight mt-3">
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard
              key={index}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

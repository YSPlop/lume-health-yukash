import Image from 'next/image';
import Link from 'next/link';
import ErrorPage from '@/components/ErrorPage';

type Params = Promise<{ service: string }>;

type Props = {
  params: Params;
};  

interface ServiceContent {
  title: string;
  intro: string;
  description: string;
  benefits: { title: string; content: string; }[];
  conditions: string[];
  imageSrc: string;
  imageAlt: string;
}

type ServiceContentMap = {
  [key: string]: ServiceContent;
};

const ServicePage = async ({ params }: Props) => {
  const { service } = await params;
  
  // This would ideally come from a CMS or database
  const serviceContent: ServiceContentMap = {
    'home-visits': {
      title: "Home Visit Physiotherapy",
      intro: "What are Home Visit Services?",
      description: "Home visit physiotherapy brings professional healthcare directly to your doorstep, providing personalized treatment in the comfort and convenience of your own home. This service is particularly beneficial for individuals with mobility challenges, those recovering from surgery, or anyone who prefers receiving care in their familiar environment.",
      benefits: [
        {
          title: "Personalized Care Environment",
          content: "Our home visit service allows us to assess and treat you in your daily living environment, enabling more targeted and practical therapeutic solutions that directly address your specific needs and challenges."
        },
        {
          title: "Comprehensive Assessment",
          content: "We conduct thorough evaluations of your home environment, identifying potential challenges and opportunities for improvement in your daily activities and mobility."
        },
        {
          title: "Tailored Treatment Plans",
          content: "Based on your specific needs and home environment, we develop customized treatment programs that integrate seamlessly into your daily routine."
        }
      ],
      conditions: [
        "Post-operative Recovery",
        "Chronic Pain Management",
        "Mobility Issues",
        "Balance Disorders",
        "Neurological Conditions",
        "Age-related Conditions",
        "Sports Injuries",
        "Rehabilitation Programs"
      ],
      imageSrc: "/images/home-visits.png",
      imageAlt: "Home visits illustration"
    },
    // Add other services here
  };

  const content = serviceContent[service as keyof typeof serviceContent];

  if (!content) return <ErrorPage />;

  return (
    <div className="bg-bgcolour pt-24">
      <section className="py-8 px-4 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-textcolour font-heading text-sm md:text-base">Our Services</span>
          <h1 className="text-3xl md:text-4xl font-body leading-tight mt-3">
            {content.title}
          </h1>
        </div>

        {/* Introduction */}
        <div className="mb-16">
          <h2 className="text-2xl font-body font-semibold mb-4">{content.intro}</h2>
          <p className="text-gray-600 leading-relaxed">{content.description}</p>
        </div>

        {/* Main Image */}
        <div className="w-full aspect-[21/9] relative mb-16 rounded-2xl overflow-hidden">
          <Image
            src={content.imageSrc}
            alt={content.imageAlt}
            fill
            className="object-cover"
          />
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-body font-semibold mb-8">How We Can Help</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {content.benefits.map((benefit, index) => (
              <div key={index} className="p-6 rounded-3xl bg-cardcolour">
                <h3 className="text-xl font-body font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.content}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Conditions Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-body font-semibold mb-8">Conditions We Treat</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {content.conditions.map((condition, index) => (
              <div key={index} className="p-4 rounded-xl bg-cardcolour text-center">
                <span className="text-sm font-body">{condition}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-body font-semibold mb-4">Get Started Today</h2>
          <p className="text-gray-600 mb-8">Contact us to speak directly with our physiotherapist about how we can help.</p>
          <Link 
            href="/contact"
            className="px-8 py-3 bg-cardcolour text-black rounded-full hover:bg-accentcolour hover:text-black transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage; 
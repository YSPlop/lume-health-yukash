import { ServiceContentMap } from './types';
import ServicePageClient from './ServicePageClient';
import ErrorPage from '@/components/ErrorPage';

type Params = Promise<{ service: string }>;

type Props = {
  params: Params;
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
      imageSrc: "/services/home-visits.jpg",
      imageAlt: "Home visits illustration"
    },
    // Add other services here
  };

  const content = serviceContent[service as keyof typeof serviceContent];

  if (!content) return <ErrorPage />;

  return <ServicePageClient content={content} />;
};

export default ServicePage; 
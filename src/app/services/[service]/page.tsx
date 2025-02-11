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
    'sensory-modulation': {
      title: "Sensory Modulation",
      intro: "What is Sensory Modulation?",
      description: "Sensory modulation refers to the ability to regulate responses to sensory input in a way that is appropriate for the situation. Some children may over-respond to sensory input, becoming easily overwhelmed by noise, touch, or movement, while others may under-respond, seeming unaware of their surroundings or seeking intense sensory experiences. At Lume Health, our occupational therapists assess how a child processes sensory input and develop individualised strategies to help support them to regulate for learning, play, and daily routines.",
      benefits: [
        {
          title: "Supporting Sensory Regulation",
          content: "When a child has difficulties with sensory modulation, they may have difficulty adjusting their responses to everyday stimuli. Some children may react strongly to sensory input, avoiding certain textures, sounds, or movements, while others may seek out intense input through rough play, constant movement, or loud vocalisations. Our therapy helps children find the right level of sensory input to feel calm, focused, and engaged."
        },
        {
          title: "Improving Attention and Emotional Control",
          content: "Difficulties with sensory modulation can impact emotional regulation, making it harder for children to manage frustration, anxiety, or transitions between activities. We use sensory-based strategies, movement breaks, and environmental modifications to support a child's ability to stay engaged in tasks, shift attention smoothly, and participate in everyday routines."
        },
        {
          title: "Enhancing Daily Functioning and Participation",
          content: "Sensory modulation challenges can affect dressing, eating, sleep, and social interactions. Our therapists work with families to develop practical strategies that help children manage sensory input more effectively, whether it's adapting their morning routine, improving tolerance for different textures, or creating sensory-friendly spaces for learning and play."
        }
      ],
      conditions: [
        "Self-regulation and emotional control",
        "Sensory sensitivities and sensory-seeking behaviors",
        "Attention and focus in daily tasks",
        "Social interaction and participation in group activities",
      ],
      imageSrc: "/images/about/occupational-therapy/sensory-modulation.png",
      imageAlt: "Child engaging in sensory activities"
    },
    // Add other services here
  };

  const content = serviceContent[service as keyof typeof serviceContent];

  if (!content) return <ErrorPage />;

  return <ServicePageClient content={content} />;
};

export default ServicePage; 
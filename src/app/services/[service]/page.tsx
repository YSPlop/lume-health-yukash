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
    // Physiotherapy
    'neuro-physiotherapy': {
      title: "Neuro Physiotherapy",
      intro: "What is Neurological Physiotherapy?",
      description: "Neurological physiotherapy is a specialised branch of physiotherapy focused on treating individuals who have experienced impairments due to neurological disorders. This practice is dedicated to enhancing and restoring functionality, mobility, and quality of life for those affected by injuries or diseases of the nervous system. At Lume Health, we use a variety of techniques tailored to each individual's needs, including strength and flexibility exercises, balance and coordination training, manual therapy, and motor relearning strategies. The goal is to help patients achieve the highest possible level of independence and manage symptoms effectively in a way that is both empowering and rehabilitative.",
      benefits: [
        {
          title: "Safety and Accessibility",
          content: "For those with neurological conditions, traveling to a clinic can be challenging and risky, especially for those with mobility impairments or those who are prone to seizures or other sudden symptoms. Our home-based therapy eliminates the need for potentially difficult or hazardous commutes. The safe, controlled environment of the home minimizes risks and removes barriers to consistent care, which is crucial for effective treatment and recovery."
        },
        {
          title: "Tailored Environment-Based Strategies",
          content: "Conducting physiotherapy in a patient's home allows therapists to directly observe and assess the patient's interaction with their everyday environment. This enables the therapist to customize interventions and exercises that are directly applicable to the spaces where the patient lives and functions daily. For example, therapists can help patients navigate specific barriers in their homes, practice getting in and out of their own bed or chairs, or manage stairs safely and effectively."
        },
        {
          title: "Enhanced Family Support and Involvement",
          content: "Our home-based therapy inherently involves family members more closely in the therapeutic process, providing them with firsthand knowledge of the patient's routines, challenges, and progress. This inclusion fosters a better understanding among caregivers about how to support their loved one's needs effectively, which can enhance the emotional and practical support available to the patient. It also ensures that therapeutic exercises and strategies are continued effectively between professional visits, contributing significantly to the patient's overall rehabilitation and quality of life."
        }
      ],
      conditions: [
        "Stroke",
        "Spinal Cord Injury",
        "Traumatic Brain Injury (TBI)",
        "Multiple Sclerosis (MS)",
        "Parkinson's Disease",
        "Cerebral Palsy",
        "Huntington's Disease",
        "Peripheral Neuropathy",
        "Vestibular Disorders"
      ],
      imageSrc: "/images/about-us/neuro.png",
      imageAlt: "Neuro physiotherapy session",
      contactSection: {
        title: "Get Started Today!",
        description: "Contact us to speak directly with our physiotherapist to see how we can help your client. Complete the relevant referral form below so we can get your client booked in for their first appointment!",
        buttonText: "Contact Us"
      }
    },
    'hydrotherapy': {
      title: "Hydrotherapy",
      intro: "What is Hydrotherapy?",
      description: "Hydrotherapy, also known as aquatic therapy, is a form of physiotherapy that utilizes the properties of water to facilitate healing and exercise. Conducted in a pool with warm water, hydrotherapy leverages the buoyancy, resistance, and hydrostatic pressure of water to support the body, decrease joint stress, and provide resistance which helps in strengthening muscles. The warmth of the water also promotes muscle relaxation and increases blood circulation, which can help alleviate pain and improve range of motion. Commonly used for rehabilitation, pain management, and conditioning, hydrotherapy is suitable for a variety of conditions including arthritis, post-operative recovery, spinal cord injuries, and neurological disorders. It is particularly beneficial for patients who might find traditional land-based exercises too painful or difficult, as the aquatic environment reduces the effects of gravity and helps enhance movement and flexibility.",
      benefits: [
        {
          title: "Tailored Rehabilitation Programs",
          content: "At Lume Health, we can develop personalised hydrotherapy programs that specifically address the unique needs and health conditions of each individual. This tailored approach ensures that the exercises and treatments are appropriate for the patient's specific rehabilitation goals, whether it's improving mobility, enhancing strength, reducing pain, or recovering from surgery. Our expertise in understanding medical histories and personal limitations allows us to adjust water-based exercises to maximize benefits safely and effectively."
        },
        {
          title: "Enhanced Recovery and Comfort",
          content: "Hydrotherapy provides a supportive environment that can be particularly advantageous for recovery. The buoyancy of water reduces the load on weight-bearing joints, bones, and muscles, which is especially beneficial for individuals recovering from injuries or surgeries, and those with arthritis or obesity. This buoyant effect allows for easier and pain-reduced movement, enabling patients to perform exercises that might be too painful or difficult on land. The warm water also helps in relaxing muscles and increasing blood flow to injured areas, which accelerates healing and decreases recovery time."
        },
        {
          title: "Consistent Monitoring and Progress Tracking",
          content: "Working with us in a hydrotherapy setting allows for ongoing assessment and monitoring of a patient’s progress. Our physiotherapist can observe how the patient handles various exercises in real-time and make immediate adjustments to the treatment plan based on their performance and feedback. This continuous evaluation helps in finely tuning therapeutic interventions to ensure optimal recovery and goal attainment. Furthermore, our physiotherapist can provide instant feedback and corrective guidance, which is crucial for performing each movement correctly to avoid potential injuries and maximize the therapeutic benefits of hydrotherapy."
        }
      ],
      conditions: [
        "Arthritis",
        "Chronic Pain",
        "Post-operative Rehabilitation",
        "Neurological Disorders",
        "Spinal Cord Injuries",
        "Sports Injuries",
        "Peripheral Neuropathy",
        "Balance Disorders",
        "Paediatric Conditions"
      ],
      imageSrc: "/images/about-us/hydro.png",
      imageAlt: "Hydrotherapy session",
      contactSection: {
        title: "Contact Us",
        description: "Contact us to speak directly with our physiotherapist to see how we can help your client.",
        buttonText: "Contact Us"
      }
    },
    'paediatric-physiotherapy': {
      title: "Paediatric Physiotherapy",
      intro: "Why Paediatric Physiotherapy?",
      description: "Early intervention through peadiatric physiotherapy is crucial for children facing developmental challenges, providing significant lifelong benefits. By addressing physical issues early, it prevents them from becoming severe as the child grows. Tailored therapies help children reach developmental milestones like walking and fine motor skills, enhancing their independence. Moreover, these programs support families by teaching them how to assist their child's development at home, fostering an environment where children can thrive physically, emotionally, and socially. This makes peadiatric physiotherapy an invaluable investment in a child's future health and quality of life.",
      benefits: [
        {
          title: "Comfort and Convenience",
          content: "Conducting therapy in a familiar home or community setting reduces stress and anxiety for children, allowing them to participate more fully and effectively in therapeutic activities. This comfort can lead to better engagement and faster progress. For families, this setup eliminates the need for frequent travels to clinics or hospitals, making it much more convenient, especially for those managing busy schedules or multiple children."
        },
        {
          title: "Real-Life Context",
          content: "By providing therapy in the home or community, peadiatric physiotherapists can tailor interventions to the child's actual living environment. This approach allows therapists to incorporate everyday objects and situations into the treatment plan, making exercises more practical and directly applicable. It also gives therapists a better understanding of the child's daily challenges and opportunities for intervention, leading to more personalised and effective care."
        },
        {
          title: "Family Involvement and Training",
          content: "Home-based therapy naturally involves other family members, providing them with firsthand observation of therapeutic techniques and progress. This inclusion enables parents and caregivers to learn how to support their child's development continuously. Physiotherapists can provide immediate, practical advice and training to family members during sessions, which empowers the whole family to contribute to the child's therapy goals consistently and correctly, reinforcing the benefits of treatment throughout daily activities."
        }
      ],
      conditions: [
        "Developmental Delay / Early Intervention",
        "Psychosocial Physiotherapy",
        "Cerebral Palsy",
        "Muscular Dystrophy",
        "Spina Bifida",
        "Torticollis",
        "Down Syndrome",
        "Juvenile Idiopathic Arthritis",
        "Sports Injuries",
        "Hypotonia",
        "Dravert Syndrome",
        "Coordination Disorders"
      ],
      imageSrc: "/images/about-us/paediatric.png",
      imageAlt: "Paediatric physiotherapy session",
      contactSection: {
        title: "Contact Us",
        description: "Contact us to speak directly with our physiotherapist to see how we can help your client.",
        buttonText: "Contact Us"
      }
    },
    'post-hospital-rehab': {
      title: "Post Hospital Rehab",
      intro: "What Is Post Hospital Rehab?",
      description: "Post-hospital rehabilitation is a crucial recovery phase that aims to restore strength, function, mobility, and independence after a patient is discharged from hospital care due to surgery, illness, or injury. It begins with a thorough assessment with our Physiotherapist to determine the patient's physical capabilities and needs, which guides the customization of a rehabilitation plan. This plan often includes mobility and strength training to regain muscle mass and joint function, pain management techniques such as manual therapy and the use of heat or ice, and functional training in daily activities to ensure a safe return to independence. Additionally, patients receive education on their condition and self-management strategies to facilitate long-term recovery. Regular progress monitoring and adjustments to the therapy plan are also integral to achieving the best outcomes, allowing patients to resume their daily routines as effectively and independently as possible.",
      benefits: [
        {
          title: "Comfort and Convenience",
          content: "Recovery can be physically and emotionally taxing, and the ability to receive rehabilitation in the comfort and familiarity of one's own home significantly reduces stress and logistical challenges. Eliminating the need for regular transportation to a clinic not only conserves the patient's energy but also reduces exposure to potential infections, which is particularly important for those in a weakened state after hospitalisation."
        },
        {
          title: "Tailored Environment-Specific Training",
          content: "Conducting rehabilitation in the home setting allows our physiotherapist to directly assess and integrate the patient's actual living environment into the therapy. This enables the creation of personalised treatment plans that address real-world challenges. Our physiotherapist can recommend modifications to the home to enhance safety and effectiveness and tailor exercises to specific tasks and challenges that the patient encounters in their daily life."
        },
        {
          title: "Family Involvement and Support",
          content: "Home-based rehab naturally facilitates greater involvement from family members, as they can observe sessions and learn from the physiotherapist about how best to support the patient's recovery. This involvement is crucial for reinforcing therapeutic exercises and practices consistently, enhancing the rehabilitation process. Family members can better understand the patient's needs and progress, contributing actively to their recovery journey."
        }
      ],
      conditions: [
        "Orthopedic Surgeries: Joint replacements, spinal surgeries, or fracture repairs",
        "Cardiac Conditions",
        "Pulmonary Conditions: COPD, pneumonia, or after a lung surgery",
        "Neurological Disorders: Stroke, traumatic brain injuries, or spinal cord injuries",
        "Amputations",
        "Major Trauma",
        "Cancer Recovery",
        "Severe Infections",
        "Post-Intensive Care Syndrome"
      ],
      imageSrc: "/images/about-us/post-hospital.png",
      imageAlt: "Post hospital rehabilitation session",
      contactSection: {
        title: "Contact Us",
        description: "Contact us to speak directly with our physiotherapist to see how we can help your client.",
        buttonText: "Contact Us"
      }
    },
    'aged-care-physiotherapy': {
      title: "Aged Care Physiotherapy",
      intro: "What is Aged Care Physiotherapy?",
      description: "Homecare package physiotherapy is a service designed for older adults or individuals with chronic health conditions who receive government-subsidized support to manage their healthcare needs at home. This type of physiotherapy is part of a broader homecare package that aims to help recipients maintain their independence and quality of life by providing tailored physical therapy interventions directly in their living environments. Our physiotherapists assess and treat various conditions such as mobility issues, chronic pain, post-hospital recovery, and general physical decline associated with ageing. The focus is on enhancing functionality, preventing injury, and managing pain through exercises and therapies adapted to each individual's capabilities and home setting. This service ensures ongoing, accessible care that supports ageing individuals in staying active and safe in their own homes.",
      benefits: [
        {
          title: "Safety and Convenience",
          content: "Home-based physiotherapy eliminates the need for seniors to travel to a clinic, which can be particularly challenging for those with mobility issues or chronic health conditions. Receiving treatment in the comfort and safety of their own home not only reduces the risk associated with traveling—such as falls or transportation-related stress—but also ensures that they do not miss sessions due to inclement weather, transportation issues, or fatigue. This consistent access to care is crucial for effective management of chronic conditions and for steady progress in their rehabilitation goals."
        },
        {
          title: "personalised Care in a Familiar Environment",
          content: "Conducting physiotherapy at home allows our therapists to tailor their approaches based on the actual living conditions and daily routines of the seniors. This personalised treatment ensures that exercises and therapeutic interventions are relevant and directly applicable to the specific challenges the senior faces in their daily environment. For example, our physiotherapist can help a senior practice getting in and out of their own bed safely, use bathroom fixtures securely, or navigate their kitchen efficiently. This context-specific training significantly improves the functional abilities of seniors within their own homes, promoting greater independence and confidence in performing daily tasks."
        }
      ],
      conditions: [
        "Arthritis",
        "Osteoporosis",
        "Parkinson's Disease",
        "Stroke",
        "Balance Disorders",
        "Chronic Respiratory Diseases",
        "Alzheimer's Disease and Dementia",
        "Post-operative Recovery",
        "Diabetes",
        "General Decline in Strength and Mobility"
      ],
      imageSrc: "/images/about-us/aged-care.png",
      imageAlt: "Aged care physiotherapy session",
      contactSection: {
        title: "Contact Us",
        description: "Contact us to speak directly with our physiotherapist to see how we can help your client.",
        buttonText: "Contact Us"
      }
    },
    // Occupational Therapy
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
      imageSrc: "/images/about-us/sensory-modulation.jpg",
      imageAlt: "Child engaging in sensory activities",
      contactSection: {
        title: "Contact Us",
        description: "Contact us to learn how we can support your child's sensory regulation for improved daily participation.",
        buttonText: "Contact Us"
      }
    },
    'daily-living-skills': {
      title: "Daily Living Skills",
      intro: "What are Daily Living Skills in Occupational Therapy for Children?",
      description: "Daily living skills are essential self-care and independence tasks that help children participate in everyday activities at home, school, and in the community. These include dressing, toileting, feeding, hygiene, and managing routines. At Lume Health, our occupational therapists use fun, play-based strategies to support children in developing these skills, promoting confidence and independence in their daily routines.",
      benefits: [
        {
          title: "Developing Age-Appropriate Independence",
          content: "Our therapy focuses on helping children develop daily living skills suited to their age and abilities. This may include learning to dress independently, use utensils properly, brush their teeth, or organise their belongings. By practicing in their home environment, children can apply these skills where they matter most."
        },
        {
          title: "Supporting Sensory and Motor Skills",
          content: "Many self-care tasks require coordination, strength, and sensory processing. We help children improve fine and gross motor skills for tasks like buttoning shirts, using cutlery, and tying shoelaces while also addressing sensory sensitivities that may impact hygiene routines or mealtimes."
        },
        {
          title: "Creating Routines and Reducing Frustration",
          content: "Establishing consistent daily routines can help children feel more secure and capable. Our therapists work with families to implement visual schedules, step-by-step strategies, and adaptive tools to make daily tasks easier and reduce stress for both children and caregivers."
        }
      ],
      conditions: [
        "Dressing (buttons, zippers, shoelaces)",
        "Toileting and hygiene (toothbrushing, handwashing)",
        "Mealtime skills (using utensils, trying new foods)",
        "Morning and bedtime routines (organisation, transitions)",
        "Following instructions and problem-solving"
      ],
      imageSrc: "/images/about-us/daily-living-skills.png",
      imageAlt: "Child practicing daily living skills",
      contactSection: {
        title: "Contact Us",
        description: "Contact us to see how we can support your child's independence in daily activities.",
        buttonText: "Contact Us"
      }
    },
    'school-readiness': {
      title: "School Readiness",
      intro: "What is School Readiness in Occupational Therapy?",
      description: "School readiness in occupational therapy focuses on equipping children with the foundational skills needed to thrive in a school environment. This includes fine and gross motor skills, emotional regulation, sensory processing, social interaction, and independence in daily tasks. At Lume Health, we support children by using engaging, evidence-based approaches tailored to their individual needs. Our goal is to build confidence, enhance functional abilities, and ensure a smoother transition into the structured learning environment of school.",
      benefits: [
        {
          title: "Developing Essential Skills",
          content: "Through occupational therapy, we focus on building key school readiness skills in a familiar and comfortable environment. This includes strengthening fine motor abilities for handwriting, improving gross motor coordination for playground activities, and enhancing self-care tasks such as dressing and opening lunchboxes."
        },
        {
          title: "Supporting Sensory and Emotional Regulation",
          content: "Many children struggle with the sensory and emotional demands of a school setting. Our therapists assess and implement strategies to help children manage transitions, manage noise and activity levels, and develop the self-regulation needed for learning and social interactions."
        },
        {
          title: "Enhancing Social and Communication Skills",
          content: "Being able to follow instructions, engage with peers, and participate in group activities is important for school participation. Our therapy sessions incorporate play-based interventions that support turn-taking, problem-solving, and communication, ensuring children feel confident in social settings."
        }
      ],
      conditions: [
        "Fine motor skills (pencil grip, cutting, drawing)",
        "Gross motor coordination (balance, core strength, posture)",
        "Emotional and sensory regulation (managing transitions, attention and concentration)",
        "Self-care tasks (toileting, dressing, feeding)",
        "Social interaction and communication (peer engagement, following instructions)"
      ],
      imageSrc: "/images/about-us/school-readiness.png",
      imageAlt: "Child engaging in school readiness activities",
      contactSection: {
        title: "Contact Us",
        description: "Contact us to see how we can support your child's transition to school.",
        buttonText: "Contact Us"
      }
    },
    
    // Add other services here
  };

  const content = serviceContent[service as keyof typeof serviceContent];

  if (!content) return <ErrorPage />;

  return <ServicePageClient content={content} />;
};

export default ServicePage; 
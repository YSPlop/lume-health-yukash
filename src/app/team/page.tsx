import TeamCard from "@/components/TeamCard";

const Team: React.FC = () => {
    const TeamMembers = [
        {
            name: "Physiotherapist Han",
            qualifications: ["Masters of Physiotherapy"],
            role: "Physiotherapist",
            interests: ["Sports Physiotherapy", "Disability Support", "Holistic Care"],
            description: {
                professional: "Han graduated from La Trobe University with a Masters of Physiotherapy Practice and has over 5 years experience in the disability field. Han is passionate about creating a personalised care plan for his clients and helping them to achieve their goals. He is committed to delivering high quality care and personalised treatment. His expertise lies in developing holistic and individualised intervention plans, addressing the unique needs of each client and helping clients achieve their full potential.",
                personal: "Han is a believer in practicing what he preaches. He is a regular at his local gym and enjoys taking his dog Stitch out for trail walks. As an avid foodie, he believes the best way to experience any culture is through their food and is always open to new recommendations."
            },
            image: "/images/han-team-image.jpg"
        },
        {
            name: "Occupational Therapist Natalie",
            qualifications: ["Masters of Occupational Therapy Practice"],
            role: "Paediatric Occupational Therapist",
            interests: ["Paediatric Care", "Trauma-Informed Practice", "Family-Centered Care"],
            description: {
                professional: "Natalie graduated from La Trobe University with a Masters of Occupational Therapy Practice. She is a passionate and dedicated Paediatric Occupational Therapist with a deep commitment to providing culturally responsive, trauma-informed, and family-centered care. With experience delivering comprehensive assessments and interventions for children with diverse needs, she takes a holistic approach to support both the child and their family. Natalie has experience working closely with multidisciplinary teams, fostering strong relationships to ensure continuity of care.",
                personal: "Outside of her professional life, Natalie enjoys exploring new places, staying active, cooking, and spending time with her dog, reflecting her love for adventure and connection."
            },
            image: "/images/natalie-team-image.jpg"
        }
    ]

    return (
        <div className="w-full min-h-screen bg-[#FDCFB4] py-24 px-6 md:px-24">
            <div className="max-w-7xl mx-auto space-y-48">
                {TeamMembers.map((member, index) => (
                    <TeamCard 
                        key={member.name}
                        {...member}
                        switchCard={index % 2 === 1}
                    />
                ))}
            </div>
        </div>
    )
}

export default Team;
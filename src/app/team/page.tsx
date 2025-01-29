import TeamCard from "@/components/TeamCard";
const Team: React.FC = () => {
    const TeamMembers = [
        {
            name: "Dr. Han",
            qualifications: ["Masters of Physiotherapy"],
            role: "Physiotherapist",
            interests: ["Sports Physiotherapy", "Neurological Physiotherapy"],
            description: "Han graduated from La Trobe University with a Masters of Physiotherapy Practice and has over 5 years experience in the disability field. Han is passionate about creating a personalised care plan for his clients and helping them to achieve their goals. He is committed to delivering high quality care and personalised treatment. His expertise lies in developing holistic and individualised intervention plans, addressing the unique needs of each client and helping clients achieve their full potential. Passionate about making a positive impact, Han continuously strives for professional development to ensure the highest standards in physiotherapy practice. Han is a believer in practicing what he preaches. He is a regular at his local gym and also enjoys taking his dog Stitch out for trail walks. Han also regularly catches up with friends and is an avid foodie, believing that the best way to experience any culture is through",
            image: "/images/han.png"
        },
        {
            name: "Dr. Natalie Chan",
            qualifications: ["Masters of Occupational Therapy Practice"],
            role: "Paediatric Occupational Therapist",
            interests: ["Occupational Therapy", "Paediatrics"],
            description: "Natalie graduated from La Trobe University with a Masters of Occupational Therapy Practice. Natalie is a passionate and dedicated Paediatric Occupational Therapist with a deep commitment to providing culturally responsive, trauma-informed, and family-centered care. With experience delivering comprehensive assessments and interventions for children with diverse needs, she takes a holistic approach to support both the child and their family. Natalie has experience working closely with multidisciplinary teams, fostering strong relationships to ensure continuity of care. She is passionate about empowering families to navigate the complexities of systems like the NDIS, ensuring that each family receives the highest level of support. She continuously stays connected with various Occupational Therapy groups and forums to ensure her approach is aligned with the latest research and best practices. Outside of her professional life, Natalie enjoys exploring new places, staying active, cooking, and spending time with her dog, reflecting her love for adventure and connection.",
            image: "/images/natalie.png"
        }

    ]

    return (
        <div className = "w-full h-auto flex justify-center px-24">
            <div className = "py-24 grid gap-48 ">
                <TeamCard 
                    name = {TeamMembers[0].name} 
                    qualifications = {TeamMembers[0].qualifications} 
                    role = {TeamMembers[0].role} 
                    interests = {TeamMembers[0].interests} 
                    description = {TeamMembers[0].description} 
                    image = {TeamMembers[0].image}
                    switchCard = {false} />

                <TeamCard 
                    name = {TeamMembers[1].name} 
                    qualifications = {TeamMembers[1].qualifications} 
                    role = {TeamMembers[1].role} 
                    interests = {TeamMembers[1].interests} 
                    description = {TeamMembers[1].description} 
                    image = {TeamMembers[1].image}
                    switchCard = {true} />
            </div>
        </div>
    )
}

export default Team;
import Image from "next/image";

interface TeamProps {
    name: string;
    qualifications: string[];
    role: string;
    interests: string[];
    description: string;
    image: string;
    switchCard: boolean;
}

const TeamCard: React.FC<TeamProps> = ({name, qualifications, role, interests, description, image, switchCard}) => {
    return (
        <div className = "lg:w-[1000px] sm:w-[500px] h-auto grid lg:grid-cols-2 grid-row-2 gap-12">
            <div className = {`${switchCard ? "order-2" : "order-1"}`}>
                <h1 className = "text-3xl">{name}</h1>
                <h2 className = "text-xl py-3">{qualifications}</h2>
                <div className = "pb-5">
                    <p className = "font-semibold">{role}</p>
                    <span className = "font-semibold">Interests: </span>
                    {(interests.slice(0, -1)).map((interest, index) => {
                        return (
                            <span key = {index}>{interest}, </span>
                        )
                    })}
                    <span>{interests.at(-1)}</span>
                </div>
                <div className = "border-t border-gray-300"/>
                <div className = "py-5 sm:text-base text-sm">
                    {description}
                </div>
                <button className = "bg-cardcolour text-black px-6 py-3 rounded-full hover:bg-accentcolour hover:text-black transition-colors">
                    Book Appointment
                </button>
            </div>
            <div className = {`w-full flex justify-center items-center ${switchCard ? "lg:order-1" : "lg:order-2"}`}>
                <Image 
                    src = {image}
                    alt = "Han"
                    width = {300}
                    height = {300}
                    className = "object-contain"
                />
            </div>
        </div>
    )
}

export default TeamCard;
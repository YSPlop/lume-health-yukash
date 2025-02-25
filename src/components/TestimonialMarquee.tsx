import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
    source: "Google" | "Direct";
    date: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Thompson",
        text: "The mobile service was incredibly convenient. The therapist was professional and really understood my needs. Highly recommend Lume Health!",
        rating: 5,
        source: "Google",
        date: "March 2024"
    },
    {
        id: 2,
        name: "Michael Chen",
        text: "As an NDIS participant, finding the right service was crucial. Lume Health has been exceptional in providing consistent, quality care.",
        rating: 5,
        source: "Direct",
        date: "February 2024"
    },
    {
        id: 3,
        name: "Emma Williams",
        text: "The team at Lume Health goes above and beyond. Their at-home service has made a huge difference in my recovery journey.",
        rating: 5,
        source: "Google",
        date: "March 2024"
    },
    {
        id: 4,
        name: "David Patterson",
        text: "Outstanding service! The therapists are knowledgeable and caring. Having them come to my home makes everything so much easier.",
        rating: 5,
        source: "Direct",
        date: "January 2024"
    },
    {
        id: 5,
        name: "Lisa Anderson",
        text: "Professional, punctual, and passionate about helping their clients. The best allied health service I've experienced in Melbourne.",
        rating: 5,
        source: "Google",
        date: "March 2024"
    }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="min-w-[300px] md:min-w-[400px] p-6 mx-4 bg-cardcolour rounded-2xl shadow-lg flex flex-col justify-between">
        <div className="flex items-center mb-4">
            <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">
                via {testimonial.source}
            </span>
        </div>
        <p className="text-gray-700 mb-4 flex-grow">&quot;{testimonial.text}&quot;</p>
        <div className="flex justify-between items-center">
            <span className="font-semibold text-gray-800">{testimonial.name}</span>
            <span className="text-sm text-gray-500">{testimonial.date}</span>
        </div>
    </div>
);

const TestimonialsMarquee = () => {
    const [duplicatedTestimonials, setDuplicatedTestimonials] = useState<Testimonial[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const [duration, setDuration] = useState(20); // Default duration

    useEffect(() => {
        // Handle screen resize and set appropriate duration
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 768) { // mobile
                setDuration(15); // faster for mobile
            } else if (width < 1024) { // tablet
                setDuration(18); // medium speed
            } else { // desktop
                setDuration(20); // slower for desktop
            }
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Duplicate testimonials with unique IDs for the second set
        setDuplicatedTestimonials([
            ...testimonials,
            ...testimonials.map(t => ({
                ...t,
                id: t.id + testimonials.length // Add offset to create unique IDs
            }))
        ]);
    }, []);

    return (
        <section className="w-full py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 mb-10">
                <h2 className="text-4xl md:text-5xl font-heading text-center mb-2">
                    What Our Clients Say
                </h2>
                <p className="text-center text-gray-600 font-body">
                    Real experiences from our valued clients
                </p>
            </div>

            <div className="relative w-full overflow-hidden">
                <motion.div
                    ref={containerRef}
                    className="flex"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: duration,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedTestimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id} // Now using just the unique ID as the key
                            testimonial={testimonial}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TestimonialsMarquee; 
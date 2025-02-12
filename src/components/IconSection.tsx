import { motion } from "framer-motion";

interface IconSectionProps {
  icon: React.ReactNode;
  title: string;
  content: string | string[];
}

const IconSection: React.FC<IconSectionProps> = ({ icon, title, content }) => {
  return (
    <motion.div 
      className="flex gap-4 items-start"
      whileHover={{ x: 10 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-2xl text-primary-400">{icon}</div>
      <div>
        <h3 className="font-semibold text-primary-400">{title}</h3>
        {Array.isArray(content) ? (
          <ul className="list-disc list-inside text-gray-600">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </motion.div>
  );
};

export default IconSection;

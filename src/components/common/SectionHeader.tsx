import { motion } from "framer-motion";

interface headProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: headProps) => {
  return (
    <>
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl text-center text-primary mb-8 font-extrabold"
        >
          {title}
        </motion.h2>{" "}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-3xl mx-auto text-center mt-2 text-gray-600"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="w-24 h-1.5 bg-purple-600 mx-auto mt-6 rounded-full "></div>
      </div>
    </>
  );
};

export default SectionHeader;

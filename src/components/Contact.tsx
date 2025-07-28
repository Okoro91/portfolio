import { FiMail, FiPhone, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionHeader from "./common/SectionHeader";

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-20">
        <SectionHeader
          title="Get in Touch"
          subtitle="I'm open to new opportunities, collaborations, and conversations. Feel free to reach out!"
        />
        <div className="container mx-auto px-4">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
              rows={5}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-accent py-3 rounded-lg hover:bg-secondary transition-colors"
            >
              Send Message
            </button>
          </motion.form>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-accent hover:bg-secondary rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center p-8 w-80"
            >
              <FiMail size={48} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Email Me</h3>

              <a
                href="mailto:your.email@example.com"
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 px-4 py-2 text-base"
              >
                mi.okoro91@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-accent hover:bg-secondary  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center p-8 w-80"
            >
              <FiLinkedin size={48} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Connect on LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/mi-okoro/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 border border-purple-500 text-purple-600 hover:bg-purple-50 focus:ring-purple-200 px-4 py-2 text-base"
              >
                My LinkedIn Profile
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-accent hover:bg-secondary  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col items-center text-center p-8 w-80"
            >
              <FiPhone size={48} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Call Me</h3>

              <a
                href="tel:+2348012345678"
                className="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500 px-4 py-2 text-base"
              >
                +234 812 327 2914
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

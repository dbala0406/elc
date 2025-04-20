import { motion } from "framer-motion";

export default function OurGoal() {
  return (
    <section id="about-us" className="bg-gradient-to-br from-purple-50 to-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Animated Quote Box with Glassmorphism */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative bg-white/70 backdrop-blur-lg shadow-xl rounded-xl p-8 md:p-12 border-l-8 border-purple-600 text-left"
        > */}
          {/* Opening Quote Icon */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="absolute top-[-16px] left-[-16px] text-purple-600 opacity-30"
          >
            <path
              fill="currentColor"
              d="M10.656 2.813V9h3.365c-.277 2.216-1.642 3.938-3.926 3.938v2.25A6.762 6.762 0 0 0 16.825 9V2.812h-6.169ZM1.683 2.813V9h3.365c-.278 2.216-1.642 3.938-3.926 3.938v2.25A6.762 6.762 0 0 0 7.852 9V2.812h-6.17Z"
            />
          </svg> */}

          {/* Quote Text */}
          {/* <blockquote className="text-xl md:text-4xl font-bold text-purple-900 italic leading-relaxed tracking-wide">
            "Rabbi zidni 'ilman"  
          </blockquote>
          <p className="mt-3 text-md sm:text-lg text-gray-700 font-medium font-montserrat">My Lord, increase me in knowledge.</p> */}

          {/* Closing Quote Icon */}
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="absolute bottom-[-16px] right-[-16px] text-purple-600 opacity-30"
          >
            <path
              fill="currentColor"
              d="M10.656 2.813V9h3.365c-.277 2.216-1.642 3.938-3.926 3.938v2.25A6.762 6.762 0 0 0 16.825 9V2.812h-6.169ZM1.683 2.813V9h3.365c-.278 2.216-1.642 3.938-3.926 3.938v2.25A6.762 6.762 0 0 0 7.852 9V2.812h-6.17Z"
            />
          </svg> */}
        {/* </motion.div> */}

        {/* Elegant Divider */}
        {/* <div className="mt-10 w-24 h-1 bg-purple-500 mx-auto rounded-full"></div> */}

        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold text-purple-900 font-montserrat">
          Our Goal
        </h2>

        {/* Mission & Vision Content with Smooth Fade-In */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mt-6 font-light text-md sm:text-xl leading-relaxed text-gray-800 font-montserrat"
        >
          Our online tutorial services provide an effective way to enhance your
          understanding of the curriculum and improve your grades. With
          experienced tutors and personalized attention, you can achieve academic success.
        </motion.p>
      </div>
    </section>
  );
}

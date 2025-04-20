import { CheckCircle } from "lucide-react"; // Icon for features
import bannerImage from "../assets/medium-shot-kid-taking-notes.jpg";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section id="banner" className="bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mr-auto place-self-center lg:col-span-7"
        >
          <h1 className="text-purple-900 max-w-2xl mb-6 text-3xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none font-montserrat">
          A comprehensive <span className="text-yellow-500">online tutorial</span>
          </h1>
          {/* Features */}
          <div className="flex flex-col md:flex-column justify-center gap-6">
            {[
              "One to One private tutoring session",
              "Flexible Timing",
              "Premium Group Classes",
              "Professional and Special Courses",
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
              >
                <CheckCircle className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                <span className="font-medium text-, md:text-xl xl:text-xl text-gray-800 font-[Poppins]">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
            className="flex space-x-3 mt-8"
          >
            <a
              href="viber://chat?number=+9607744531"
              className="inline-flex items-center justify-center px-6 py-3 text-md md:text-lg xl:text-lg font-semibold text-purple-900 border border-purple-400 rounded-xl hover:bg-purple-200 focus:ring-4 focus:ring-purple-200 shadow-md transition-transform transform hover:scale-105 font-montserrat"
            >
              Book a free trial
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="hidden lg:mt-0 lg:col-span-5 lg:flex"
        >
          <img
            src={bannerImage}
            alt="elc-banner-image"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}

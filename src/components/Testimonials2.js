import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import all feedback images
import feedback1 from "../assets/Feedbacks/feedback-1.png";
import feedback2 from "../assets/Feedbacks/feedback-2.png";
import feedback3 from "../assets/Feedbacks/feedback-3.png";
import feedback4 from "../assets/Feedbacks/feedback-4.png";
import feedback5 from "../assets/Feedbacks/feedback-5.png";
import feedback6 from "../assets/Feedbacks/feedback-6.png";
import feedback7 from "../assets/Feedbacks/feedback-7.png";
import feedback8 from "../assets/Feedbacks/feedback-8.png";
import feedback9 from "../assets/Feedbacks/feedback-9.png";
import feedback10 from "../assets/Feedbacks/feedback-10.png";
import feedback11 from "../assets/Feedbacks/feedback-11.png";
import feedback12 from "../assets/Feedbacks/feedback-12.png";
import feedback13 from "../assets/Feedbacks/feedback-13.png";
import feedback14 from "../assets/Feedbacks/feedback-14.png";

const testimonials = [
  {
    name: "Aishath Zaiba",
    position: "Student",
    img: feedback1,
  },
  {
    name: "Daniel Wong",
    position: "Student",
    img: feedback2,
  },
  {
    name: "Linda Chia",
    position: "Parent",
    img: feedback3,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback4,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback5,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback6,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback7,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback8,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback9,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback10,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback11,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback12,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback13,
  },
  {
    name: "Student Feedback",
    position: "Messenger Screenshot",
    img: feedback14,
  },
];

const Testimonials2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-8 sm:py-12 px-4 md:px-8">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-md sm:text-lg mb-2 text-gray-800 font-montserrat">
          What Our Happy Parents and Students Say
        </p>
        <h2 className="font-bold tracking-tight text-purple-900 text-2xl sm:text-4xl font-montserrat mb-6 sm:mb-8">
          Our <span className="italic text-yellow-600 mr-2">happy</span> parents and students
          say about us
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center">
        {/* Testimonial Image Container */}
        <div className="w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              {/* Image container with constrained dimensions */}
              <div className="w-full overflow-hidden rounded-lg flex justify-center bg-gray-100 min-h-[300px] sm:min-h-[400px]">
                <img
                  src={testimonials[index].img}
                  alt={`Testimonial from ${testimonials[index].name}`}
                  className="object-contain max-h-[300px] sm:max-h-[400px] w-auto"
                  style={{ maxWidth: "100%" }}
                />
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <p className="text-md sm:text-lg font-semibold text-gray-800 font-montserrat">
                  {testimonials[index].name}
                </p>
                <p className="text-sm sm:text-md text-gray-600 italic font-montserrat">
                  {testimonials[index].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots - Scrollable if too many */}
          <div className="flex justify-center mt-4 sm:mt-6 overflow-x-auto py-2">
            <div className="flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`flex-shrink-0 h-3 w-3 rounded-full transition-all ${
                    i === index
                      ? "bg-gradient-to-r from-purple-500 via-yellow-400 to-yellow-600 w-4"
                      : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials2;
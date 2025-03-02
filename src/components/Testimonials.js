import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "They are able to help a startup like mine scale and are very responsive to all our unique needs.",
    name: "Yacob Sudarmaji",
    position: "Product Manager, XYZ Tech",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Their service exceeded our expectations, and the team was always available to support us!",
    name: "Sarah Johnson",
    position: "Marketing Lead, ABC Corp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The best decision we made! They truly care about their customers and their success.",
    name: "David Lee",
    position: "CEO, StartUp Hub",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20 flex items-center justify-center">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left - Client Image */}
        <motion.img
          key={testimonials[index].image}
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="w-full max-w-sm md:max-w-full rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
        />

        {/* Right - Testimonial Content */}
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-transparent rounded-lg"></div>

          {/* Testimonial Text */}
          <div className="relative z-10 p-6 md:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-600 italic text-lg md:text-xl leading-relaxed">
                  <span className="text-4xl text-gray-400">“</span>
                  {testimonials[index].text}
                  <span className="text-4xl text-gray-400">”</span>
                </p>
                <p className="mt-4 font-bold text-gray-800 text-lg">{testimonials[index].name}</p>
                <p className="text-gray-500">{testimonials[index].position}</p>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="mt-6 flex space-x-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`h-3 w-3 rounded-full transition-all ${
                    i === index ? "bg-orange-500 w-5" : "bg-gray-300"
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

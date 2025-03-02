import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "hello! As one of e-learning centres very first students, I am happy to say that since day one, all my subject tutors were professional, highly skilled in teaching and motivating. The team is absolutely diligent, especially the teachers. I'll always recommend e-learning centre to all my family and friends. Thank you for the support and enthusiasm that your team has always shown to me as a student.",
    name: "Aishath Zaiba",
    position: "Student",
    img: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    text: "Center eh medhuverikoh kuraairu mikan ragalhu vaane kamah balaafa kuree. Aslu miadhuge claahun ves faahaga kurevunu teacher ge kind kamaa. Kudhinaa talk kuraagoh v ragalhukan. Ekamu ves just meehakah trust kuran eh faharun neygeynetha. Ehen veema suvaalu kohleeves. But v ufaave thikolhun v avas reply dheyleh. V hinhama jehey adhi.",
    name: "Daniel Wong",
    position: "Student",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    text: "The improvement in my child’s academic performance has been incredible. The structured lessons and dedicated tutors have made a huge difference. Highly recommended!",
    name: "Linda Chia",
    position: "Parent",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];


export default function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-[40px] sm:pt-16 px-[10%]">
      <div>
        <p className="sm:text-lg text-md mb-2 text-gray-800 text-md font-montserrat">
          What Our Happy Parents and Students Say
        </p>
        <h2 className="font-bold tracking-tight text-purple-900 sm:text-4xl text-xl font-montserrat mb-[30px]">
          Our <span className="italic text-yellow-600 mr-2">happy</span> parents and students
          say about us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-start ">
        {/* Image Section */}
        <div className="w-full md:w-[30%]">
          <motion.img
            key={index}
            src={testimonials[index].img}
            alt={testimonials[index].name}
            className="w-full rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Testimonial Section */}
        <div className="w-full md:px-10 lg:w-[60%] flex flex-col items-center text-center md:text-left md:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="mt-6 bg-gradient-to-r from-gray-100 via-purple-100 to-gray-50 p-8 rounded-xl shadow-md w-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
            >
              <p className="sm:text-lg text-md text-gray-800 font-montserrat">
                “{testimonials[index].text}”
              </p>
              <p className="sm:text-lg text-md mt-4 font-semibold text-gray-800 font-montserrat tracking-wide">
                {testimonials[index].name}
              </p>
              <p className="sm:text-md text-sm text-gray-600 italic text-gray-800 font-montserrat">
                {testimonials[index].position}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex space-x-2 mt-6">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`h-3 w-3 rounded-full transition-all ${
                  i === index
                    ? "bg-gradient-to-r from-purple-100 via-yellow-400 to-yellow-600 w-4"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

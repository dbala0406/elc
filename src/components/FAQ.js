import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We provide tutoring in Mathematics, Science, English, and more for different grade levels.",
    },
    {
      question: "How much does a tutoring session cost?",
      answer:
        "Pricing varies based on the course and tutor. Contact us for detailed fee structures.",
    },
    {
      question: "How does online tutoring work?",
      answer:
        "Our tutors conduct 1:1 live sessions using interactive tools to enhance learning.",
    },
    {
      question: "Do you offer trial classes?",
      answer: "Yes! We offer a free trial session to help you decide before enrolling.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-gradient-to-br from-purple-50 to-gray-100 py-[50px]">
      <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold tracking-tight text-purple-900 text-xl sm:text-4xl font-montserrat mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-lg shadow-lg cursor-pointer border border-gray-200 transition-all hover:bg-gray-100"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-start">
                <h3 className="text-start text-md sm:text-lg font-semibold text-gray-800 font-montserrat">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="text-left mt-3 text-gray-700 text-md sm:text-lg font-montserrat leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

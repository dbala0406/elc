import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      category: "General Inquiries",
      questions: [
        {
          question: "What subjects do you offer tuition for?",
          answer: "We offer tuition for all subjects and all syllabus.",
        },
        {
          question: "What age groups or classes do you cater to?",
          answer: "We cater to students starting from 6 years old.",
        },
      ],
    },
    {
      category: "Admission and Enrollment",
      questions: [
        {
          question: "What is the admission process for joining the tuition centre?",
          answer: "Simply fill out our enrollment form and complete your payment.",
        },
        {
          question: "Do you offer trial classes or demo sessions?",
          answer: "Yes, we offer trial classes for new students.",
        },
      ],
    },
    {
      category: "Faculty and Safety",
      questions: [
        {
          question: "What are the qualifications and experience of your tutors?",
          answer: "Our tutors are highly experienced in delivering effective lessons.",
        },
        {
          question: "Do tutors provide individual attention to students?",
          answer: "Yes, we offer private classes which ensure individual attention. Our group classes also maintain small sizes to allow for personalized focus.",
        },
      ],
    },
    {
      category: "Classes and Scheduling",
      questions: [
        {
          question: "What are the class sizes and student-teacher ratios?",
          answer: "Our group classes have a maximum of 5 students.",
        },
        {
          question: "Can parents request specific tutors or class timings?",
          answer: "Yes, we will try our best to accommodate these requests.",
        },
        {
          question: "How do you handle missed classes or rescheduling?",
          answer: "By informing earlier, we provide additional classes to recover the missed classes.",
        },
      ],
    },
    {
      category: "Results and Outcomes",
      questions: [
        {
          question: "What kind of results have your students achieved in past exams?",
          answer: "Our students have achieved an average of 90% in their exams.",
        },
      ],
    },
  ];

  const [openCategory, setOpenCategory] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <section id="faq" className="bg-gradient-to-br from-purple-50 to-gray-100 py-[50px]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-bold tracking-tight text-purple-900 text-xl sm:text-4xl font-montserrat mb-10 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
              <div 
                className="p-5 cursor-pointer flex justify-between items-center bg-purple-50"
                onClick={() => setOpenCategory(openCategory === categoryIndex ? null : categoryIndex)}
              >
                <h3 className="text-md sm:text-lg font-semibold text-purple-800 font-montserrat">
                  {category.category}
                </h3>
                <motion.div
                  animate={{ rotate: openCategory === categoryIndex ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-purple-700" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {openCategory === categoryIndex && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-5"
                  >
                    <div className="py-4 space-y-4">
                      {category.questions.map((faq, questionIndex) => (
                        <div key={questionIndex} className="pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                          <div 
                            className="flex justify-between items-start cursor-pointer"
                            onClick={() => setOpenQuestion(openQuestion === `${categoryIndex}-${questionIndex}` ? null : `${categoryIndex}-${questionIndex}`)}
                          >
                            <h4 className="text-md font-medium text-gray-800 font-montserrat pr-4">
                              {faq.question}
                            </h4>
                            <motion.div
                              animate={{ rotate: openQuestion === `${categoryIndex}-${questionIndex}` ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown size={20} />
                            </motion.div>
                          </div>
                          
                          <AnimatePresence>
                            {openQuestion === `${categoryIndex}-${questionIndex}` && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-3 text-gray-700 text-sm sm:text-base font-montserrat leading-relaxed pl-2"
                              >
                                {faq.answer}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
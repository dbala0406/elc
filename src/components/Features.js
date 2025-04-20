import { FaGlobe, FaBook, FaUsers, FaGlobeAmericas, FaRocket, FaClipboardList, FaClock, FaCalculator } from "react-icons/fa";

export default function Features() {
  const features = [
    { title: "Expert Educators from Around the World", icon: <FaGlobe className="w-7 h-7" /> },
    { title: "Comprehensive Learning for Grades 1-12", icon: <FaBook className="w-7 h-7" /> },
    { title: "Small Group Learning (Max 5 Students)", icon: <FaUsers className="w-7 h-7" /> },
    { title: "International Syllabus Coverage", icon: <FaGlobeAmericas className="w-7 h-7" /> },
    { title: "Fast-Track Courses for Quick Learning", icon: <FaRocket className="w-7 h-7" /> },
    { title: "Exam-Focused Preparation Programs", icon: <FaClipboardList className="w-7 h-7" /> },
    { title: "Flexible Class Scheduling Options", icon: <FaClock className="w-7 h-7" /> },
    { title: "Interactive Math with Whiteboard Calculations", icon: <FaCalculator className="w-7 h-7" /> },
  ];

  return (
    <section id="features" className="bg-gray-50 py-10 px-4 sm:py-16 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl sm:text-xl md:text-4xl font-bold text-purple-900 font-montserrat">
          Elevate Learning with Our Unique Features
        </h2>
        <p className="mt-6 sm:mt-8 font-light text-md sm:text-lg sm:text-xl leading-relaxed font-montserrat">
          Our online learning platform offers high-quality education with expert teachers, interactive tools, and personalized learning paths to help students succeed.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-5xl mt-8 sm:mt-10 mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md sm:shadow-lg rounded-xl p-4 sm:p-6 flex flex-col items-center space-y-2 sm:space-y-3 border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-transparent"
          >
            {/* Icon */}
            <div className="bg-purple-100 p-3 sm:p-4 rounded-full text-purple-600 transition-transform duration-300 hover:rotate-12">
              {feature.icon}
            </div>

            <h3 className="text-sm sm:text-lg font-semibold text-gray-800 text-center">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

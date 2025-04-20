import bannerImage from "../assets/medium-shot-kid-taking-notes.jpg";
import elc_course_english from "../assets/elc-course-english.jpg";
import elc_course_maths from "../assets/elc-course-maths.jpg";
import elc_course_science from "../assets/elc-course-science.jpg";
import elc_course_business from "../assets/elc-course-business.jpg";
import elc_course_cs from "../assets/elc-course-cs.jpg";
import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Courses() {
  // Inside your component...
  const sliderRef = useRef(null);

  const scrollTo = (direction) => {
    const container = sliderRef.current;
    if (!container) return;
    const slideWidth = container.offsetWidth;
    container.scrollBy({
      left: direction === "left" ? -slideWidth : slideWidth,
      behavior: "smooth",
    });
  };

  const courses = [
    {
      title: "Mathematics",
      description:
        "Develop problem-solving skills and logical thinking through numbers, algebra, geometry, and more through the help of our digital whiteboard experience.",
      image: elc_course_maths,
      borderColor: "border-purple-600",
      bgColor: "bg-purple-600",
    },
    {
      title: "Science",
      description:
        "Explore the wonders of physics, chemistry, and biology to understand the world around you.",
      image: elc_course_science,
      borderColor: "border-purple-400",
      bgColor: "bg-purple-400",
    },
    {
      title: "English",
      description:
        "Enhance reading, writing, and communication skills through literature and grammar lessons.",
      image: elc_course_english,
      borderColor: "border-purple-600",
      bgColor: "bg-purple-600",
    },
    {
      title: "Business Studies",
      description:
        "Learn about economic principles, financial accounting, the global tourism industry, and the fundamentals of business management.",
      image: elc_course_business,
      borderColor: "border-purple-400",
      bgColor: "bg-purple-400",
    },
    {
      title: "Computer Science",
      description:
        "Discover the fundamentals of programming, algorithms, and digital literacy.",
      image: elc_course_cs,
      borderColor: "border-purple-600",
      bgColor: "bg-purple-600",
    },
  ];

  return (
    <div
      id="courses"
      className="mx-[10%] py-[40px] relative flex flex-col justify-between"
    >
      <h2 className="font-bold tracking-tight text-purple-900 sm:text-4xl text-xl font-montserrat">
        Courses
      </h2>
      <p className="mt-2 mb-[40px] text-gray-800 sm:text-lg text-md font-montserrat">
        Explore our courses from 1st to 12th grade.
      </p>

      {/* Desktop Grid View */}
      <div className="hidden sm:flex flex-wrap -mx-4">
        {courses.map((course, index) => (
          <div key={index} className="w-full sm:w-1/2 px-4 mb-10">
            <div className="relative h-full transition-transform transform hover:scale-105">
              <span
                className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${course.bgColor} rounded-lg`}
              ></span>
              <div
                className={`relative h-full p-5 bg-white border-2 ${course.borderColor} rounded-lg shadow-lg hover:shadow-2xl transition-shadow`}
              >
                <h3 className="mt-2 mb-[25px] sm:text-lg text-md font-bold text-gray-800 font-montserrat">
                  {course.title}
                </h3>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <p className="mb-4 text-gray-800 text-md sm:text-lg font-montserrat">
                  {course.description}
                </p>
                {/* <button
                  className={`px-4 py-2 text-white rounded ${course.bgColor} font-montserrat transition-transform transform hover:scale-110 hover:brightness-110 sm:text-lg text-sm`}
                >
                  Learn More
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden">
        {/* Scrollable Slider */}
        <div
          ref={sliderRef}
          className="overflow-x-auto snap-x snap-mandatory flex gap-4 pb-4 scroll-smooth course-scrollbar"
        >
          {courses.map((course, index) => (
            <div key={index} className="min-w-full snap-center md:px-4">
              <div className="relative h-full transition-transform transform">
                <span
                  className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${course.bgColor} rounded-lg`}
                ></span>
                <div
                  className={`relative h-full p-5 bg-white border-2 ${course.borderColor} rounded-lg shadow-lg transition-shadow`}
                >
                  <h3 className="mt-2 mb-[25px] text-md font-bold text-gray-800 font-montserrat">
                    {course.title}
                  </h3>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <p className="mb-4 text-gray-800 text-md font-montserrat">
                    {course.description}
                  </p>
                  {/* <button
                    className={`px-4 py-2 text-white rounded ${course.bgColor} font-montserrat transition-transform transform hover:scale-110 hover:brightness-110 text-sm`}
                  >
                    Learn More
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows Under the Slider */}
        <div className="flex justify-center gap-6 mt-4">
          <button
            onClick={() => scrollTo("left")}
            className="bg-yellow-500 text-white p-3 rounded-full shadow-md active:scale-95 course-slide-left-arw course-slide-arw"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={() => scrollTo("right")}
            className="bg-yellow-500 text-white p-3 rounded-full shadow-md active:scale-95 course-slide-right-arw course-slide-arw"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

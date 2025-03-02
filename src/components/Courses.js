import bannerImage from '../assets/medium-shot-kid-taking-notes.jpg';
import elc_course_english from '../assets/elc-course-english.jpg';
import elc_course_maths from '../assets/elc-course-maths.jpg';
import elc_course_science from '../assets/elc-course-science.jpg';
import elc_course_history from '../assets/elc-course-history.jpg';
import elc_course_cs from '../assets/elc-course-cs.jpg';

export default function Courses() {
  const courses = [
    {
      title: "Mathematics",
      description: "Develop problem-solving skills and logical thinking through numbers, algebra, geometry, and more.",
      image: elc_course_maths,
      borderColor: "border-purple-500",
      bgColor: "bg-purple-500",
    },
    {
      title: "Science",
      description: "Explore the wonders of physics, chemistry, and biology to understand the world around you.",
      image: elc_course_science,
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-500",
    },
    {
      title: "English",
      description: "Enhance reading, writing, and communication skills through literature and grammar lessons.",
      image: elc_course_english,
      borderColor: "border-purple-400",
      bgColor: "bg-purple-400",
    },
    {
      title: "History",
      description: "Learn about historical events, cultures, and important figures that shaped our world.",
      image: elc_course_history,
      borderColor: "border-yellow-400",
      bgColor: "bg-yellow-400",
    },
    {
      title: "Computer Science",
      description: "Discover the fundamentals of programming, algorithms, and digital literacy.",
      image: elc_course_cs,
      borderColor: "border-purple-600",
      bgColor: "bg-purple-600",
    },
  ];

  return (
    <div id="courses" className="mx-[10%] py-[40px] relative flex flex-col justify-between">
      <h2 className="font-bold tracking-tight text-purple-900 sm:text-4xl text-xl font-montserrat">Courses</h2>
      <p className="mt-2 mb-[40px] text-gray-800 sm:text-lg text-md font-montserrat">Explore our courses from 1st to 12th grade.</p>
      <div className="w-full">
        <div className="flex flex-wrap -mx-4">
          {courses.map((course, index) => (
            <div key={index} className="w-full sm:w-1/2 px-4 mb-10">
              <div className="relative h-full transition-transform transform hover:scale-105">
                <span className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 ${course.bgColor} rounded-lg`}></span>
                <div className={`relative h-full p-5 bg-white border-2 ${course.borderColor} rounded-lg shadow-lg hover:shadow-2xl transition-shadow`}>                  
                  <h3 className="mt-2 mb-[25px] sm:text-lg text-md font-bold text-gray-800 font-montserrat">{course.title}</h3>
                  <img src={course.image} alt={course.title} className="max-sm:w-full w-[50%] h-40 object-cover rounded-lg mb-4" />
                  <p className="mb-4 text-gray-800 text-md sm:text-lg font-montserrat">{course.description}</p>
                  <button className={`px-4 py-2 text-white rounded ${course.bgColor} font-montserrat transition-transform transform hover:scale-110 hover:brightness-110 sm:text-lg text-sm`}>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react";
import { GraduationCap, BookOpen, Video } from "lucide-react"; // Importing icons

// Hook for Animated Count-Up Effect
function useAnimatedCounter(targetValue, duration = 2000) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let startTime = performance.now();

    function updateCounter(timestamp) {
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      setCurrentValue(Math.floor(progress * targetValue));

      if (progress < 1) requestAnimationFrame(updateCounter);
    }

    requestAnimationFrame(updateCounter);
  }, [targetValue, duration]);

  return currentValue >= 1000 ? `${Math.floor(currentValue / 1000)}K` : currentValue;
}

export default function Statistics() {
  const studentsEnrolled = useAnimatedCounter(1000);
  const classesCompleted = useAnimatedCounter(20000);
  const availableCourses = useAnimatedCounter(30);

  return (
    <section id="satistics" className="bg-gradient-to-br from-purple-50 to-gray-100 pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl font-bold tracking-tight text-purple-900 sm:text-4xl font-montserrat">
          Empowering Education for Everyone
        </h2>
        <p className="mt-4 mb-6 text-gray-800 text-md sm:text-lg font-montserrat">
          Our platform helps thousands of students unlock new opportunities and achieve their dreams.
        </p>
      </div>

      <div className="mt-[3.5rem] bg-white pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gradient-to-br from-purple-50 to-gray-100 pt-12 sm:pt-16"></div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg bg-purple-600 text-yellow-900 shadow-lg sm:grid sm:grid-cols-3">
                <StatCard value={studentsEnrolled} label="Students Enrolled" icon={GraduationCap} />
                <StatCard value={classesCompleted} label="Classes Completed" icon={BookOpen} border="sm:border-l sm:border-r" />
                <StatCard value={availableCourses} label="Courses Available" icon={Video} border="sm:border-l" />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Statistic Card Component (Hover Changes Background to White)
function StatCard({ value, label, icon: Icon }) {
  return (
    <div
      className={`relative flex flex-col items-center border-gray-100 p-6 text-center transition-all duration-300 group cursor-pointer bg-purple-600 hover:bg-white hover:shadow-xl stat-cards-mobile`}
    >
      {/* Icon - Jumps when hovering over card */}
      <div className="absolute top-[-2rem] bg-yellow-500 rounded-full p-3 shadow-lg transition-transform duration-700 group-hover:animate-bounce">
        <Icon className="h-10 w-10 text-white group-hover:text-white" />
      </div>

      {/* Number - Subtle Scale, Color & Text Change on Hover */}
      <dd className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white transition-all duration-700 group-hover:text-purple-700">
        {value}+
      </dd>

      {/* Label - Subtle Scale, Color & Text Change on Hover */}
      <dt className="mt-2 text-white font-light text-md sm:text-xl leading-relaxed font-montserrat transition-all duration-700 group-hover:text-purple-700">
        {label}
      </dt>
    </div>
  );
}

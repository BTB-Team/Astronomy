
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div className="  text-white/70
          rounded-2xl
          border border-white/10
          backdrop-blur-md
          bg-black/11
        border-white/20
        transition-all duration-300
       
        hover:border-transparent
        hover:shadow-lg
        hover:shadow-purple-500/50 ">

      <div className="overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full bg-red h-[220px] object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="p-5 text-center">

        <h2 className="text-2xl font-bold mb-5 text-white">
          {course.title}
        </h2>

        <Link to={`/classes/${course.slug}`}>
          <button className="
              px-8
              py-4
              rounded-full
              bg-[linear-gradient(90deg,#D66BFF_0%,#B85CFF_50%,#8B5CF6_100%)]
              transition-all
              duration-300
              text-white
              font-semibold
              shadow-2xl
             justify-right">
          جزییات کورس
         
          </button>
        </Link>

      </div>
    </div>
  );
}
import CourseCard from "./coursecard";
import courses from "../../data/data";

export default function CoursesTable() {
  return (
    /* کلاس‌های واکنش‌گرا جایگزین grid-cols-3 قبلی شد */
    <div className="
      w-full 
      mt-20 
      grid 
      grid-cols-1 
      md:grid-cols-2 
      xl:grid-cols-3 
      gap-8"
    >
      {courses.map((course) => (
        <CourseCard key={course.slug} course={course} />
        
      ))}
    </div>
  );
}

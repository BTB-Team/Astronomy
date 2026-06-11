import CoursesTable from "../../../components/class/CoursesTable";
import ClassesHero from "../../../components/class/hero";
import Gouls from "../../../components/class/gouls";
import PageTitle from "../../../components/pagetitle";
export default function OurClass() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-5">
      <PageTitle title="titles.classes"/>
      <ClassesHero />
      <CoursesTable />
      <Gouls />
      
    </div>
  );
}
import { courseCategories } from "@/config";
import banner from "../../../assets/banner-img.jpg";
import { Button } from "@/components/ui/button";
import { useContext, useEffect } from "react";
import { StudentContext } from "@/context/student-context";
import {
  checkCoursePurchaseInfoService,
  fetchStudentViewCourseListService,
} from "@/services";
import { AuthContext } from "@/context/auth-context";
import { useNavigate } from "react-router-dom";

function StudentHomePage() {
  const { studentViewCoursesList, setStudentViewCoursesList } =
    useContext(StudentContext);
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleNavigateToCoursesPage(getCurrentId) {
    console.log(getCurrentId);
    sessionStorage.removeItem("filters");
    const currentFilter = {
      category: [getCurrentId],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    navigate("/courses");
  }

  async function fetchAllStudentViewCourses() {
    const response = await fetchStudentViewCourseListService();
    if (response?.success) setStudentViewCoursesList(response?.data);
  }

  // async function handleCourseNavigate(getCurrentCourseId) {
  //   console.log(getCurrentCourseId);
    
  //   const response = await checkCoursePurchaseInfoService(
  //     getCurrentCourseId, 
  //     auth?.user?._id
  //   );
  //   if (response?.success) {
  //     if (response?.data) {
  //       navigate(`/course-progress/${getCurrentCourseId}`);
  //     } else {
  //       navigate(`/course/details/${getCurrentCourseId}`);
  //     }
  //   }
  // }

  useEffect(() => {
    fetchAllStudentViewCourses();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="flex flex-col lg:flex-row items-center justify-between py-12 px-6 lg:px-12 bg-gradient-to-r from-teal-400 to-blue-500 text-white">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-5xl font-extrabold mb-4">Learning that gets you</h1>
          <p className="text-xl mb-6">
            Skills for your present and your future. Get started with us today!
          </p>
          <Button className="bg-white text-teal-500 font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-100">
            Get Started
          </Button>
        </div>
        <div className="lg:w-1/2 mt-8 lg:mt-0">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
      <section className="py-12 px-6 lg:px-12 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Course Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {courseCategories.map((categoryItem) => (
            <Button
              className="justify-start bg-teal-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-teal-600"
              key={categoryItem.id}
              onClick={() => handleNavigateToCoursesPage(categoryItem.id)}
            >
              {categoryItem.label}
            </Button>
          ))}
        </div>
      </section>
      <section className="py-12 px-6 lg:px-12 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {studentViewCoursesList && studentViewCoursesList.length > 0 ? (
            studentViewCoursesList.map((courseItem) => (
              <div
                // onClick={() => handleCourseNavigate(courseItem?._id)}
                onClick={() => navigate(`/course/details/${courseItem?._id}`)}
                className="bg-white border rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                key={courseItem?._id}
              >
                <img
                  src={courseItem?.image}
                  alt={courseItem?.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{courseItem?.title}</h3>
                  <p className="text-sm text-gray-700 mb-2">
                    {courseItem?.instructorName}
                  </p>
                  <p className="font-bold text-xl text-teal-500">
                    Rs {courseItem?.pricing}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1 className="text-center text-xl font-semibold">No Courses Found</h1>
          )}
        </div>
      </section>
    </div>
  );
}

export default StudentHomePage;
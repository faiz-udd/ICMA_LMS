import FormControls from "@/components/common-form/form-controls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { courseLandingPageFormControls } from "@/config";
import { InstructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseLanding() {
  const { courseLandingFormData, setCourseLandingFormData } =
    useContext(InstructorContext);
  return (
    <Card className="container mx-auto p-6 bg-gray-50 shadow-lg rounded-lg">
      <CardHeader className="bg-teal-600 text-white p-4 rounded-t-lg">
        <CardTitle className="text-2xl font-bold">Course Landing Page</CardTitle>
      </CardHeader>
      <CardContent className="bg-white p-4 rounded-b-lg">
        <FormControls
          formControls={courseLandingPageFormControls}
          formData={courseLandingFormData}
          setFormData={setCourseLandingFormData}
        />
      </CardContent>
    </Card>
  );
}

export default CourseLanding;
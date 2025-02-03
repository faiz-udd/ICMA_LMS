import { CardContent, CardHeader, CardTitle,Card } from "@/components/ui/card";
import FormControls from "@/components/ui/common-form/form-controls";
import { courseCreatedLandingPageFromControls } from "@/config";
import { instructorContext } from "@/context/instructor-context";
import { useContext } from "react";

function CourseLandingPage(){
    const {courseLandingFormData, setCourseLandingFormData} = useContext(instructorContext)
    return(
        <Card>
            <CardHeader>
                <CardTitle>Course Landing Page</CardTitle>
            </CardHeader>
            <CardContent>
                <FormControls
                    formControls={courseCreatedLandingPageFromControls}
                    formData={courseLandingFormData}
                    setFormData={setCourseLandingFormData}
                />
            </CardContent>
        </Card>
    )
}
export default CourseLandingPage;
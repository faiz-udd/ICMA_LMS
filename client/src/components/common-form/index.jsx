import { Button } from "../ui/button";
import FormControls from "./form-controls";

function CommonForm({
  handleSubmit,
  buttonText,
  formControls = [],
  formData,
  setFormData,
  isButtonDisabled = false,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* render form controls here */}
      <FormControls
        formControls={formControls}
        formData={formData}
        setFormData={setFormData}
      />
      <Button
        disabled={isButtonDisabled}
        type="submit"
        className="mt-5 w-full bg-teal-600 hover:bg-teal-700 text-white"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
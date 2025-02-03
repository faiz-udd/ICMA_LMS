 import { Button } from "../button";
import FormControls from "./form-controls"; // FormControls is a separate file

function CommonForm({ 
     buttonText, 
     formControls = [], 
     formData, 
     setFormData,
     isButtonDisabled = false,
     handleSubmit
     }) {
    return (
        <form onSubmit={handleSubmit}>
            {/* Render form controls here */}
            <FormControls 
                formControls={formControls}
                formData={formData}
                setFormData={setFormData}
            />
            <Button type="submit" disabled = {isButtonDisabled} className="mt-5 w-full">{buttonText || 'Submit'}</Button>
        </form>
    );
}

export default CommonForm;

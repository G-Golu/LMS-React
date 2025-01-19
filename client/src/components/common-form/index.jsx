import { Button } from "../ui/button";
import FormControls from "./form-controls";

// here i remove {} from line no 5 : {(handleSubmit, buttonText, formControls = [], formData, setFormData) }
function CommonForm(handleSubmit, buttonText, formControls = [], formData, setFormData) {
  return (
    <form onSubmit={handleSubmit}>

    {/*  render form controls here*/}
    <FormControls formControls={formControls} formData={formData} setFormData={setFormData}/>
    <Button type="submit" className="w-full mt-5">{buttonText || "Submit"}</Button>
    </form>
  );
}

export default CommonForm;
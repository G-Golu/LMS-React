import React from 'react';

import { Button } from "../ui/button";
import FormControls from './form-controls';

function CommonForm({ handleSubmit, buttonText, formControls = [], formData, setFormData  }) {
    return (
        <form onSubmit={handleSubmit}>
            {/* render form controls here */}
            <FormControls  
            formControls={formControls}
            formData={formData}
            setFormData={setFormData}/>
            <Button type="submit" className="w-full mt-5">{buttonText || "Submit"}</Button>
            

        </form>
    );
}

export default CommonForm;

















// chatgpt using correct code below

// import PropTypes from "prop-types"; // Import PropTypes for prop validation
// import { Button } from "../ui/button"; // Import Button component

// function CommonForm({ handleSubmit, buttonText }) {
//     return (
//         <form onSubmit={handleSubmit}>
//             {/* Render form controls here */}
//             <Button type="submit">{buttonText || "Submit"}</Button>
//         </form>
//     );
// }

// // Add prop types validation
// CommonForm.propTypes = {
//     handleSubmit: PropTypes.func.isRequired, // handleSubmit is a required function
//     buttonText: PropTypes.string, // buttonText is an optional string
// };

// // Set default props
// CommonForm.defaultProps = {
//     buttonText: "Submit", // Default text for the button
// };

// export default CommonForm;

// Function to validate form inputs
function Validation(values) {
    let errors = {}; // Initialize an empty object to store validation errors
    const Name_pattern = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/; // Regular expression pattern to validate name
    const ID_pattern = /^[0-9]+$/; // Regular expression pattern to validate ID

    // Check if name is empty
    if (values.Name === "") {
        errors.Name = "Name is required"; // Set error message if name is empty
    } 
    // Check if name matches the pattern
    else if (!Name_pattern.test(values.Name)) {
        errors.Name = "Name is invalid"; // Set error message if name is invalid
    } 
    // If name is valid, set error message to empty string
    else {
        errors.Name = "";
    }

    // Check if ID is empty
    if (values.ID === "") {
        errors.ID = "ID is required"; // Set error message if ID is empty
    } 
    // Check if ID matches the pattern
    else if (!ID_pattern.test(values.ID)) {
        errors.ID = "ID is invalid"; // Set error message if ID is invalid
    } 
    // If ID is valid, set error message to empty string
    else {
        errors.ID = "";
    }

    return errors; // Return the object containing validation errors
}

export default Validation; // Export the validation function

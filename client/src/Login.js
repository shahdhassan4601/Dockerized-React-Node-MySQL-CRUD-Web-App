import React, { useState } from "react"; // Import React and useState hook
import Validation from "./LoginValidation"; // Import validation function
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from react-router-dom

function Login() {
    // Initialize state for form values and errors
    const [values, setValues] = useState({
        Name: '',
        ID: ''
    });
    const [errors, setErrors] = useState({});

    // Access the navigate function to redirect to another route
    const navigator = useNavigate();

    // Function to handle input changes
    const handleInput = (event) => setValues({ ...values, [event.target.name]: event.target.value });

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Validate form inputs
        setErrors(prevState => ({ ...prevState, ...Validation(values) }));
        // If there are no validation errors, send a POST request to the server
        if (errors.Name === "" && errors.ID === "") {
            axios.post('http://localhost:5000/login', values)
                .then(res => {
                    // Redirect to the home page if login is successful
                    if (res.data === "Login successful") {
                        navigator('/home');
                    }
                    // Show an alert if no record is found
                    if (res.data === "No record") {
                        alert("No record found");
                    }
                })
                .catch(err => console.log(err)); // Log any errors that occur during the request
        }
    };

    // Render the Login component
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center bg-dark'>
            <div className='w-50 h-40 p-4 m-2 bg-light  rounded'>
                <h2 className="mb-4">Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="Name"><strong>Name</strong></label><br/>
                        <input type="text" placeholder='Enter your name' name="Name" onChange={handleInput} className='w-100 form_control' />
                        <p className='text-danger'>{errors.Name}</p>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="ID"><strong>ID</strong></label><br/>
                        <input type="number" placeholder='Enter your ID' name="ID" onChange={handleInput} className=' w-100 form_control' />
                        <p className='text-danger'>{errors.ID}</p>
                    </div>
                    <button type="submit" className='w-100 mt-5 btn btn-success'><strong>Login</strong></button>
                </form>
            </div>
        </div>
    );
}

export default Login;

import React, { useState } from 'react'; // Import React and useState hook
import axios from 'axios'; // Import axios for making HTTP requests
import { useNavigate } from 'react-router'; // Import useNavigate hook from react-router

function Create() {
    // Initialize state for form values
    const [values, setValues] = useState({
        ID: '',
        Name: '',
        Age: '',
        GPA:''
    });

    // Access the navigate function to redirect to another route
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Send a POST request to the server with form values
        axios.post('http://localhost:5000/student', values)
            .then(res => { 
                console.log(res); // Log the response from the server
                navigate('/home'); // Redirect to the home page after successful submission
            })
            .catch(err => console.log(err)); // Log any errors that occur during the request
    };

    // Render the create student form
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center bg-dark'>
            <div className='w-50 bg-light rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Student ID</label><br/>
                        <input type="number" placeholder='Enter ID' className='form_control' 
                            onChange={e => setValues({...values, ID: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label><br/>
                        <input type="text" placeholder='Enter Name' className='form_control' 
                            onChange={e => setValues({...values, Name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label><br/>
                        <input type="number" placeholder='Enter Age' className='form_control' 
                            onChange={e => setValues({...values, Age: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">GPA</label><br/>
                        <input type="float" placeholder='Enter GPA' className='form_control' 
                            onChange={e => setValues({...values, GPA: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Create;

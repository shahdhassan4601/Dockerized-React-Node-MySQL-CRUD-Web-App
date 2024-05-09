import React, { useEffect, useState } from "react"; // Import React, useEffect, and useState hooks
import axios from "axios"; // Import axios for making HTTP requests
import { useParams } from "react-router"; // Import useParams hook from react-router-dom
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

function Read() {
    // Extract the id parameter from the URL
    const { id } = useParams();
    // Initialize state to store student data
    const [student, setStudent] = useState({});

    // Fetch student data from the server when component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/read/' + id) // Send GET request to server
            .then(res => {
                console.log(res); // Log the response from the server
                setStudent(res.data[0]); // Update state with student data
            })
            .catch(err => console.log(err)); // Log any errors that occur during the request
    }, []); // Provide an empty dependency array to run the effect only once
    
    // Render the Read component
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center bg-dark'>
            <div className='w-50 bg-light rounded p-3'>
                <div className='p-2'>
                    <h2>Student's Information</h2>
                    <h5>ID: {student.ID}</h5>
                    <h5>Name: {student.Name}</h5>
                    <h5>Age: {student.Age}</h5>
                    <h5>GPA: {student.GPA}</h5>
                </div>
                {/* Link to navigate back to home page */}
                <Link to='/home' className='btn btn-primary me-2'>Back</Link>
                {/* Link to navigate to edit page */}
                <Link to={`/edit/${student.ID}`} className='btn btn-info'>Edit</Link>
            </div>
        </div>
    );
}

export default Read;

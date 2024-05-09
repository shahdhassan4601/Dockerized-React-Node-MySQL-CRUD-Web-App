import React, { useEffect, useState } from "react"; // Import React, useEffect, and useState hooks
import axios from "axios"; // Import axios for making HTTP requests
import { useNavigate, useParams } from "react-router"; // Import useNavigate and useParams hooks from react-router

function Update(){

    // Extract the id parameter from the URL
    const { id } = useParams();
    
    // Initialize state to store student data
    const [values, setValues] = useState({
        Name: '',
        Age: '',
        GPA: ''
    });

    // Fetch student data from the server when component mounts
    useEffect(() => {
        axios.get('http://localhost:5000/read/'+id) // Send GET request to server
        .then(res =>{ 
            console.log(res); // Log the response from the server
            // Update state with fetched student data
            setValues({
                Name: res.data[0].Name,
                Age: res.data[0].Age,
                GPA: res.data[0].GPA
            });
        })
        .catch(err => console.log(err)); // Log any errors that occur during the request
    }, []);

    // Access the navigate function to redirect to another route
    const navigate = useNavigate();

    // Function to handle updating student information
    const handleUpdate = (event) =>{
        event.preventDefault(); // Prevent default form submission behavior
        axios.put('http://localhost:5000/update/'+id, values) // Send PUT request to server
        .then(res => { 
            console.log(res); // Log the response from the server
            navigate('/home'); // Redirect to the home page after successful update
        }).catch(err => console.log(err)); // Log any errors that occur during the request
    };

    // Render the Update component
    return(
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center bg-dark'>
            <div className='w-50 bg-light rounded p-3'>
                <form onSubmit={handleUpdate}>
                    <h2>Edit Student Information</h2>
                    <div className='mb-2'>
                        <label htmlFor="">Name</label><br/>
                        <input type="text" placeholder='Enter Name' className='form-control' value={values.Name}
                            onChange={e => setValues({...values, Name: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">Age</label><br/>
                        <input type="number" placeholder='Enter Age' className='form-control' value={values.Age}
                            onChange={e => setValues({...values, Age: e.target.value})}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="">GPA</label><br/>
                        <input type="decimal" placeholder='Enter GPA' className='form-control' value={values.GPA}
                            onChange={e => setValues({...values, GPA: e.target.value})}/>
                    </div>
                    <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    );
}

export default Update;

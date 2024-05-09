import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState hooks
import axios from 'axios'; // Import axios for making HTTP requests
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom

function Home() {
    // Initialize state to store fetched data
    const [data, setData] = useState([]);

    // Fetch data from server when component mounts
    useEffect(() => {
        axios.get('http://localhost:5000') // Send GET request to server
        .then(res => { 
          console.log(res); // Log the response from the server
          setData(res.data); // Update state with fetched data
        })
        .catch(err => console.log(err)); // Log any errors that occur during the request
    }, []); // Empty dependency array ensures this effect runs only once, equivalent to componentDidMount

    // Function to handle deletion of a student
    const handleDelete = (id) => {
        axios.delete('http://localhost:5000/delete/'+id) // Send DELETE request to server
        .then(res =>{
            window.location.reload(); // Reload the page after successful deletion
        })
        .catch(err => console.log(err)); // Log any errors that occur during the request
    };

    // Render the Home component
    return (
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center bg-dark'>
            <div className='w-50 bg-light rounded p-3'>
                <h2>Students List</h2>
                {/* Link to Create component */}
                <div className='d-flex justify-content-end'>
                    <Link to="/create" className='btn btn-success'>Create +</Link>
                </div>
                {/* Table to display student data */}
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>GPA</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map over data array to render student rows */}
                        {data.map((student, index) => {
                            return (
                                <tr key={index}>
                                    <td>{student.ID}</td>
                                    <td>{student.Name}</td>
                                    <td>{student.Age}</td>
                                    <td>{student.GPA}</td>
                                    <td>
                                        {/* Link to Read component */}
                                        <Link to={`/read/${student.ID}`} className='btn btn-sm btn-info'>Read</Link>
                                        {/* Link to Update component */}
                                        <Link to={`/edit/${student.ID}`} className='btn btn-sm btn-primary mx-2'>Edit</Link>
                                        {/* Button to delete student */}
                                        <button onClick={() => handleDelete(student.ID)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>    
    );
}

export default Home;

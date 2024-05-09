// Import necessary modules
import express from 'express'; // Import Express framework
import mysql from 'mysql'; // Import MySQL module
import cors from 'cors'; // Import CORS for handling cross-origin requests

// Initialize Express app
const app = express();
app.use(cors()); // Use CORS middleware for cross-origin requests
app.use(express.json()); // Parse incoming request bodies in JSON format

// Create MySQL database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost", // Database host, default is localhost
    port: process.env.DB_PORT || "3306", // Database port, default is 3306
    user: process.env.DB_USER || "root", // Database user, default is root
    password: process.env.DB_PASSWORD || "4601", // Database password, default is 4601
    database: process.env.DB_NAME || "studentsdb", // Database name, default is studentsdb
});

// Define route for fetching all students
app.get('/', (req, res) => {
    const sql = "SELECT * FROM students"; // SQL query to select all students from database
    // Execute SQL query
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err); // Log any errors that occur during query execution
        } else {
            res.send(result); // Send the query result as response
        }
    });
});

// Define route for student login
app.post('/login', (req, res) => {
    const sql = "SELECT * FROM students WHERE ID = ? AND Name = ?"; // SQL query to select student by ID and Name
    const { ID, Name } = req.body; // Extract ID and Name from request body
    // Execute SQL query with ID and Name parameters
    db.query(sql, [ID, Name], (err, data) => {
        if (err) {
            // Log and send error response if there's an error in the query
            console.error("Error executing SQL query:", err);
            return res.status(500).json({ error: "Internal Server Error" });
        } else if (data && data.length > 0) {
            // Send success response if a record is found
            return res.json("Login successful");
        } else {
            // Send error response if no record is found
            return res.status(404).json({ error: "No record found" });
        }
    });
});

// Define route for adding a new student
app.post('/student', (req, res) => {
    const sql = "INSERT INTO students (ID, Name, Age, GPA) VALUES (?,?,?,?) "; // SQL query to insert new student into database
    const { ID, Name, Age, GPA } = req.body; // Extract student details from request body
    const values = [ID, Name, Age, GPA]; // Prepare values for SQL query
    // Execute SQL query to insert new student
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err); // Log any errors that occur during query execution
        } else {
            res.send(result); // Send the query result as response
        }
    });
});

// Define route for reading a student by ID
app.get('/read/:id', (req, res) => {
    const sql = "SELECT * FROM students WHERE ID = ?"; // SQL query to select student by ID
    const id = req.params.id; // Extract ID parameter from request
    // Execute SQL query with ID parameter
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err); // Log any errors that occur during query execution
        } else {
            res.send(result); // Send the query result as response
        }
    });
});

// Define route for updating a student by ID
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE students SET Name = ?, Age = ?, GPA = ? WHERE ID = ?"; // SQL query to update student details
    const { Name, Age, GPA } = req.body; // Extract updated student details from request body
    const values = [Name, Age, GPA, req.params.id]; // Prepare values for SQL query
    // Execute SQL query to update student
    db.query(sql, values, (err, result) => {
        if (err) {
            console.log(err); // Log any errors that occur during query execution
        } else {
            res.send(result); // Send the query result as response
        }
    });
});

// Define route for deleting a student by ID
app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM students WHERE ID = ?"; // SQL query to delete student by ID
    // Execute SQL query with ID parameter
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            console.log(err); // Log any errors that occur during query execution
        } else {
            res.send(result); // Send the query result as response
        }
    });
});

// Start the server and listen on port 5000
app.listen(5000, () => {
    console.log("Server is running on port 5000"); // Log a message when the server starts
});

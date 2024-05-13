# Dockerized-React-Node-MySQL-CRUD-Web-App
This example serves as a beginner-friendly resource to learn about full-stack Docker containerization in a practical application. It provides a simplified implementation of a full-stack application using React.js, Node.js, and MySQL, all orchestrated with Docker Compose.

## Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
  - [Server Side](#server-side)
  - [Client Side](#client-side)
  - [Shared](#shared)
- [Getting Started](#getting-started)
  - [Setup](#setup)
  - [Installation & Run](#installation-&-run)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

This project is a simple student management system built using Node.js for the server-side and React.js for the client-side. It allows users to perform CRUD (Create, Read, Update, Delete) operations on student records.

## Project Structure
- **Server Side**
  - **Dockerfile (server/Dockerfile):** Defines the configuration for building the Docker image for the server-side application. It installs dependencies, copies the application code, and sets the command to run the server.
  - **server.js:** Node.js server file responsible for handling HTTP requests and interacting with the MySQL database.
  - **package.json:** Contains metadata about the Node.js project and its dependencies.
- **Client Side**
  - **Dockerfile (client/Dockerfile):** Defines the configuration for building the Docker image for the client-side application. It installs dependencies, copies the application code, builds the React app, and configures Nginx to serve the built files.
  - **src:** Directory containing the client-side React application code.
    - **App.js:** Main component responsible for rendering different pages of the application.
    - **Home.js:** Component to display the list of students and perform CRUD operations.
    - **Create.js:** Component to add a new student record.
    - **Read.js:** Component to view detailed information about a specific student.
    - **Update.js:** Component to edit existing student records
    - **Login.js:** Component to authenticate users before accessing the application.
    - **LoginValidation.js:** Helper function for validating login form inputs.
  - **package.json:** Contains metadata about the React.js project and its dependencies.
- **Shared**
  - **README.md:** Provides an overview of the project, instructions for running it, and explanations of each file in the project.
  - **docker-compose.yml:** Docker Compose file for orchestrating the containers. It defines services for the server, client, and MySQL database, along with their configurations.
  - **init.sql:** SQL file used by the MySQL database container to initialize the database schema and insert sample data.

## Getting Started
  - ### Setup:
      Before running the project, make sure you have the following installed:
          
      Docker: [Download and Install Docker](https://docs.docker.com/get-docker/)
- ### Installation & Run:
    1. Clone the repository:
  
        ```bash
        git clone https://github.com/shahdhassan4601/Dockerized-React-Node-MySQL-CRUD-Web-App.git
        ```
        
    2. Move to project-directory:

        ```bash
        cd project-directory
        ```
        
    3. Login to MySQL using the specified port, username, and password, and make sure they are match the same database configuration in server.js file in server-side:
        
        Host: ```localhost```
        Port: ```3306```
        Username: ```root```
        Password: ```4601```
       
       - You can use MySQL client such as [MySQL Workbench](https://www.mysql.com/products/workbench/)
    4. Run the following command to build and start the Docker containers:

        ```bash
        docker-compose up --build
        ```
## Usage
Once you run the docker compose file, you can access the React app by opening the following URL in your web browser:
    [http://localhost:3000](http://localhost:3000)

## Technologies Used
  - **Server Side:**
    - Node.js
    - Express.js
    - MySQL
    - Axios
  - **Client Side:**
    - React.js
    - React Router
    - Axios
    - Bootstrap
## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

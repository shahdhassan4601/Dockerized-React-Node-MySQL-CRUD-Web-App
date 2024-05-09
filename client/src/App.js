import React from 'react'; // Import React library
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import Home from './Home'; // Import Home component
import Create from './Create'; // Import Create component
import Read from './Read'; // Import Read component
import Update from './Update'; // Import Update component
import Login from './Login'; // Import Login component
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  return (
    // BrowserRouter provides routing functionality to our app
    <BrowserRouter>
      {/* Routes component manages route matching and rendering */}
      <Routes>
        {/* Route for Login component, rendered when the path is '/' */}
        <Route path='/' element={<Login/>} />
        {/* Route for Home component, rendered when the path is '/home' */}
        <Route path="/home" element={<Home/>} />
        {/* Route for Create component, rendered when the path is '/create' */}
        <Route path='/create' element={<Create/>} />
        {/* Route for Read component, rendered when the path matches '/read/:id' */}
        <Route path='/read/:id' element={<Read/>} />
        {/* Route for Update component, rendered when the path matches '/edit/:id' */}
        <Route path='/edit/:id' element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

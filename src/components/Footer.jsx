// Import the React library to use React components
import React from 'react';

// Define a functional component called Footer
function Footer() {
    // Get the current year using JavaScript's Date object
    const year = new Date().getFullYear();

    return (
        // Return a footer element containing a paragraph displaying the copyright notice
        <footer>
            {/* Display the copyright notice, including the current year */}
            <p>Copyright ⓒ {year}.</p>
        </footer>
    );
};

// Export the Footer component to make it available for other parts of the application
export default Footer;

// In summary, this code defines a React functional component called Footer. The component calculates the current year using new Date().getFullYear() and renders a footer element containing a paragraph displaying the copyright notice, including the current year. This Footer component can be used to create a footer section for an application, providing the copyright information for the current year.
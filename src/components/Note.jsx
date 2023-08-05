// Import the React library to use React components
import React from 'react';

// Import the DeleteIcon component from the '@mui/icons-material' package
import DeleteIcon from '@mui/icons-material/Delete';

// Define a functional component called Note which takes 'props' as input
function Note(props) {
    return (
        // Return a div element with the class name 'note'
        <div className='note'>
            {/* Display the 'title' prop value as the heading */}
            <h1>{props.title}</h1>
            {/* Display the 'content' prop value as the paragraph */}
            <p>{props.content}</p>
            {/* 
                Create a button with an 'onClick' event handler.
                When the button is clicked, it calls the 'onDelete' function from props,
                passing the 'id' prop as an argument.
                This is a callback mechanism to handle the delete action for this Note component.
            */}
            <button onClick={() => { props.onDelete(props.id); }}>
                {/* Render the DeleteIcon component */}
                <DeleteIcon />
            </button>
        </div>
    );
};

// Export the Note component to make it available for other parts of the application
export default Note;

// In summary, this code defines a React functional component called Note. The component receives props as input and renders a div containing a heading (h1) displaying the title prop, a paragraph (p) displaying the content prop, and a delete button with a DeleteIcon. When the delete button is clicked, it triggers the onDelete function from the props, passing the id prop as an argument to handle the delete action for the specific Note component.
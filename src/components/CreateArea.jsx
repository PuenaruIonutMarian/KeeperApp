// Import React and the required components from Material-UI
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

// Define a functional component called CreateArea, which takes 'props' as input
function CreateArea(props) {
  // Use React's 'useState' hook to manage the component's state
  // Initialize 'isExpanded' state to 'false'
  const [isExpanded, setExpanded] = useState(false);

  // Initialize 'note' state as an object with 'title' and 'content' properties
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  // Event handler function to update 'note' state when input fields change
  function handleChange(event) {
    // Extract 'name' and 'value' from the event target
    const { name, value } = event.target;

    // Use the 'setNote' function to update the 'note' state
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  // Event handler function to submit the note when the 'Fab' (Floating Action Button) is clicked
  function submitNote(event) {
    // Call the 'onAdd' function from the 'props' and pass the current 'note' as an argument
    props.onAdd(note);

    // Reset 'note' state to clear the input fields after submitting the note
    setNote({
      title: "",
      content: ""
    });

    // Prevent the default form submission behavior (page refresh)
    event.preventDefault();
  }

  // Event handler function to expand the input fields when the textarea is clicked
  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      {/* Form to create a new note */}
      <form className="create-note">
        {/* Conditionally render the title input field based on 'isExpanded' state */}
        {isExpanded &&
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        }
        {/* Textarea to enter the note content */}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1} // Conditionally set the number of rows based on 'isExpanded' state
        />
        {/* Conditionally render the 'Fab' button with 'Zoom' effect based on 'isExpanded' state */}
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            {/* Render the 'AddIcon' from Material-UI */}
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

// Export the CreateArea component to make it available for other parts of the application
export default CreateArea;

// In summary, this code defines a React functional component called CreateArea. The component provides a form for users to create a new note with a title and content. The component uses the useState hook to manage the state of the isExpanded flag and the note object (containing title and content properties). The user can expand the title input field by clicking on the textarea, and clicking the Fab button triggers the submission of the note, which calls the onAdd function from the props. The Zoom component from Material-UI is used to provide an animation effect when the input fields expand.
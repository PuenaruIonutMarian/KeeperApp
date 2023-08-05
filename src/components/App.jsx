// Import React and the required components
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// Define the main App component
function App() {
  // Use React's 'useState' hook to manage the state of 'notes' array, initialized to an empty array
  const [notes, setNotes] = useState([]);

  // Function to add a new note to the 'notes' array
  function addNote(newNote) {
    // Use the 'setNotes' function to update the 'notes' state
    // Add the new note to the existing 'notes' array using the spread operator
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  // Function to delete a note from the 'notes' array based on its 'id'
  function deleteNote(id) {
    // Use the 'setNotes' function to update the 'notes' state
    // Filter out the note with the specified 'id' from the existing 'notes' array
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  // Render the App component
  return (
    <div>
      {/* Render the Header component */}
      <Header />
      {/* Render the CreateArea component and pass 'addNote' function as 'onAdd' prop */}
      <CreateArea onAdd={addNote} />
      {/* Render the Note component for each note in the 'notes' array */}
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index} // Use 'index' as the key, but it's generally not recommended for production apps
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

// Export the App component to make it available for other parts of the application
export default App;


// In summary, this code defines the main App component, which manages a list of notes. The component uses the useState hook to maintain the state of the notes array, where each note is an object with title and content properties. The addNote function is used to add new notes to the notes array, and the deleteNote function is used to remove notes from the array based on their id. The App component renders the Header, CreateArea, a list of Note components, and the Footer component.
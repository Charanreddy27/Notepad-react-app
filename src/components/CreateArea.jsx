import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event){
      const {name,value} =event.target;
      setNote(prevNote =>{
          return {
              ...prevNote,
              [name]: value
          };
      });

  }
  function submitNote(event){
    props.onAdd(note);
    setNote({
        
    title: "",
    content: ""
    })

    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange} value={note.content} placeholder="Add a Note..." rows="3" />
        <button onClick={submitNote}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
</svg> Add</button>
      </form>
    </div>
  );
}

export default CreateArea;

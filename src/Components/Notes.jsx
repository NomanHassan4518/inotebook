import React, { useContext } from 'react'
import noteContext from './notes/noteContext'
import Noteitem from './Noteitem';
import AddNote from './AddNote';


export default function Notes() {
  const context = useContext(noteContext)
  const { notes} = context;
  return (
    <>
      <AddNote />

      <div className=" row my-3">
        <h1 >Your Notes</h1>
        <div className="container">
        {notes.legth === 0 && "No notes to Display"}
        </div>
        {notes.map((note) => {

          return <Noteitem key={note.id} note={note} />

        })}
      </div>
    </>

  )
}

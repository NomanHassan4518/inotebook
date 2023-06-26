import React, {useContext} from 'react'
import noteContext from './notes/noteContext'

function Noteitem(props) {
    const context = useContext(noteContext)

    const { deleteNote } = context
    const { note } = props

    return (
        <div className='col-md-4 my-2' >
            <div className="card card-body ">
            <div className="d-flex align-items-center">
                    <h5 className="card-title text-center ">{note.title}</h5>
                    <i className="fa-solid fa-trash fa-lg mx-2 " onClick={()=>{deleteNote(note.id)}}></i>
                    <i className="fa-solid fa-pen-to-square fa-lg mx-2"></i>


              
                </div>
                <p className="card-text">{note.description}</p>

    
            </div>

      
        </div>

    )
}

export default Noteitem

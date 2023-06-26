import { useState } from 'react'
import noteContext from './noteContext'

const NoteState = (props) => {

    const note = [

        {
            _id: "11",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },

        {
            id: "12",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },

        {
            id: "13",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },

        {
            id: "2",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },

        {
            id: "3",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },

        {
            id: "4",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },


        {
            id: "5",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },


        {
            id: "6",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },


        {
            id: "7",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },


        {
            id: "8",
            title: "MyNotes",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nemo numquam fuga aperiam asperiores tenetur, dicta est repellendus pariatur, dolore mollitia aliquam, ipsa sapiente incidunt. Tempore, possimus. Ex quaerat nulla neque quis sunt tenetur!"

        },



    ]


    const [notes, setNotes] = useState(note);

    // const s1 ={
    //     "name": "Hassan",
    //     "class": "BSCS"
    // }

    // const [state , setState]= useState(s1);
    // const update = ()=>{
    //     setTimeout(()=>{
    //         setState({
    //             "name": "Noman Hassan",
    //             "class": "BSCS4"
    //         })
    //     },20000)
    // }

    // Add a Note 
    const addNote = (title, description) => {
        let note = {
            id: "25345326",
            title: title,
            description: description,
        };
        setNotes(notes.concat(note))
    }

    // Delete a Note 

    const deleteNote = (id) => {
        console.log("Delete Note ");
        const newNote = note.filter((note) => { return note._id !== id });
        setNotes(newNote)
    }





    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
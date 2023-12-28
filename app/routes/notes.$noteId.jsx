import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "../data/notes";

export default function NoteDeatilsPage(){
    const note = useLoaderData();
    return <main>
        <header>
            <nav>
                <Link to='/notes'>Back</Link>
            </nav>
            <h1>{note.title}</h1>
        </header>
        <p>{note.content}</p>
    </main>
}

export async function loader(params){
    const notes = await getStoredNotes();
    const noteId = params.noteId;
    const selectedNote = notes.find(note => note.id == noteId);
    if(!selectedNote){
        throw json({message : 'Not Found'},{
            status : 404,
            statusText : 'Not Found'
        })
    }
    return selectedNote;

}

export function mate(data){
    return {
        title : data.title,
        description : data.content
    }
}
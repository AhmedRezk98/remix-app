/* eslint-disable no-unused-vars */
import { json, redirect } from "@remix-run/node";

import NoteList ,{links as noteListLinks} from '../components/NoteList'

import NewNote ,{links as newNoteLinks} from "../components/NewNote";
import {getStoredNotes , storeNotes} from '~/data/notes';
import {useLoaderData,Link, useCatch } from "@remix-run/react";

export default function NotesPage(){
    const notes = useLoaderData();
    return (
    <main>
        <NewNote />
        <NoteList notes={notes} />
    </main>
    );
}

export async function loader(){
    const notes = await getStoredNotes();
    if(!notes){
        throw json({message : 'Could not find any notes'},{
            status : 404,
            statusText : 'Not Found'
        })
    }
    return notes;
}

export async function action({request}){
const formData = await request.formData();
const noteData = Object.fromEntries(formData);
if(noteData.title.trim().length < 5){
    return {message : 'Invalid Title'};
}
const existingNotes = await getStoredNotes();
noteData.id = new Date().toISOString();
const updatedData = existingNotes.concat(noteData);
storeNotes(updatedData);
return redirect("/notes");
}

export function meta(){
    return {
        title : 'All Notes',
        description : 'Manage Notes'
    }
}

export function links(){
    return [...newNoteLinks(),...noteListLinks()];
}

export function CatchBoundary(){
    const caughtResponse = useCatch();
    const message = caughtResponse.data?.message || 'Data Not Found';
    return <main>
        <p>{message}</p>
    </main>
}

export function ErrorBoundary(error){
    return <main>
    <h1>An Error Occured</h1>
    <p>{error.message}</p>
    <p>Back To <Link to='/'>safety</Link>!</p>
  </main>
}
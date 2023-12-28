import { Link } from '@remix-run/react';

import styles from '~/components/NoteList.css';

function NoteList(notes){
    return <ul>
        {notes.map((note,index) => {
            <li key={note.id}>
                <Link to={note.id} >
                <article>
                    <header>
                        <ul>
                            <li>#{index + 1}</li>
                            <li>
                                <time dateTime={note.id}></time>
                            </li>
                        </ul>
                        <h2>{note.title}</h2>
                    </header>
                    <p>{note.content}</p>
                </article>
                </Link>
            </li>
        })}
    </ul>
}



export function links(){
    return[{
        rel : 'stylesheet',
        href : styles
    }]
}

export default NoteList;
import { Form, useActionData, useNavigation } from '@remix-run/react';
import newNoteStyles from './NewNote.css';

function NewNote(){
    const navigation = useNavigation();
    const data = useActionData();
    const isSubmitting = navigation.state === 'submitting';
    return (
        <Form method="post">
            {data?.message && <p>data.message</p>}
            <p>
                <label htmlFor="title">Title</label>
                <input type='text' id="title" name="title" required></input>
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" rows='5' required></textarea>
            </p>
            <div>
                <button disabled = {isSubmitting}>{isSubmitting ? 'Adding...' : 'Add Note'}</button>
            </div>
        </Form>
    );
}

export default NewNote;

export function links(){
    return [{
        rel : 'stylesheet',
        href : newNoteStyles
    }]
}
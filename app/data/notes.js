import { json } from '@remix-run/node';
import fs from 'fs/promises';

export async function getStoredNotes(){
    const rawFileContent = await fs.readFile('notes.json',{encoding : 'utf-8'});
    const data = json.parse(rawFileContent);
    const storedData = data.notes ?? [];
    return storedData;
}

export function storeNotes(notes){
    return fs.writeFile('notes.json',json.stringify({notes : notes || []}));
}
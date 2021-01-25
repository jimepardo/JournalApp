import { db } from "../firebase/firebaseConfig";


export const loadNotes = async (uid) => {
    const notesSnap = await db.collection(`${uid}/journal/notes`).get();

    const notes= [];

    notesSnap.forEach( snapHijo => {
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });

    return notes;
}
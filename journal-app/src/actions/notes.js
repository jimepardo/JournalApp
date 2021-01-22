
import { useDispatch, useSelector } from 'react-redux';
import { db } from '../firebase/firebaseConfig';

export const startNewNote = () => {


    return async(dispatch, getState) => {
        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);

        console.log(doc);

    }
}
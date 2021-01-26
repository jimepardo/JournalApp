import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startSaveNote } from '../../actions/notes';


export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes);

    const handleSave = () => {
        dispatch( startSaveNote(active) );
    }


    return (
        <div className="notes__appbar">
            <span>28 de febrero de 2021</span>

            <div>
                <button className="btn">Picture</button>

                <button 
                    className="btn"
                    onClick={ handleSave }
                >Save</button>
            </div>
        </div>
    )
}
